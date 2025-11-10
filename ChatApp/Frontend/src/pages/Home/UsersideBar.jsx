import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk, getOtherUsersThunk } from '../../store/slice/user/userThunk';
import { useNavigate } from 'react-router-dom';

const UsersideBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch(); // ✅ Now declared before useEffect
    const [users, setUsers] = useState([]);
    const { otherUsers } = useSelector(state => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await dispatch(getOtherUsersThunk())

        })
    }, [])

    useEffect(() => {
        if (!searchValue) {
            setUsers(otherUsers);
        } else {
            setUsers(otherUsers.filter(user =>
                user.username.toLowerCase().includes(searchValue.toLowerCase())
            ))
        }
    }, [searchValue])



    useEffect(() => {
        dispatch(getOtherUsersThunk());
    }, [dispatch]);

    const handleLogout = async () => {
        const result = await dispatch(logoutUserThunk());
        if (logoutUserThunk.fulfilled.match(result)) {
            navigate('/login');
        }
    };

    return (
        <div className='max-w-[24vw] w-full backdrop-blur-3xl border-r-2 border-gray-600 h-screen rounded-r-3xl'>
            <div>
                <h1 className='text-4xl text-white font-extrabold p-6'>BAAT / <span className='text-black'>CHEET</span></h1>
            </div>

            <div className='flex justify-center'>
                <label className="input bg-white text-lg text-black min-w-[90%] h-12 rounded-2xl">
                    <CiSearch className='text-4xl-' />
                    <input onChange={(e) => setSearchValue(e.target.value)} type="search" required placeholder="Search User" />
                </label>
            </div>

            <div className='h-[75vh] overflow-y-auto pt-5'>
                {otherUsers?.length > 0 ? (
                    otherUsers.map(userDetails => (
                        <User key={userDetails._id} userDetails={userDetails} />
                    ))
                ) : (
                    <p className="text-center text-white">No other users found.</p>
                )}
            </div>

            <div className='h-[10vh] rounded-br-2xl p-2 bg-gray-800'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                <button onClick={handleLogout} className="m-4 w-[calc(100%-5.8vw)] h-12 border-red-800 text-white hover:shadow-none hover:bg-red-500 btn btn-outline btn-success rounded-4xl">Logout</button>
            </div>
        </div>
    )
}

export default UsersideBar;
