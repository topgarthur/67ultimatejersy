import axios from "axios"
import React,{useState} from "react"
import {useNavigate } from "react-router-dom"
const Signin =()=>{
  let navigate = useNavigate();
  // declare the two states here 
  const[email,setEmail]=useState("")
  const[passowrd,setPassword]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to handle submit 
  const handlesubmit=async (e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    // create empty digital envelope to store user inputs 
    const formdata=new FormData()
    // append 
    formdata.append("email",email)
    formdata.append("password",passowrd)
    try {
      const response=await axios.post("https://higgs.alwaysdata.net/api/signin",formdata)
      setSuccess(response.data.message)
      setLoading("")
      // if login/signin is successful we save user to localStorage
      // nb:redirect user to homepage(getproducts) 
      if (response.data.user){
        // login success 
        localStorage.setItem("user", JSON.stringify(response.data.user))
        // redirect user to homepage(getproducts) 
        navigate("/")
      } 
      else{
        // login failed 
        setSuccess(response.data.success)
      }
      
    } catch (error) {
      setError(error.message)
      setLoading("")
      
    
    }

    
  }
    return(
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 card shadow p-4">
          <h1>Sign in</h1>
          <p className="text-danger">Welcome back!.Signin to continue</p>
          {/* binding  */}
          <h2 className="text-warning">{loading}</h2>
          <h2 className="text-success">{success}</h2>
          <h2 className="text-danger">{error}</h2>
          
          <form action="" onSubmit={handlesubmit}>
            <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br />
            <button type="submit" className="btn btn-dark w-100">Sign in</button>
            <p>Don't have an account?<a href="Signup">Sign Up</a></p>

          </form>

        </div>
      </div>
    )
}
export default Signin
