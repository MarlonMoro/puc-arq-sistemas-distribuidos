import './styles.css'
import DailyMenu from "../daily_menu"
import { seg, ter, qua, qui, sex, sab } from "../daily_menu/img"
import { useState } from "react"

const days = [{
    label: 'Segunda',
    img: seg
}, {
    label: 'Terça',
    img: ter
}, {
    label: 'Quarta',
    img: qua
},
{
    label: 'Quinta',
    img: qui
},
{
    label: 'Sexta',
    img: sex
},
{
    label: 'Sábado',
    img: sab
}
]

function WeekMenu({ selectedDay, event }) {
    
    selectedDay = selectedDay ? selectedDay : 'Segunda';
    
    const [selected, setSelected] = useState([selectedDay])

    const handleDayComponentClick = (lbl) => {
        setSelected(lbl)
        event(lbl)
    }

    const weekButtons = days.map(day => <DailyMenu id={day.label} key={day.label} event={handleDayComponentClick} img={day.img} isSelected={selected?.toString()===day.label.toString()}>{day.label}</DailyMenu>)

    return (
        <div className='week-menu'>
            <div className='menu-title'><span>Cardápio da semana</span></div>
            <div className='menu'>
                {weekButtons}
            </div>

        </div>
    )
}

export default WeekMenu