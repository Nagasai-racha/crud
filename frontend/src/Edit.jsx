import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './form.css'

const Edit = () => {

  const [data,setData] = useState({
    empName:"",
    empEmail:"",
    empTech:""
  })
  const {empName,empEmail,empTech} = data
  const shouldRedirect = true;

  const navigate = useNavigate();


  const handleChange = (e) =>{
    setData(prev=>({...prev,[e.target.name]: e.target.value}))
}
    const handleSubmit =async (e) =>{
      e.preventDefault()
     try{
      await axios.post("http://localhost:8081/api/emp",data)
      await alert("new emp added")
       navigate("/")
     }catch(err){
      console.log(err);
     }
    }
  return (
    <div className='cont'>
        <center>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Add New Employee</h1> 
            <input type="text" placeholder='Employee Name' onChange={handleChange} name='empName' value={empName}/>
            <input type="text" placeholder='Employee Email' onChange={handleChange} name='empEmail' value={empEmail}/>
            <input type="text" placeholder='Employee Tech' onChange={handleChange} name='empTech'value={empTech}/>
            <div className="buttons">
            <button className='edit'>Add Emp</button>
            <button className='del'><Link to="/" style={{color:"inherit"}} >Cancel</Link></button>
            </div>
        </form>
        </center>
    </div>
  )
}

export default Edit