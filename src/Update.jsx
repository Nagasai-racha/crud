import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'

const Edit = () => {

  const [data,setData] = useState({
    empName:'',
    empEmail:'',
    empTech:''
  })

  const {empName,empEmail,empTech} = data
  const params = useParams()
  const shouldRedirect = true;

  const navigate = useNavigate();
const redirect = () =>{
  React.useEffect(() => {
    if (shouldRedirect) {
      navigate('/');
    }
  });
}
const load = async () =>{
    const result = await axios.get(`http://localhost:8081/api/emp/${params.id}`)
    setData(result.data)
}
    useEffect(()=>{
        load()
    },[])
  const handleChange = (e) =>{
    setData(prev=>({...prev,[e.target.name]: e.target.value}))
}
    const handleSubmit =async () =>{
     try{
      await axios.put(`http://localhost:8081/api/emp/${params.id}`,data)
      await alert("emp updated")
       redirect()
     }catch(err){
      console.log(err);
     }
    }
  return (
    <div className='cont'>
        <center>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Update Employee</h1>
            <input type="text" placeholder='Employee Name' onChange={handleChange} name='empName' value={empName}/>
            <input type="text" placeholder='Employee Email' onChange={handleChange} name='empEmail' value={empEmail}/>
            <input type="text" placeholder='Employee Tech' onChange={handleChange} name='empTech'value={empTech}/>
            <div className="buttons">
            <button className='edit'>Update Emp</button>
            </div>
            <div className="buttons">
            <button className='del'><Link to="/" style={{color:"inherit"}} >Cancel</Link></button>
            </div>
        </form>
        </center>
    </div>
  )
}

export default Edit