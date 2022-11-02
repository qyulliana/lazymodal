import React,{useRef} from "react";
import "./modalcontainer.css"

const Modal = ({children, title, root}) => {
    const ref= useRef(null)
    function callback(e) {
        root.unmount();
        document.querySelector("#modal").remove();
        ref.current.removeEventListener("animationend", callback);
    }

    function handleClick() {
        ref.current.classList.add("fadeOut");
        ref.current.addEventListener('animationend', callback , {
        }, {once: true})
    }
    return (
        <>
            <div  className={"modalContainer"} ref= {ref}>
                <div className={"modalView"}>
                     <div className={'modalHeader'}>
                         <div></div>
                         <div>
                             <button onClick={handleClick} className={"closeButton"}>X</button>
                         </div>
                     </div>

                    <div className={"modalContent"}>{children}</div>

                </div>
            </div>

        </>

    )
}

export default Modal