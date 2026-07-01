import { useState } from "react";

export default function Sandbox() {
  const [word, setWord] = useState("");
  const [savedKey, setSavedKey] = useState("");
  const [message, setMessage] = useState("")



    async function saveWord() {
      try {
        const response = await fetch(
          "https://r7wij4blkl.execute-api.us-west-2.amazonaws.com/words",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              word: word,
            }),
          }
        );

        const data = await response.json();

        console.log("POST /words status:", response.status);
        console.log("POST /words response:", data);

        setMessage(data.message || "");
        setSavedKey(data.key || "");
      } catch (error) {
        console.error("saveWord failed:", error);
        setMessage("Request failed");
      }
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