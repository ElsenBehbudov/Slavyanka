import React, { useState } from 'react'
import logo from '../assets/logo.png'
import "./header.css"
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Header = () => {
    const [Modal , setModal] = useState(false)
  return (
    <div className='header'>
        <div className='header-component'>
      <div className='logo-flex'>
        <img src={logo} alt="techsu-logo" />
      </div>

      <div className='contact-flex'>
        <p>Sifariş üçün:</p>
        <h2 onClick={()=>setModal(true)}>*2121</h2>
      </div>

      <div className='nav-flex'>
        <button className='nav1 btn'>Əsas səhifə</button>
        <button className='nav2 btn'>Məhsullar</button>
        <button className='nav3 btn'>Haqqımızda</button>
        <button className='nav4 btn'>Əlaqə</button>
      </div>

      <div className='language-flex'>
        <button className='lang'>AZE</button>
        <button className='icon'><FaRegUser /></button>
        <button className='icon'><MdOutlineShoppingCart /></button>
      </div>

      <div className='call-flex'>
        <button className='call'>
            <span className='call-icon'><FaPhone /></span>
            <span className='text'>Zəng sifarişi</span>
        </button>
      </div>
</div>
      {Modal && (
      <div className='number-modal'>
        <h4>Bir program sənin üçün açılsınmı?</h4>
        <p>https://slavyanka.az/ bu programı açmaq istəyir.</p>
        <div className='flex-modal'>
        <input type="checkbox" name="slavyanka" />
        <p>Bu cür bağlantıları uyğunlaşdırmış programı açması üçün slavyanka.az saytına hər zaman icazə ver</p>
        </div>
        <button className='allow-btn' onClick={()=>setModal(false)}>Programın açılmasına icazə ver</button>
        <button className='rejected-btn' onClick={()=>setModal(false)}>İcazə vermə</button>
      </div>
    )}
    </div>
  )
}

export default Header
