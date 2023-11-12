import { Link } from 'react-router-dom'
import './styles.css'
import { carrinho, logo } from './img'
import Home from '../../pages/home'
import Menu from '../../pages/menu'

function BarMenu() {
    return (
        <div className='menu-bar'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='menu-items'>
                <Link className='menu-item' to="/" >Home</Link>
                <Link className='menu-item' to="/menu">Cardápio</Link>
                <Link className='menu-item' reloadDocument>Quem Somos</Link>
                <Link className='menu-item' reloadDocument>Contato</Link>
                <Link className='carrinho-btn' reloadDocument><img src={carrinho}></img></Link>
                <Link className='order-btn' reloadDocument>Faça seu pedido</Link>
            </div>

        </div>
    )
}

export default BarMenu