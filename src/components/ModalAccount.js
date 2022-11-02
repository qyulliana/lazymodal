import Modal from "./Modal";
import "./modalAccount.css"
export default function ModalAccount({title, root}) {
    return (
    <>
    <Modal title={title} root={root}>

        <div className={"containerImagen"}>
            <img src={'https://thumbs.dreamstime.com/b/welcome-logo-red-curled-ribbon-banner-icon-design-d-vector-illustration-sign-template-98019573.jpg'} width={"200px"}/>
        </div>
        <div className={"containerModal"}>
            <input className={"inputText"} type={"text"}/>
            <input type={"email"}/>
            <button className={"buttonModal"}>Enviar</button>
        </div>
    </Modal>
    </>

    )
}