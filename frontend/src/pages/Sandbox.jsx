import {useState} from "react";

export default function Sandbox() {
  
    const [message,setMessage] = useState(".");
    const [savedKey, setSavedKey] = useState("..");

    async function sendMessage() {
      const response = await fetch(
        "https://YOUR_API_ID.execute-api.us-west-2.amazonaws.com/artwork",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await response.json();

      setMessage(data.message);
      setSavedKey(data.key);
    }

















  return (
    <section>
      <h1>Sandbox</h1>
      <p>
        Try it. Make it. Break it here.
        <p>Message: {message}</p>
        <p>Saved Key: {savedKey}</p>
      </p>

     

    </section>
  );
}