import './styles.css'
import { useState } from "react"
function DailyMenu(props) {

    const [isHover, setIsHover] = useState(false);
    
    const handleClick = (event) => {
        props.event(event.target.innerText)
    }

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const borderStyle = props.isSelected || isHover ? 'solid' : 'none'
    const borderColor = props.isSelected || isHover ? '#38A0FF' : '#F0F0F0'

    return (
        <button className='dailyMenu'
            style={{ backgroundImage: `url(${props.img})`, borderStyle: borderStyle, borderColor: borderColor }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
            {props.children}
        </button>
    )
}

export default DailyMenu