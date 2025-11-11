"use client";
import "./Form.css";

export default function Form() {
  function handleForm(formData) {
    const prompt = formData.get("prompt");

    console.log(prompt);
  }

  return (
    <div>
      <form className="form-container" action={handleForm}>
        Prompt:
        <textarea rows="5" cols="50" name="prompt" id=""></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
