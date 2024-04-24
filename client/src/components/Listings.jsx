import { useEffect, useState } from 'react';
import './Listings.css';

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
    <div className="listing-container">
      <ul className="listing-list">
        {items.map((item) => (
          <div className="list-item" key={item.id}>
            <img src={item.image_url} alt="kuvan lataus epäonnistui" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.location}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
