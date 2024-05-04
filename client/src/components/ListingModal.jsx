import { useState, useContext } from 'react';
import { AuthContext } from '../context/authcontext';
import { deleteItem } from '../../api/items';

import './ListingModal.css';

function ListingModal({ userid, item, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(item);

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
  /*
  const handleItemUpdate = async () => {
    const updatedItem = {
      token: auth.token,
      id: item.id,
    };
  };
  */
  return (
  // animaatio laskee ylhäältä ja nousee yläs kun clicked outside
    <div className={`listing-modal-bg ${isOpen ? 'modal--open' : ''}`} onClick={handleOutsideClick} onKeyDown={handleKeyDown}>
      <div className="listing-modal-container">
        <button className="modal-close-button" onClick={handleClose}>X</button>
        <div className="modal-left">
          <img src={item.image_url} alt="Item" />
        </div>
        <div className="modal-right">
          <h2>{item.title}</h2>
          <p>{item.description && item.description.length > 0 ? item.description : 'Ei kuvausta.'}</p>
          <p>{item.location && item.location.length > 0 ? item.location : 'Ei sijantitietoa.'}</p>
          <p>
            {item.price}
            {' '}
            €
          </p>
          <div className="border" />
          <p>
            Ilmoittanut:
            {' '}
            <strong>{item.user_name}</strong>
          </p>
          <p>
            Puhelin:
            {' '}
            <strong>{item.user_phone}</strong>
          </p>
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
