import { useState } from "react";

export default function Sandbox() {

  const [message, setMessage] = useState("");

  async function callLambda() {
    const response = await fetch(
      "https://jn41btrinc.execute-api.us-west-2.amazonaws.com/hello"
    );

    const data = await response.json();

    setMessage(data.message);
  }
  
  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things here..</p>

         <button onClick={callLambda}>Call Lambda</button>
      <p>{message}</p>
    </section>

   
  );
}