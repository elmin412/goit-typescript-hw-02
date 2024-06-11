import Modal from 'react-modal';

interface ImageModalProps {
  isOpen: boolean;
  modalimg: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, onClose, modalimg, alt }: ImageModalProps) {
    Modal.setAppElement(document.body);
    
    const customStyles = {
        overley: {
            backgroundColor: "grey"
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
};
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel={alt}
      >
        <div>
          <img src={modalimg} alt={alt} />
        </div>
      </Modal>
    </div>
  );
}