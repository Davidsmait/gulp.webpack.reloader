import React from "react";
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');

createRoot(container).render(
    <>
        <h1>React is sworking</h1>
    </>
)

console.log("works! :D")
console.log(__dirname)
console.log("esto es serio")
