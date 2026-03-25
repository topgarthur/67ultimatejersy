import axios from "axios"
import React,{useState} from "react"
const Addproduct=()=>{
    // declare the states here 
    const[product_name,setProductName]=useState("")
    const[product_description,setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo,setProductPhoto]=useState("")
    // define 3 ststes for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to handle submit 
    const handlesubmit=async (e)=>{
        e.preventDefault()
        setLoading("please wait...")

        const formdata=new FormData()
        // append/add 
        formdata.append("product_name",product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)
        formdata.append("product_photo",product_photo)
        try {
            const response=await axios.post("https://arthurhiggs.alwaysdata.net/api/addproduct",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }


    return(
       <div className="row justify-content-center mt-2">
        <div className="col-md-8 card shadow p-4">
            <h1 className="text-center fw-bold text-danger mb-3">
            ⚽ Add New Football Kit
            </h1>
            <p className="text-center text-primary mb-4">
            Upload new football kits, jerseys, and exclusive drops to the store. Keep your looks looking fresh this season.
            </p>
              {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
           
            <form action="" onSubmit={handlesubmit}>
                <input type="text" className="form-control" placeholder="Enter kit name" onChange={(e)=>setProductName(e.target.value)}/><br />
                <textarea name="" id="" className="form-control" placeholder="Describe the kit (club, season, quality, features...)" onChange={(e)=>setProductDescription(e.target.value)}></textarea><br />
                <input type="number" className="form-control" placeholder="Price (KSh)" onChange={(e)=>setProductCost(e.target.value)}/><br />
                <input type="file" accept="image/*" className="form-control" onChange={(e)=>setProductPhoto(e.target.files[0])} /><br />
                <button type="submit" className="btn btn-dark w-100 fw-bold">
                ⚽ Add Jersey
                </button>
            </form>
            

        </div>

       </div>
    )
}
export default Addproduct