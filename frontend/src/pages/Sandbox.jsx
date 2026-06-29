import { useState } from "react";

function NameForm(){
   const [name,setName] = useState("");
   const [submittedName,setSubmittedName]=useState("");

   function handleChange(event){
      setName(event.target.value);

   }

   return (
      <div>
          <h5>Names</h5>
          <input value={name} onChange={handleChange}></input>
          <p>Hello {name} </p>
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