import './App.css';
import {openModalAccount, openModal, } from "./components/openModal";

function App() {
    function handleOpenModal() {
        openModal();
    }

    function handleOpenModal2() {
        openModalAccount();
    }
  return (
    <div className="App">
        <button  className={"custom-btn btn-11"} onClick={handleOpenModal}>Abrir modal
            <div className="dot"></div></button>
        <button className={"custom-btn btn-11"} onClick={handleOpenModal2}>Abrir modal<div className="dot"></div>
        </button>

    </div>
  );
}

export default App;
