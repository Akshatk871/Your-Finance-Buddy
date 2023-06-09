import React from 'react'

function Home() {
  return (
    <>
        <div className="home-tab">
            {/* <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Expense</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Income</a>
                </li>
            </ul> */}
            <form>
                <div className='form'>
                    <h2 className="text-center">Transaction Details</h2>
                    <div className='mb-3 home'>
                        <label className="form-label">Name</label>
                        <input type="text" className='form-control' name='' placeholder="e.g: Grocery, Stationary"/> 
                    </div>
                    <div className='mb-3 home'>
                        <label className="form-label">Tranaction Date</label>
                        <input type="text" className='form-control' name='' placeholder='(yyyy-mm-dd)' />
                    </div>
                    <div className='mb-3 home'>
                        <label className="form-label">Amount</label>
                        <input type="text" className="form-control" name="" placeholder="500"/>
                    </div>
                    <button className='btn btn-home '>Add</button>
                </div>
            </form>
        </div>
    </>
    
  )
}

export default Home