import Form from "@/components/form/Form";
import styles from "./page.module.css";
import { GoogleGenAI } from "@google/genai";

export default async function Home() {
  /* Requisição para GEMINI */
  // const ai = new GoogleGenAI({ apiKey: process.env.API });

  // const response = await ai.models.generateContent({
  //   model: "gemini-2.5-flash",
  //   contents: "Crie uma logo no farmato png do ifce",
  // });
  // console.log(response.text);

  return (
    <div className={styles.page}>
      <h2>Chat JGA</h2>
      <Form />
      {/* <p>{response.text}</p> */}
    </div>
  );
}
