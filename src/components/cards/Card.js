import React from 'react'
import { BsFillCircleFill } from "react-icons/bs";
const Card = (cardData) => {

    const cardCSS = {
        borderRadius: "1.5em",
        boxShadow: "13px 10px 15px -17px rgba(0,0,0,0.1)",
        zIndex:"1000"
    }
    

    return (

        <div className='container border text-start h-100 p-4  style={{height:"100vh"}} ' style={cardCSS} >


            <div className=' m-0 p-0 d-inline-block text-center d-flex' style={{ fontSize: "2.5em", color: cardData.theme.bg }}>
                <BsFillCircleFill />
            </div>

            <div className='fw-bold'>
                { cardData.card && cardData.card.heading}

            </div>
            <div className='container text-secondary fs-6'>

                {
                    cardData.card && (
                        <ul>
                            {cardData.card.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>)
                }

            </div>


        </div>

    )
}

export default Card