import './styles.css'
import MenuItem from "../menu_item"
function DrinkMenu({ dailyMenu = null }) {

    let items = dailyMenu.drink?.products.map(product => <MenuItem key={product.id} img={product.imgUrl} name={product.name} value={product.price} quantity={product.quantity}></MenuItem>)

    return (
        <div className='drink-container'>
            <div className='drink-title'><span>Bebidas</span></div>
            <div className='drink-items'>
                {items}
            </div>

        </div>
    )
}

export default DrinkMenu