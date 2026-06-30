



export default function Art() {
  return (
    <section>
      <h1>AI Art Generator</h1>
      <p>Upload a photo for an inspiring quote (coming soon).</p>
       <button onClick={callLambda}>Call Lambda</button>
      <h5>The Lambda message is: </h5>
      <p>{message}</p>
    
    </section>
  );
}