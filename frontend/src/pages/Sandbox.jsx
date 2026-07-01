import { useState } from "react";

export default function Sandbox() {
  const [word, setWord] = useState("");
  const [savedKey, setSavedKey] = useState("");
  const [message, setMessage] = useState("");

  async function saveWord() {
    console.log("Saving word:", word);
  }

  return (
    <section>
      <h1>Sandbox</h1>

      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Enter one word"
      />

      <button onClick={saveWord}>Save word</button>

      <p>Message: {message}</p>
      <p>Saved key: {savedKey}</p>
    </section>
  );
}