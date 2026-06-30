import {useState} from "react";

function FormData(){
  const [name,setName] = useState("tom");
  const [submittedName,setSubmittedName] = useState("");

  function handleChange(event){
    setName(event.target.value);
    }

    function handleSubmit(event){
      event.preventDefault();
      setSubmittedName(name);
    }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} />
        <button type="submit">submit</button>
        <h5>submitted name: {submittedName}</h5>
      </form>
    </div>
    )
}


export default function Sandbox() {
  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things..</p>
      <FormData />

    </section>
  );
}