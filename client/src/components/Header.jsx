import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h3>Markkinapaikka</h3>
      </div>
      <div className="header-buttons">
        <button>Uusi ilmoitus</button>
        <button>Profiili</button>
      </div>
    </div>
  );
}

export default Header;
