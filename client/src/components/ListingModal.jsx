import { useState, useContext } from 'react';
import { AuthContext } from '../context/authcontext';
import { deleteItem } from '../../api/items';

import './ListingModal.css';

function ListingModal({ userid, item, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const auth = useContext(AuthContext);

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

  const handleItemRemoval = async () => {
    const request = {
      token: auth.token,
      id: item.id,
    };
    try {
      await deleteItem(request);
      handleClose();
    } catch (err) {
      console.error('error deleting item: ', err);
    }
  };

  return (
  // animaatio laskee ylhäältä ja nousee yläs kun clicked outside
    <div className={`listing-modal-bg ${isOpen ? 'modal--open' : ''}`} onClick={handleOutsideClick} onKeyDown={handleKeyDown}>
      <div className="listing-modal-container">
        <button className="modal-close-button" onClick={handleClose}>Close</button>
        <div className="modal-left">
          <img src={item.image_url} alt="Item" />
        </div>
        <div className="modal-right">
          <h2>{item.title}</h2>
          <p>{item.description && item.description.length > 0 ? item.description : 'No description provided.'}</p>
          <p>
            {item.location}
            {' '}
            📍
          </p>
          <p>
            {item.price}
            {' '}
            €
          </p>
          <p>Ilmoittaja: </p>
          <p>Yhteystiedot:</p>
          {userid && (
            <div className="modal-edit-buttons">
              <button>
                Muokkaa
              </button>
              <button onClick={handleItemRemoval}>
                Poista
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingModal;
