import {useState} from "react";

function SignUpForm(){
  const [formData,setFormData]=useState(
   {
     name:"",
     faveColor:"",
    });

  function handleNameChange(event){
    setFormData({
      ...formData, 
      name: event.target.value
    });
  }

  function handleFaveColorChange(event){
    setFormData({
      ...formData,
      faveColor:event.target.value
    });
  }



 return (
    <div>
      <input value={formData.name} onChange={handleNameChange} />
      <p>name: {formData.name}</p>
      <input value={formData.faveColor} onChange={handleFaveColorChange} />
      <p> faveColor: {formData.faveColor} </p>
    </div>
  );
}

export default function Sandbox() {
  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things..</p>
      <SignUpForm />

    </section>
  );
}