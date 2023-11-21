import React from "react";
const Slider = (props) => {
    return (
        props.pic.map((item, indx) => (
            <div style={{ transform: `translateX(${100 * (indx - props.cnt)}%)` }} className='slide' key={indx}>
                <img src={item} alt="" />
            </div>
        ))
    )
}
export default Slider;