import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Modal = ({ show, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    
    const modalContent = show ? (

        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-[rgba(0, 0, 0, 0.5)] z-[9999]">
            <div className="cursor-pointer" onClick={handleCloseClick}>
              <h1 className="text-white text-right pr-2 text-[25px] mb-[10px]">x</h1>
              <ReactPlayer url='https://www.youtube.com/watch?v=wLT53hGoa6M' />
            </div>
        </div>
        
        ): null;
      

  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };

  
  const StyledModalBody = styled.div`
    padding-top: 10px;
  `;
  
  const StyledModalHeader = styled.div`
    font-size: 25px;
  `;
  
  const StyledModal = styled.div`
    background: black;
    width: 670px;
    height: 500px;
    border-radius: 15px;
    padding: 15px;
  `;
  const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  `;
  
  export default Modal;