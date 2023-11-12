import './styles.css'
import MenuItem from "../menu_item"
function MealMenu({ dailyMenu = null}) {
    
    let items = dailyMenu?.meal?.products.map(product => <MenuItem key={product.id} img={product.imgUrl} name={product.name} value={product.price} quantity={product.quantity}></MenuItem>)
    
    return (
        <div className='meal-container'>
            <div className='meal-title'><span>Refeições</span></div>
            <div className='meal-items'>
                {items}
            </div>
            
        </div>
    )
}

export default MealMenu