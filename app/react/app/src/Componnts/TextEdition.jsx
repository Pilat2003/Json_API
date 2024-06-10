import React, { useState, useEffect } from 'react';
export default function TextEdition() {

    const [_text, setText] = useState("andkonda");
  
    useEffect(() => {
     //var t= setInterval(CheckCount,2000);
     
     return () => {
       //clearInterval(t);
     };
   }, []);
 
 function CheckCount(){
   fetch('http://127.0.0.1:3001/API/TEXT/SHOW')
   .then(response => response._text())
   //.then(data => setText((JSON.parse(data))._text));
   
 
 }
 function Click(){
    console.log(JSON.stringify({text: _text}));
   var a =fetch("http://127.0.0.1:3001/API/TEXT/EDIT", 
    {
        headers: {
             'Accept': 'application/json',
      'Content-Type': 'application/json'
        },

        method: "POST",
        body: JSON.stringify({text: _text})
    }
   );
   CheckCount();
 }
 


    return (<>
     <h1 id='Title'>Liczba Kliknięć: {_text}</h1>
    <button onClick={Click} >Klik</button>
    </>
    )
  }
