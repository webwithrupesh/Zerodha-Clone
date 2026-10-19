import React from 'react'

function Hero() {
    return ( 
        <div className='container  '>
            <div className='row mt-5 p-4 text-center border-bottom'>
            <h1 className='' >Pricing</h1>
            <h3 className='text-muted mt-3 fs-5'>Free equity investment and flat ₹20 traday and F&O trades </h3>
            </div>

            <div className='row mt-5 p-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media\images\pricing0.svg'/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>
                <div className='col-4 p-4'>
                    <img src='media\images\intradayTrades.svg'/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media\images\pricing0.svg'/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
                 <div className="row text-center mt-5 p-5">
               
                <h1>Open a Zerodha account</h1>
                <p>Modern platforms and apps ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup now</button>
            </div>

        </div>
     );
}

export default Hero;