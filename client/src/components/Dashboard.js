import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="row">

    
    <div className="amount-data col-lg-4 col-sm-10">
      <div>
        <p><strong>Total Amount:</strong> ₹500</p> 
      </div>
      <div className="expense dropdown">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>Expense :</strong> 500
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Grocery: 500</li>  
          </ul>
          
        </div>
        <p></p>
      <div className="income dropdown">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Income :</strong> 500
          </a>
          <ul className="dropdown-menu">
          <li className="dropdown-item">Grocery: 500</li>
            
          </ul>
        </div>
    </div>
    
    
    </div>
    <div className='recent'>
    <h4 className="text-center heading">Recent Transactions</h4>
      <table className='table table-striped'>
        <thead>
        
          <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Name</th>
            <th scope='col'>Date</th>
            <th scope='col'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1.</th>
            <td>Grocery</td>
            <td>2022-04-16</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope='row'>1.</th>
            <td>Grocery</td>
            <td>2022-04-16</td>
            <td>500</td>
          </tr>
          <tr >
            <th scope='row'>1.</th>
            <td className='red'>Grocery</td>
            <td>2022-04-16</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Dashboard