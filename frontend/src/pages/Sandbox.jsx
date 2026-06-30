import { useState } from "react";


export default function Sandbox() {
  const [artworkName, setArtworkName] = useState("Kind Robot");
  const [message, setMessage] = useState("");
  const [returnedName, setReturnedName] = useState("test");
  const [savedKey, setSavedKey] = useState("");

  async function callHelloLambda() {
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

  console.log("The Status:", response.status);
  console.log("POST /artwork response:", data);

  setReturnedName(data.artworkName || "");
  setMessage(data.message || "");
  setSavedKey(data.key || "No key returned from Lambda");
  }

  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things here.</p>

      <button onClick={callHelloLambda}>Call Hello Lambda</button>
      <p>{message}</p>

      <input
        value={artworkName}
        onChange={(event) => setArtworkName(event.target.value)}
      />

      <button onClick={sendArtworkName}>Send Artwork Name</button>
      <p>Returned name: {returnedName}</p>
      <p>Message: {message}</p>
      <p>Saved s3 key: {savedKey}</p>
    </section>
  );
}