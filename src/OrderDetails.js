import React from 'react'
import ListingOrders from './ListingOrders'
import OrderCharts from './OrderCharts'

const OrderDetails=({customers})=>{

    const orders={}
        const singleOrder=customers.filter((ele)=>{
            return ele.amount.length===1
        })
        orders[1]=singleOrder.length

        const twoOrder=customers.filter((ele)=>{
                return ele.amount.length===2
        })
        orders[2]=twoOrder.length

        const threeOrder=customers.filter((ele)=>{
            return ele.amount.length===3
        })
        orders[3]=threeOrder.length

        const fourOrder=customers.filter((ele)=>{
            return ele.amount.length===4
        })
        orders[4]=fourOrder.length

        const manyOrder=customers.filter((ele)=>{
            return ele.amount.length>=5
        })
        orders['5+']=manyOrder.length


    return (
    <div className='row'>
        <div className='col-md-6'>
            <ListingOrders  orders={orders}/>
        </div>
        <div className='col-md-6'>
            <OrderCharts  orders={orders}/>
        </div>
    </div>
    )
}

export default OrderDetails