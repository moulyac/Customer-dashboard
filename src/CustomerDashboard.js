import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {data} from './customer-data'
import Dashboard from './Dashboard'
import ListingCustomers from './ListingCustomers'
import OrderDetails from './OrderDetails'

const CustomerDashborad = ()=>{

    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        const arr=[]
        const phone=[]
        let i=1
        
    data.forEach((cus)=>{
        if(!phone.includes(cus.Phone)){

            phone.push(cus.Phone)

            const res=data.filter((ele)=>{
                if(cus.Phone===ele.Phone){
                    return ele
                }
            }) 

            const date=[]
            const amt=[]
            res.forEach((ele)=>{
                date.push(ele.Date)
                amt.push(ele.Amount)
            })

            const result={}
            result.id=i++
            result.name=res[0].Name
            result.phone=res[0].Phone
            result.amount=amt
            result.date=date

            arr.push(result)
        } 
    })
    //console.log(arr)
    setCustomers(arr)
    },[])
    

    let amount=0
    data.forEach((ele)=>{
        amount+=ele.Amount
    })


    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Customer Dashboard</h1><hr/>
           <Dashboard customers={customers.length} amount={amount} order={data.length}/>
           <hr/>
           <ListingCustomers customers={customers}/>
           <hr/>
           <OrderDetails customers={customers}/>
        </div>
    )
}

export default CustomerDashborad