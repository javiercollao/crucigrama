import { useContext, useEffect, useState } from "react";
import CrosswordPuzzle from "./CrosswordPuzzle";
import FormPuzzle from "./FormPuzzle"; 
import ProgressBar from "./ProgressBar";
import References from "./References";
import { DataContext } from "../../context/DataContext";
import Timer from "./Timer"; 
import Modal from "./Modal";

 
export default function Main() {  
  const { setNumberInputsTotal, puzzleData } = useContext(DataContext);  
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [modalContent, setModalContent] = useState(null);
 
  const openModalWithContent = (content, title) => {
    setModalContent(content);
    setTitleModal(title);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    console.log('Modal cerrado');
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (puzzleData) {
      setNumberInputsTotal(puzzleData);
    }
  }, [puzzleData, setNumberInputsTotal])
   
  return (
    <div className="container mainContainer">
      <div className="p-2 mt-3 flex-grow-1">
        <div className="col-lg-12 mb-3 px-0 d-flex justify-content-center">
          <h2>Crossword Completion Progress</h2>
        </div>
        <div className="col-lg-12 px-0 d-flex justify-content-center">
          <ProgressBar />
        </div>
        <div className="col-lg-12 px-0 d-flex justify-content-center">
          { 
            (!puzzleData)? 
              <div className="spinner-border text-primary mt-5"><span className="visually-hidden">Loading...</span></div>
              : <CrosswordPuzzle ans={puzzleData.answers} vword={puzzleData.vword} showAnswers={puzzleData.showAnswers} /> 
          }
        </div>
      </div>
  
      <div className="row mb-2">
        <div className="col-md-12 mt-3">
          <Timer />
        </div>
        <div className="col-md-6 mt-3">
          <FormPuzzle 
          openModalFn={openModalWithContent}  
          onClose={closeModal} 
          />
        </div>
        <div className="col-md-6 mt-3">
          <References refs={puzzleData.refs} />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={titleModal}>
        {modalContent}
      </Modal>
    </div>
  )
}