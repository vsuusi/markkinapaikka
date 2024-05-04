import { useState } from 'react';

import './ListingModal.css';

function ListingModal({ item, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClose();
    }
  };

  return (
  // animaatio laskee ylhäältä ja nousee yläs kun clicked outside
    <div className={`listing-modal-bg ${isOpen ? 'modal--open' : ''}`} onClick={handleOutsideClick} onKeyDown={handleKeyDown}>
      <div className="listing-modal-container">
        <button onClick={handleClose}>Close</button>
        <div className="modal-left">
          <img src={item.image_url} alt="Item" />
        </div>
        <div className="modal-right">
          <h2>{item.title}</h2>
          <p>{item.description && item.description.length > 0 ? item.description : 'No description provided.'}</p>
          <p>
            Sijanti:
            {item.location}
          </p>
          <p>
            Hinta:
            {item.price}
            {' '}
            €
          </p>
          <p>Ilmoittaja: </p>
          <p>Yhteystiedot:</p>
        </div>
      </div>
    </div>
  );
}

export default ListingModal;
