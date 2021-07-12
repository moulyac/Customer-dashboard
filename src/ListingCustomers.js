import React,{useState} from 'react'
import Modal from 'react-modal'

const ListingCustomers=(({customers})=>{
    const [text,settext]=useState('')
    const [list,setlist]=useState([])

    const [modal,setModal]=useState(false)
    const [showDetails,setShowDetails]=useState({})
    const [totalAmount,setAmount]=useState(0)


    const handletext=(e)=>{
        const str=e.target.value
        settext(str)
        
        const res=customers.filter((cus)=>{
            const {name, phone} = cus
            return(
                 name.toLowerCase().includes(str.toLowerCase()) // || phone.includes(str.trim())
            )
        })
        setlist(res)
    }

    const handleDetailShow=(id)=>{
        const res=customers.find((cus)=>{
            return cus.id==id
        })
        setShowDetails(res)
        setModal(true)

        let totalAmt=0
        res.amount.map((ele)=>{
            totalAmt+=ele
        })
        setAmount(totalAmt)
        
    }
    function closeModal(){
        setModal(false);
    }
    

    return(
        <div >
            <div className='row'>
                <h2 className='col-md-8'>Listing Customers</h2>
                <input className='col-md-4'  type="text" value={text} onChange={handletext} placeholder='search by name' />
            </div>
        <br/>
            <div style={{overflow:'scroll', height:'800px',background:'white'}}>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length>0?( 
                            list.map((customer)=>{
                                return(
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.phone}</td>
                                        <td><a href='#' onClick={()=>handleDetailShow(customer.id)}>show</a></td>
                                    </tr>
                                )
                            })                            
                         ):(
                            customers.map((customer)=>{
                                return(
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.phone}</td>
                                        <td><a href='#' onClick={()=>handleDetailShow(customer.id)}>show</a></td>
                                    </tr>
                                )
                            })
                           )
                        }
                                
                    </tbody>
                </table>
            </div>
            
            <ModalComponent 
                closeModal={closeModal}
                modal={modal}
                showDetails={showDetails}
                totalAmount={totalAmount}
            />
        </div>
    )
                        
})


const ModalComponent=({closeModal,modal,showDetails,totalAmount})=>{
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor       : '#FBE0C3'
        }
    }
    return(
        <div >
            <Modal 
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                    <button style={{marginLeft:'700px', border:'1px solid transparent',backgroundColor:'#FBE0C3', cursor:'pointer'}}onClick={closeModal}>x</button>
                    <h1>{showDetails.name} - {showDetails.phone}</h1>
                    <h3>Order Count - {showDetails.amount && showDetails.amount.length} Total Amount - {totalAmount}</h3>
                            
                        {
                            (showDetails.amount)&&(
                            <div style={{overflow:'scroll', height:'200px'}}>
                            <table class="table table-hover" style={{backgroundColor :'white'}} >
                                <thead >
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        showDetails.amount.map((ele,i)=>{
                                            return(
                                                    <tr key={i}>
                                                            <td>{i+1}</td>
                                                            <td>{showDetails.date[i]}</td>
                                                            <td>{ele}</td>
                                                    </tr>
                                                )
                                            })
                                    }
                                </tbody>
                            </table>
                            </div>
                        )
                    }
                    <button onClick={closeModal} style={{margin:'8px 5px'}}>close</button>
            </Modal>
        </div>
    )
}

export default ListingCustomers