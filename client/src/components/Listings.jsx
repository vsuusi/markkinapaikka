import { useEffect, useState } from 'react';
import './Listings.css';

import SearchBar from './SearchBar';

import { getItems } from '../../api/items';

function Listings() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <SearchBar />
    <div className="listing-container">
      <ul className="listing-list">
        {items.map((item) => (
          <div className="list-item" key={item.id}>
            <div className="list-img">
              <img src={item.image_url} alt="kuvan lataus epäonnistui" />
              <div className="list-price">
                <p>{item.price} €</p>
              </div>
            </div>
            <h2>{item.title}</h2>
            <p>{item.location}</p>
          </div>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Listings;
