function Welcome({ name }) {

  function sayHello() {
    alert("hello" + name)
  }

   return (
      <div>
        <h3> Hello {name} </h3>
        <button onClick={sayHello}> say hello </button>
      </div>
    )
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