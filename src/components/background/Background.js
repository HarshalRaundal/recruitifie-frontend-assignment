import React from 'react';
import "./Background.css";
const Background = () => {
    return (
        <div className='dummy-root' style={{ opacity:"95%"}}>

            <div className='union '>
                <div className="boxy">
                    <div className="box"></div>
                </div>
                <div class="wrap " >
                    <div class="object"></div>
                </div>
                <div className="boxy" style={{ float: "right" }} >
                    <div className="box" style={{ transform: "rotate(-90deg)" }}></div>
                </div>
            </div>
        </div>
    )
}

export default Background