import { useState } from "react";

function Welcome({name}){
  const hellos = ["bonjour", "hola", "hello"];
  const [ showGreetings, setShowGreetings ]=useState(false);

  function sayHello(){
     setShowGreetings(true);
  }

  function sayGoodbye(){
    setShowGreetings(false)
  }

  return (
      <div>
         <h3>hello, {name}</h3>
         <button onClick={sayHello}>show</button>

         <button onClick={sayGoodbye}>hide</button>

          {showGreetings &&
          hellos.map((helloo) => (
              <p key={helloo}>{helloo}</p>
            ))
       }

      </div>
    )
}

function Counter(){
  const [count,setCount] = useState(0)

  function addOne(){
    setCount(count +1);
  }

  function addOneRevised(){
    setCount((currentCount) => currentCount +1 );
  }

  function subtractOne(){
    setCount(count -1);
  }

  return (
      <div>
        <h3>bonjour {count}</h3>
        <button onClick={addOne}>+</button>
        <button onClick={subtractOne}>-</button>
        <button onClick={addOneRevised}> New +</button>
      </div>
    );
}

export default function Art() {
  return (
    <section>
      <Counter />
      <Welcome name="John" />
      <h1>AI Art Generator</h1>
      <p>Upload a photo for an inspiring quote (coming soon).</p>

    
    </section>
  );
}