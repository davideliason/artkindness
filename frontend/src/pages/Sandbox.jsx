import { useState } from "react";

function NameForm(){
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [submittedName,setSubmittedName]=useState("");

   function handleNameChange(event){
      setName(event.target.value);
   }

   function handleSubmit(event){
    event.preventDefault();
    setSubmittedName(name);
   }

   return (
      <div>
          <h5>Names</h5>
          <input value={name} onChange={handleNameChange}></input>
          <p>Hello {name} </p>

          <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} />
            <button type="submit">Submit</button>

            <p>Submitted: {submittedName}</p>
          </form>
      </div>
    )

}





export default function Sandbox() {
  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things..</p>
      <NameForm />

    </section>
  );
}