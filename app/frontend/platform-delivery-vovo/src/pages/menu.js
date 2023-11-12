import BarMenu from "../components/bar_menu"
import WeekMenu from "../components/week_menu"
import MealMenu from "../components/meal_menu"
import DrinkMenu from "../components/drink_menu"
import { useEffect, useState } from "react"

const getDailyMenus = async () => {
    const response = await fetch('https://os440rpkdh.execute-api.us-east-1.amazonaws.com/online/daily-menus?begin=2023-10-30&end=2023-11-04', {
        method: 'GET',
        headers: {
            'x-api-key': '--inserir-api-key'
            }
    })
    const body = await response.json()

    return body.dailyMenus
    
}

const getMenuDay = (menuDays, labelDay) => {
    const menuDay = menuDays.filter(day => day['description']?.toString() === labelDay.toString())
    return menuDay[0]
}

const defaultDay = 'Segunda'

function Menu() {

    const [userState, setUserState] = useState({
        menus: [],
        dayLabel: 'Segunda'
    })

    const [dailyMenus, setDailyMenus] = useState([])


    useEffect(() => {
        const fetchMenus = async () => {
            const menuResponse = await getDailyMenus();
            setDailyMenus(menuResponse)
            setUserState({
                menus: menuResponse,
                dayLabel: defaultDay
            })
        };

        fetchMenus();
    }, []);

    const handleDayClick = (selectedDay) => {
        setUserState({
            menus: dailyMenus,
            dayLabel: selectedDay
        })
    }


    let { menus, dayLabel } = userState
    const dayMenu = getMenuDay(menus, dayLabel) ? getMenuDay(menus, dayLabel).items : []

    return (
        <div>
            <BarMenu></BarMenu>
            <WeekMenu selectedDay={defaultDay} event={handleDayClick}></WeekMenu>
            <MealMenu dailyMenu={dayMenu}></MealMenu>
            <DrinkMenu dailyMenu={dayMenu}></DrinkMenu>
        </div>
    )

}

export default Menu