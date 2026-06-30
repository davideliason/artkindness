import { useState } from "react";

export default function Home() {
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
      <h1>Create AI-powered art with kindness</h1>
      <p>
        ArtKindness AI is a creative app for generating fun, playful,
        and inspiring artwork using generative AI.
      </p>

      <button onClick={callLambda}>Call Lambda</button>
      <h5>The Lambda message is: </h5>
      <p>{message}</p>

    </section>
  );
}