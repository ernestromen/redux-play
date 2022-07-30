import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, } from './counterSlice'
import  { useEffect } from 'react';	

export function Counter() {
  const stateForDisplay= useSelector((state) => state.dataDisplay)
  const dispatch = useDispatch()


    // useEffect(() => {
    //     console.log('change'); 
    //  }, [stateForDisplay]);



// const getDataForDisplay = ()=>{
// if(Object.keys(stateForDisplay).length > 0){
// console.log(stateForDisplay.users)
// }
// }

    return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(fetchData())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
        //   onClick={getDataForDisplay}
         
        >
          Show me
        </button>

      </div>
    </div>
  )
}