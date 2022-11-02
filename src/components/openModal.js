import {createRoot} from "react-dom/client";
import React, {Suspense, lazy} from "react";

export function openModal(){
    const Modal = lazy( () => import("./ModalSettings"));
    const modalDiv = document.createElement("div");
    modalDiv.id= "Modal";
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render( <Suspense fallback={<div>Loading...</div>}><Modal root={root} title="Modal de configuraciones" /> </Suspense>)

}

export function openModalAccount(){
    const Modal = lazy( () => import("./ModalAccount"));
    const modalDiv = document.createElement("div");
    modalDiv.id= "Modal";
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render( <Suspense fallback={<div>Loading...</div>}><Modal root={root} title="Modal de tu cuenta" > contenido de modal </Modal></Suspense>)

}