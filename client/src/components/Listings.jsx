import { useEffect, useState } from 'react';
import './Listings.css';

import SearchBar from './SearchBar';
import ListingModal from './ListingModal';

import { getItems } from '../../api/items';

function Listings({ userid }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        if (userid) {
          const dataByUserID = data.filter((item) => item.user_id === userid);
          setFilteredItems(dataByUserID);
        } else {
          setFilteredItems(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [userid]);

  const handleSearch = (searchWord) => {
    const filtered = filteredItems.filter((item) => item.title.toLowerCase()
      .includes(searchWord.toLowerCase()));
    setFilteredItems(filtered);
  };

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="listing-container">
        {filteredItems.length === 0 ? (
          <div className="no-items-found">No items found.</div>
        ) : (
          <ul className="listing-list">
            {[...filteredItems].reverse().map((item) => (
              <div className="list-item" key={item.id} onClick={() => handleItemClick(item.id)}>
                <div className="list-img">
                  <img src={item.image_url} alt="kuvan lataus epäonnistui" />
                  <div className="list-price">
                    <p>
                      {item.price}
                      {' '}
                      €
                    </p>
                  </div>
                </div>
                <h2>{item.title}</h2>
                <p>{item.location}</p>
              </div>
            ))}
          </ul>
        )}
      </div>
      {selectedItemId && (
      <ListingModal
        userid={userid}
        item={filteredItems.find((i) => i.id === selectedItemId)}
        onClose={() => setSelectedItemId(null)}
      />
      )}
    </>
  );
}

export default Listings;
