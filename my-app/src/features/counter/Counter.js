import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,removeFetchedData, } from './counterSlice'
import '../../App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';

export function Counter() {
  const stateForDisplay= useSelector((state) => state.dataDisplay)
  const dispatch = useDispatch();

  let mapped='';

  if(Object.keys(stateForDisplay).length >1){

    mapped = stateForDisplay.users.map((e,i)=>{

    return <div className='grid-container'>
            <div key={i} className='grid-item'>{e.name}</div>
            <div key={i+1} className='grid-item'>{e.address.city}</div>
            <div key={i+2} className='grid-item'>{e.company.name}</div>
         </div>
 

  });
  }




  const saveDataToDatabase = ()=>{
    const url = "http://localhost:80/redux/backend/save.php";


    axios.post(url,
    {data:stateForDisplay.users},
    {headers:{Accept: 'application/json', "content-type": "application/json"}})
    .then((res) => console.log(res))
    .catch(err => console.log('axios error'))
 }


 const deleteDataFromDatabase = () =>{
  const url = "http://localhost:80/redux/backend/delete.php";


  axios.post(url,
  {headers:{Accept: 'application/json', "content-type": "application/json"}})
  .then((res) => console.log(res))
  .catch(err => console.log('axios error'))
  
 }
    return (
    <div>
      <div style={{marginTop:'30px', marginBottom:'30px'}}>
      {Object.keys(stateForDisplay).length <1 ? 
      <button
      onClick={() => dispatch(fetchData())}
    >
      Fetch!
    </button>:''
}
        
        {Object.keys(stateForDisplay).length >1 ? 
        <button
        onClick={()=>dispatch(removeFetchedData())}
       
      >
        Remove data
      </button>:''
      
      }

{Object.keys(stateForDisplay).length >1 ? 
        <button
        onClick={saveDataToDatabase}
       
      >
        save data
      </button>:''
      
      }
{Object.keys(stateForDisplay).length >1 ? 
        <button
        onClick={deleteDataFromDatabase}
       
      >
        delete data
      </button>:''
      
      }
        

      </div>
{
Object.keys(stateForDisplay).length > 1 ?
 <div className='grid-container'>
<div style={{backgroundColor:'black'}} className='grid-item'>name</div>
<div style={{backgroundColor:'black'}} className='grid-item'>city</div>
<div style={{backgroundColor:'black'}} className='grid-item'>company</div>
</div>:<h1><i  className="fa-solid fa-hand-point-up"></i><span style={{marginLeft:'10px'}}>Fetch data</span></h1>
}

{mapped}


    </div>
  )
}