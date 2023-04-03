import React from 'react'
import '../src/app.css'
import {useState,useEffect} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8081/api/emp").then(res=>res.json())
      .then(details=>{setData(details)})
    },[])
  
    const handleDelete = async (id) =>{
      try {
          await axios.delete("http://localhost:8081/api/emp/"+id)
          window.location.reload()
      } catch (error) {
          console.log(error);
      }
  }
  
    return (
      <div className='wrapper'>
         <button className="add"><Link to="/edit" style={{color:"inherit"}}>Add Employee</Link></button>
      <div className="App">
        <div className="container">
          <div className="item">Emp Id</div>
          <div className="item">Emp Name</div>
          <div className="item">Emp Email</div>
          <div className="item">Emp Tech</div>
          <div className="buttons">Edit / Delete</div>
        </div>
          {data.map((d)=>(
       <div className="container" key={d.empId}>
            <div className="item">{d.empId}</div>
            <div className="item">{d.empName}</div>
            <div className="item">{d.empEmail}</div>
            <div className="item">{d.empTech}</div>
            <div className="buttons">
            <button className="edit"><Link to={`/update/${d.empId}`} style={{color:"inherit"}}>Edit</Link></button>
            <button className="del" onClick={()=>handleDelete(d.empId)}>Delete</button>
  
            </div>
       </div>
          ))}
        
      </div>
          </div>
    )
}

export default Home