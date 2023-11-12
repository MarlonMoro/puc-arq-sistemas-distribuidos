import './styless.css'

function Banner({ title, img, message, color }) {
    return (
        <div className="banner-container" style={{ backgroundColor: `${color}` }}>
            <div className="banner-title">{title}</div>
            <div className="banner-content">
                <div className="banner-message">{message}</div>
                <div className="banner-img" style={{ backgroundImage: `url(${img})`, backgroundColor: `${color}` }}></div>
            </div>


        </div>
    )
}

export default Banner