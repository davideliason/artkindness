import { useState } from "react";

function NameForm(){
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [submittedName,setSubmittedName]=useState("");
   const [submittedEmail,setSubmittedEmail]=useState("");

   function handleNameChange(event){
      setName(event.target.value);
   }

   function handleEmailChange(event){
    setEmail(event.target.value);
   }

   function handleSubmit(event){
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedEmail(email);
   }

   return (
      <div>
          <h5>Names</h5>
          <input value={name} onChange={handleNameChange}></input>
          <input value={email} onChange={handleEmailChange}></input>
          <p>Hello {name} </p>
          <p>Email: {email}</p>

          <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} />
            <input value={email} onChange={handleEmailChange} />
            <button type="submit">Submit</button>

            <p>Submitted: {submittedName}</p>
            <p>Submitted email: {submittedEmail}</p>
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