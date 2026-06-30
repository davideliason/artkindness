import { useState } from "react";

export default function Sandbox() {
  const [artworkName, setArtworkName] = useState("Kind Robot");
  const [message, setMessage] = useState("");
  const [returnedName, setReturnedName] = useState("test");

  async function callHellolLambda() {
    const response = await fetch(
      "https://jn41btrinc.execute-api.us-west-2.amazonaws.com/hello"
    );

    const data = await response.json();

    console.log("here is the data from helloLambda",data);

    setMessage(data.message);
  }

  async function sendArtworkName() {
    const response = await fetch(
      "https://jn41btrinc.execute-api.us-west-2.amazonaws.com/artwork",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artworkName: artworkName,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    setReturnedName(data.artworkName);
  }

  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things here.</p>

      <button onClick={callHellolLambda}>Call Hello Lambda</button>
      <p>{message}</p>

      <input
        value={artworkName}
        onChange={(event) => setArtworkName(event.target.value)}
      />

      <button onClick={sendArtworkName}>Send Artwork Name</button>
      <p>Returned name: {returnedName}</p>
    </section>
  );
}