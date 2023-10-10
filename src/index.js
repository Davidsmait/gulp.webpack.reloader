import React from "react";
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import App from './App.jsx'


const container = document.getElementById('root');

createRoot(container).render(
    <>
        <h1>React container</h1>
        <App />
    </>
)

console.log("works! :D")
console.log(__dirname)
console.log("esto es serio")
