
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getQuickInsight = async (url: string, name: string) => {
  if (!API_KEY) {
    return "Thank you for submitting! We'll be in touch shortly with your full report.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a high-level UX/CRO consultant. A potential client named ${name} just submitted their website URL: ${url} for a free assessment. 
      Generate a short, professional, and encouraging "first impression" teaser (max 2-3 sentences). 
      Focus on general best practices for their industry if the site is not visitable, or simply acknowledge their specific URL and mention you're starting the deep dive into their conversion funnel.
      Keep it high-energy and professional.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });

    return response.text || "Submission received! We are analyzing your site as we speak.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you! We've received your request and will start our analysis immediately.";
  }
};
