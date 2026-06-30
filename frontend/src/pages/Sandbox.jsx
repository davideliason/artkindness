import {useState} from "react";

function SignUpForm(){
  const [formData,setFormData]=useState(
   {
     name:"",
     faveColor:"",
    });

  function handleChangeEvent(event){
     const fieldName = event.target.name;
     const fieldValue = event.target.value;

     setFormData({
     ...formData, 
     [fieldName]: fieldValue,
     });
  }

 return (
    <div>
      <input name="name" value={formData.name} onChange={handleChangeEvent} />
      <p>name: {formData.name}</p>
      <input name="faveColor" value={formData.faveColor} onChange={handleChangeEvent} />
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