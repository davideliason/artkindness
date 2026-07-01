import { useState } from "react";

export default function Sandbox() {
  const [word, setWord] = useState("");
  const [savedKey, setSavedKey] = useState("");
  const [words, setWords] = useState([]);
  const [message,setMessage] = useState("");



    async function saveWord() {

      if (word.trim() === "") {
        setMessage("Please enter a word");
        return;
        }
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

        setSavedKey(data.key || "");
        setMessage(data.message || "word saved");
        setWord("");

        await loadWords();
      } catch (error) {
        console.error("saveWord failed:", error);
      }
    }

    async function loadWords() {
        const response = await fetch(
          "https://r7wij4blkl.execute-api.us-west-2.amazonaws.com/words"
        );

        const data = await response.json();

        console.log("GET /words status:", response.status);
        console.log("GET /words response:", data);

        setWords(data.words || []);
      }



  return (
    <section>
      <h1>Sandbox</h1>
      <h5>Message: {message}</h5>

      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Enter one word"
      />

      <button onClick={saveWord}>Save word</button>

      <button onClick={loadWords}>Load saved words</button>

      <ul>
        {words.map((item) => (
          <li key={item.key}>
            {item.word}
          </li>
        ))}
      </ul>
    </section>
  );
}