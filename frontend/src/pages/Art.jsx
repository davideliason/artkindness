function Welcome({ name }) {
  return <h2>hello world {name}</h2>
}


export default function Art() {
  return (
    <section>
      <h1>AI Art Generator</h1>
      <p>Upload a photo for an inspiring quote (coming soon).</p>

     <Welcome name="hello" />

      <input type="file" accept="image/*" />

      <br />
      <br />

      <button>Generate Art</button>
    </section>
  );
}