import React, { useState, useEffect } from 'react';
export default function ClickExample() {




    const [count, setCount] = useState("");
  
    useEffect(() => {
     var t= setInterval(CheckCount,2000);
     
     return () => {
       clearInterval(t);
     };
   }, []);
 
 function CheckCount(){
   fetch('http://127.0.0.1:3001/CheckClick')
   .then(response => response.text())
   .then(data => setCount(data));
   
 
 }
 function Click(){
   var a =fetch("http://127.0.0.1:3001/ADDClick");
   CheckCount();
 }
 


    return (<>
     <h1 id='Title'>Liczba Kliknięć: {count}</h1>
    <button onClick={Click} >Klik</button>
    </>
    )
  }
