import { createSlice,current } from '@reduxjs/toolkit'

const initialState = {}




export const counterSlice = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
 

    
    getData: state => {
        state.loading = true
      },
      getDataSuccess: (state, { payload }) => {
        state.users = payload
        state.loading = false
        state.hasErrors = false
      },
      getDataFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
      removeData:state => initialState
    
  },
})







// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
      dispatch(getData())
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
  
        dispatch(getDataSuccess(data))
      } catch (error) {
        dispatch(getDataFailure())
      }
    }
  }



  export function removeFetchedData(){
    return async dispatch => {
      dispatch(removeData())

    }
  }





// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const { getData, getDataSuccess, getDataFailure,removeData } = counterSlice.actions

// A selector
export const recipesSelector = state => state.users

export default counterSlice.reducer