import React, { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {  getUserProfileThunk } from './store/slice/user/userThunk';

const App = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    (async()=>{
      await dispatch(getUserProfileThunk())
    })();
  }, [])
  

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </div>
  )
}

export default App