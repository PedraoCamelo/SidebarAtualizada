import React, { useState } from 'react';
import './navbar.css'
import LogoVisualRoom from '../Componentes/assets/Logo_VisualRoom.svg'
import IconPesquisa from '../Componentes/assets/search_icon.svg'
import IconProfile from '../Componentes/assets/profile_icon.svg'
import IconConfig from '../Componentes/assets/gear_icon.svg'
import IconCalendario from '../Componentes/assets/calendar_icon.svg'
import IconNotif from '../Componentes/assets/bell_icon.svg'
import IconBarra from '../Componentes/assets/barras_icon.svg'
import IconX from '../Componentes/assets/close_Icon.svg'
import {Link} from 'react-router-dom';


function Homepage(){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className='navbar'>
      <div className='navbar_start'>
      <img src={IconBarra} alt="" className='Icon' id='BarraIcon' onClick={showSidebar} />
      <img src={LogoVisualRoom} alt="" className='logo'/>
      </div>

      <div className='barra-pesquisa'>
        <input type="text" placeholder='Procurar por algo'/>
        <img src={IconPesquisa} alt="" className='Icon'/>
      </div>

      <ul>
        <li><img src={IconNotif} alt="" className='Icon' /></li>
        <li><img src={IconCalendario} alt="" className='Icon' /></li>
        <li><img src={IconConfig} alt="" className='Icon' /></li>
        <li><img src={IconProfile} alt="" className='Icon' /></li>
      </ul>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'><img src={IconX} alt="" className='Icon' id='close'/></Link>
          </li>
        </ul>
      </nav> 

    </div>
  )
}

export default Homepage