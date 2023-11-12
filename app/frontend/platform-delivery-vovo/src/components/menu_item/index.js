import './styles.css';
import addicon from './img/addicon.png'

function MenuItem(props) {
    return (
        <div className='item-container'>
            <div className='item-img' style={{ backgroundImage: `url(${props.img})`}}></div>
            <div className='item-head'>   
                <span className='item-title'>{props.name}</span>
                <img className='add-icon' src={addicon} />
            </div>
            <div className='item-desc'>
                <span className='item-quantity'>{props.quantity}</span>
                <span className='item-value'>{`R$${props.value}`}</span>
            </div>

        </div>
    )
}

export default MenuItem