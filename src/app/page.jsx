import styles from "./page.module.css";
import { GoogleGenAI } from "@google/genai";

export default async function Home() {
  /* Requisição para GEMINI */
  const ai = new GoogleGenAI({ apiKey: process.env.API });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Quantos anos tem o IFCE campus Jaguaruana em 2025?",
  });
  console.log(response.text);

  return (
    <div className={styles.page}>
      <h2>Chat JGA</h2>
      <p>{response.text}</p>
    </div>
  );
}
