export default function Art() {
  return (
    <section>
      <h1>AI Art Generator</h1>
      <p>Upload a photo and generate a funny cat-inspired image.</p>

      <input type="file" accept="image/*" />

      <br />
      <br />

      <button>Generate Art</button>
    </section>
  );
}