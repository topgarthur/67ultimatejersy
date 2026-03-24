import axios from "axios"
import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";

const Getproduct=()=>{
    let navigate = useNavigate();
    // declare our states here 
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")
    // finction to get products 
    const getproducts=async()=>{
        setLoading("Please wait...")
        try {
            const response=await axios.get("https://arthurhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")

        } catch (error) {
        
        }
    }
    // call the function 
    useEffect(()=>{
        getproducts()
    },[])
    console.log(products);


    const imagepath="https://arthurhiggs.alwaysdata.net/static/images/"
    
    return(
        <div className="row">
            {/* carousel goes here  */}
            <Carousel/>
            <hr />
            <u style={{color:"red"}}><h1 className="text-primary">🏅RETRO  <span className="text-danger">KITS🏅</span></h1></u>
            
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
            {/* map here  */}
            {products.map(singleproduct=>(

                <div className="col-md-3  mb-4">
                    <div className="card shadow h-100 product-card">

                {/* image goes here  */}
                <img src={imagepath+singleproduct.product_photo} alt=""  className="w-100"
                style={{ height: "200px", objectFit: "cover" }}/>
                <div className="card-body d-flex flex-column">
                    <h2 className="text-success text-start">{singleproduct.product_name}</h2>
                    <p className="text-start" style={{ textAlign: "justify",minHeight: "80px" }}>{singleproduct.product_description}</p>
                    <b className="text-warning d-block mb-2 mt-auto">ksh {singleproduct.product_cost}</b><br />
                    <button className="btn btn-outline-dark w-100 mt-auto" onClick={()=>navigate("/makepayment",{ state: {singleproduct} })}>purchase now</button>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Getproduct