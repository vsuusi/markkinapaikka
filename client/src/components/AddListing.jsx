import './AddListing.css';

function AddListing() {
  return (
    <div className="add-listing-container">
      <div className="add-listing-form">
        <form>
          <h1>Luo uusi ilmoitus</h1>
          <div className="add-listing-input-box">
            <input type="text" placeholder="Otsikko" />
          </div>
          <div className="add-listing-input-box">
            <input type="text" placeholder="Kuvaus" />
          </div>
          <div className="add-listing-input-box">
            <input type="number" placeholder="Hinta" />
          </div>
          <div className="add-listing-input-box">
            <input type="text" placeholder="Sijanti" />
          </div>
          <button type="submit">Luo ilmoitus</button>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
