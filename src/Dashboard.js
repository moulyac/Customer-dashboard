import React from'react'

const Dashboard  = ({customers, amount, order})=>{
    return (
        <div>
           <div className='row'>
                <div className='col-md-4'>
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header"><h3>Amount</h3></div>
                        <div class="card-body">
                            <h3 class="card-text">{amount}</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header"><h3>Order</h3></div>
                        <div class="card-body">
                            <h3 class="card-text">{order}</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header"><h3>customer</h3></div>
                        <div class="card-body">
                            <h3 class="card-text">{customers}</h3>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Dashboard