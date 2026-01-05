import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an expert UI/UX designer and frontend developer. Your task is to analyze hand-drawn UI sketches and convert them into clean, modern, responsive HTML + Tailwind CSS code.

When analyzing a sketch:
1. Identify the layout structure (header, main content, sidebar, footer, etc.)
2. Recognize UI components (buttons, cards, forms, navigation, etc.)
3. Understand the visual hierarchy and spacing
4. Infer appropriate colors and styling based on modern design principles

Generate HTML that:
- Uses semantic HTML5 elements
- Applies Tailwind CSS classes for styling
- Is fully responsive (mobile-first approach)
- Includes appropriate hover states and transitions
- Uses a modern, clean aesthetic with subtle shadows and rounded corners
- Includes the Tailwind CDN script tag

Output ONLY the complete HTML document, no explanations or markdown code blocks. Start with <!DOCTYPE html> and end with </html>.`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64, mimeType, refinementPrompt } = await req.json();
    
    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: 'No image provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build user message content
    const userContent: any[] = [
      {
        type: "image_url",
        image_url: {
          url: `data:${mimeType || 'image/jpeg'};base64,${imageBase64}`
        }
      },
      {
        type: "text",
        text: refinementPrompt 
          ? `Analyze this UI sketch and generate HTML + Tailwind CSS code. Additional instructions: ${refinementPrompt}`
          : "Analyze this UI sketch and generate clean, modern, responsive HTML + Tailwind CSS code that recreates this design."
      }
    ];

    console.log('Sending request to Lovable AI...');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userContent }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI usage limit reached. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Failed to process image with AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    let generatedCode = data.choices?.[0]?.message?.content || '';
    
    // Clean up the response - remove markdown code blocks if present
    generatedCode = generatedCode.replace(/```html\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Ensure it starts with DOCTYPE
    if (!generatedCode.toLowerCase().startsWith('<!doctype')) {
      generatedCode = `<!DOCTYPE html>\n${generatedCode}`;
    }

    console.log('Successfully generated code, length:', generatedCode.length);

    return new Response(
      JSON.stringify({ code: generatedCode }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in sketch-to-code function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
