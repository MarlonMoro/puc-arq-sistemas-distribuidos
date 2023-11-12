import './styles.css'
import Banner from '../../components/banner'
import { Link } from 'react-router-dom'
import BarMenu from "../../components/bar_menu"
import background from './img/background.png'
import bannerPratoDia from './img/bannerPratoDia.png'
import bannerCalendar from './img/bannerCalendar.png'


function Home() {

    return (
        <div>
            <BarMenu></BarMenu>
            <div className="page">
                <div className="container" style={{ backgroundImage: `url(${background})` }}>
                    <div className="title">Os melhores sabores agora entregues <span style={{ color: '#FA1313' }}>na usa casa</span></div>
                    <div className="subtitle">Aquela refeição, feita  com todo  carinho que você já conhece, agora entregue diretamente no conforto do seu lar. Todo o nosso cardápio disponível para você, confira!</div>
                    <Link className='menu-btn' to="/menu">Veja nosso cardápio</Link>
                </div>
            </div>
            <div className='page-banner'>
                <div className='page-banner-container'>
                    <Link to="/menu"><Banner color={"#FA1313"} title={"Pratos do dia"} message={"Confira nossas opções de hoje!"} img={bannerPratoDia}></Banner></Link>
                    <Link to="/menu"><Banner color={"#0DB0E4"} title={"Cardápio da semana"} message={"Confira nossas teremos nessa semana!"} img={bannerCalendar}></Banner></Link>
                </div>
            </div>
        </div>
    )

}

export default Home