import { useRef, useContext } from 'react';
import { addItem } from '../../api/items';
import { AuthContext } from '../context/authcontext';

import './AddListing.css';

function AddListing() {
  const auth = useContext(AuthContext);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const locationRef = useRef();
  const imageUrlRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('userid: ', auth.userId);
    const newItem = {
      user_id: auth.userId,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      location: locationRef.current.value,
      image_url: imageUrlRef.current.value,
      token: auth.token,
    };
    try {
      const resp = await addItem(newItem);
      console.log('new item added succesfully: ', resp);
    } catch (err) {
      console.error('error posting item: ', err);
    }
  };

  return (
    <div className="add-listing-container">
      <div className="add-listing-form">
        <form onSubmit={submitHandler}>
          <h1>Luo uusi ilmoitus</h1>
          <div className="add-listing-input-box">
            <input type="text" maxLength="45" ref={titleRef} placeholder="Otsikko" required />
          </div>
          <div className="add-listing-input-box">
            <input type="number" step="0.01" min="0" ref={priceRef} placeholder="Hinta" />
          </div>
          <div className="add-listing-input-box">
            <input type="text" maxLength="45" ref={locationRef} placeholder="Sijanti" />
          </div>
          <div className="add-listing-textarea-box">
            <textarea type="text" ref={descriptionRef} placeholder="Kuvaus" />
          </div>
          <div className="add-listing-input-box">
            <input type="text" maxLength="255" ref={imageUrlRef} placeholder="Linkki kuvaan" />
          </div>
          <button type="submit">Luo ilmoitus</button>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
