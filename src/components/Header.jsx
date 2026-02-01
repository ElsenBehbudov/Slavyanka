import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./header.css";
import { FaRegUser, FaPhone } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [Modal, setModal] = useState(false);
  const [Nav, setNav] = useState(false);
  const [Shop, setShop] = useState(false);
  const [Call, setCall] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="header">
      <div className="header-component">
        <div className="logo-flex">
          <img src={logo} alt="techsu-logo" />
        </div>

        <div className="contact-flex">
          <p>Sifariş üçün:</p>
          <h2 onClick={() => setModal(true)}>*2121</h2>
        </div>

        <div className="nav-flex">
          <button className="nav1 btn">Əsas səhifə</button>
          <button className="nav2 btn">Məhsullar</button>
          <button className="nav3 btn">Haqqımızda</button>
          <button className="nav4 btn">Əlaqə</button>
        </div>

        <div className="language-flex">
          <button className="lang">AZE</button>
          <button className="icon user-btn">
            <FaRegUser />
          </button>
          <button className="icon" onClick={() => setShop(true)}>
            <MdOutlineShoppingCart />
          </button>
          <button className="icon nav" onClick={() => setNav(true)}>
            <FaBars />
          </button>
        </div>

        <div className="call-flex">
          <button className="call" onClick={() => setCall(true)}>
            <span className="call-icon">
              <FaPhone />
            </span>
            <span className="text">Zəng sifarişi</span>
          </button>
        </div>
      </div>

      {Modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4>Bir proqram seçin açılsınmı?</h4>

            <p>
              <strong>https://slavyanka.az</strong> bu proqramı açmaq istəyir.
            </p>

            <label className="modal-checkbox">
              <input type="checkbox" />
              Bu cür bağlantıları uyğun proqramda açmaq üçün slavyanka.az
              saytına hər zaman icazə ver
            </label>

            <div className="modal-actions">
              <button className="allow-btn" onClick={() => setModal(false)}>
                Bir proqram seçin adlı proqramı aç
              </button>
              <button className="cancel-btn" onClick={() => setModal(false)}>
                İptal
              </button>
            </div>
          </div>
        </div>
      )}

      {Nav && (
        <div className="topnav-overlay" onClick={() => setNav(false)}>
          <div className="topnav-panel" onClick={(e) => e.stopPropagation()}>
            <div className="topnav-actions">
              <button className="topnav-btn">
                <MdOutlineShoppingCart /> Səbət
              </button>
              <button className="topnav-btn">
                <FaRegUser /> Daxil ol
              </button>
            </div>

            <button className="topnav-call">
              <FaPhone /> Zəng sifarişi
            </button>

            <ul className="topnav-links">
              <li>Əsas səhifə</li>
              <li>Məhsullar</li>
              <li>Haqqımızda</li>
              <li>Əlaqə</li>
            </ul>

            <div className="topnav-footer">
              <p>Sifariş üçün:</p>
              <h3>*2121</h3>
            </div>
          </div>
        </div>
      )}

      {Shop && (
        <div className="shop-overlay" onClick={() => setShop(false)}>
          <div className="shop-panel" onClick={(e) => e.stopPropagation()}>
            <div className="shop-topbar">
              <h3>SƏBƏT</h3>
              <button className="shop-close" onClick={() => setShop(false)}>
                ✕
              </button>
            </div>

            <div className="shop-divider"></div>

            <div className="shop-empty">
              <MdOutlineShoppingCart size={50} color="#666" />
              <p>SƏBƏTİNİZ BOŞDUR</p>
            </div>

            <button className="shop-all-products">Bütün Məhsullar</button>
          </div>
        </div>
      )}

      {Call && (
        <div className="call-overlay" onClick={() => setCall(false)}>
          <div className="call-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Aşağıdakı hissəyə tələb olunan məlumatlarınızı daxil edin</h3>
            <p>
              Qeyd etdiyinizdə əməkdaşlarımız ən qısa zamanda sizə geri dönüş
              edəcəklər.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!name || !surname || !phone) {
                  setError(true);
                } else {
                  setError(false);
                  alert("Məlumat göndərildi!"); // buranı server request ilə əvəz edə bilərsən
                  setName("");
                  setSurname("");
                  setPhone("");
                  setCall(false);
                }
              }}
            >
              <input
                type="text"
                placeholder="Ad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Soyad"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Telefon nömrəsi"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {error && <p className="error-msg">Məlumat göndərilmədi!</p>}

              <button type="submit" className="send-btn">
                Göndər
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
