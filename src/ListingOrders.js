import React from 'react'

const ListingOrders=({orders})=>{
    return (
        <div>
            <h2>Order Distribution</h2>
            <table class="table table-success" >
                <thead>
                    <tr>
                        <th>Number of orders</th>
                        <th>Count of customer</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        Object.keys(orders).map((key,i)=>{
                            //cosnole.log(key)
                            return(
                                <tr key={i}>
                                    <td>{key}</td>
                                    <td>{orders[key]}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListingOrders