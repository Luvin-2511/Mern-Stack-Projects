import React, { useEffect, useState } from 'react'

import { CiUser } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerUserThunk } from '../../store/slice/user/userThunk';
import { toast } from 'react-hot-toast'

const Signup = () => {
    const { isAuthenticated } = useSelector(state => state.userReducer)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [signUpData, setsignUpData] = useState({
        username: "",
        password: "",
        confpassword: "",
        gender: "male"
    })
    useEffect(() => {
        if (isAuthenticated) navigate('/')
    }, [isAuthenticated])

    const handleInputChange = (e) => {
        setsignUpData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handlesignup = async () => {
        if (signUpData.password != signUpData.confpassword) {
            return toast.error("Password doesn't match !")
        }
        const { username, password, gender } = signUpData;
        const response = await dispatch(registerUserThunk({ username, password, gender }));

        if (response?.payload?.success) {
            navigate('/')
        }
    }

    return (
        <div className='flex justify-center items-center flex-col gap-5 h-screen leading-[9px]'>
            <h1 className='text-4xl font-bold mb-4'>Please Register !</h1>

            <label className="input validator h-16 rounded-4xl w-[500px]">
                <CiUser />

                <input
                    name='username'
                    type="text"
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
                    name='password'
                    type="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className='p-3'
                    onChange={handleInputChange}
                />
            </label>
            <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>
            <label className="input validator h-16 rounded-4xl  w-[500px]">
                <IoIosKey />
                <input
                    name='confpassword'
                    type="password"
                    required
                    placeholder="Confirm Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className='p-3'
                    onChange={handleInputChange}
                />
            </label>
            <div className="input validator h-16 rounded-4xl  w-[500px]">
                <label className="mr-3 flex gap-2 items-center" htmlFor="male">
                    <input onChange={handleInputChange} id="male" value="male" type="radio" name="gender" className="radio radio-primary" />
                    male
                </label>
                <label onChange={handleInputChange} className="mr-3 flex gap-2 items-center" htmlFor="female">
                    <input id='female' value="female" type="radio" name="gender" className="radio radio-primary" />
                    female
                </label>
            </div>
            <h5 className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </h5>
            <button onClick={handlesignup} className="btn btn-active  btn-secondary mt-12 h-[60px] font-extrabold w-[500px] rounded-4xl transition-all hover:scale-105 hover:border-2 hover:border-white">Sign Up</button>
            <p className='mt-4 '>Already Have an Account? <Link to="/login" className='underline text-blue-500'>Login </Link></p>
        </div>
    )
}

export default Signup
