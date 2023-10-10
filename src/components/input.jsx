import React from "react";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('button_element')
function Input() {
    return(
        <>
            <h1>Input test</h1>
        </>
    )
}

createRoot(container).render(Input())
