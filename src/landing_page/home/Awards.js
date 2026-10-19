
import React from 'react'

function Awards() {
    return ( 
        <div className='container text-center mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker image'/>
                </div>

                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in india</h1>

                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order
                        <br></br>
                        volumes in india daily by trading and investing in
                    </p>

                    <div className='row'>
                        <div className='col-6 p-5 '>
                            <ul style={{  textAlign: "left" }}>
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className='col-6 p-5 '>
                            <ul style={{  textAlign: "left" }}>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt Securitiues</li>
                            </ul>
                        </div>
                        <img src='media\images\pressLogos.png' style={{width: "90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
