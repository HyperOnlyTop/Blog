
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async explainTopic(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Giải thích ngắn gọn về chủ đề lập trình mạng sau đây bằng tiếng Việt: ${topic}. Hãy dùng phong cách chuyên gia nhưng dễ hiểu.`,
        config: {
          temperature: 0.7,
        }
      });
      return response.text || "Không thể nhận phản hồi từ AI.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Đã có lỗi xảy ra khi kết nối với AI trợ lý.";
    }
  }
}

export const geminiService = new GeminiService();
