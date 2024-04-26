
import { useState } from "react";
import "./App.css";
import Delete from "./components/Delete";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  const closeW = () => {
    setOpen((prev) => !prev); 
  }

        
  

    return (
        <div className=" flex justify-center items-center h-[100vh]  ">
            <Delete closeW={closeW} />

            <Modal open={open} closeW={closeW} />
        </div>
    );
}

export default App;
