import React, { useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk } from '../../store/slice/user/userThunk';

const Login = () => {
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
      if(isAuthenticated)navigate('/')
    }, [isAuthenticated])
    

    const handleInputChange = (e) => {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogin = async () => {
        const response = await dispatch(loginUserThunk(loginData))
        if (response?.payload?.success) {
            navigate('/')
        }
    }

    return (
        <div className='flex justify-center items-center gap-5 flex-col h-screen leading-[9px]'>
            <h1 className='text-4xl mb-4 font-bold'>Please Login !</h1>
            <label className="input validator h-16 rounded-4xl w-[500px] ">
                <CiUser />

                <input
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                    className='p-3'
                    onChange={handleInputChange}
                />
            </label>
            <p className="validator-hint">
                Must be 3 to 30 characters
                <br />containing only letters, numbers or dash
            </p>
            <label className="input validator h-16 rounded-4xl w-[500px]">
                <IoIosKey />
                <input
                    type="password"
                    name='password'
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className='p-3 hover:'
                    onChange={handleInputChange}
                />
            </label>
            <h5 className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </h5>
            <button onClick={handleLogin} className="btn btn-active btn-secondary mt-12 h-[60px] font-extrabold w-[500px] rounded-4xl transition-all hover:scale-105 hover:border-2 hover:border-white">Login</button>
            <p className='mt-4'>Don't Have an Account? <Link to="/signUp" className='underline text-blue-500'>SignUp</Link></p>
        </div>
    )
}

export default Login
