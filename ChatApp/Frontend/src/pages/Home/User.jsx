import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedUser } from '../../store/slice/user/userSlice'

const User = ({userDetails}) => {
    const dispatch= useDispatch()
    const {selectedUser}=useSelector(state=>state.userReducer)
    const {onlineUsers} = useSelector(state => state.socketReducer)
    const isUserOnline = onlineUsers?.includes(userDetails?._id) 

    const handleUserClick=()=>{
        dispatch(setSelectedUser(userDetails))
    }
    return (
        <div  onClick={handleUserClick}  className={`flex gap-3 items-center p-2 ml-4 hover:bg-gray-700 cursor-pointer ${userDetails?._id === selectedUser?._id && 'bg-gray-700 '}`}>
            <div class={`avatar ${isUserOnline && 'online'} avatar-online h-[3vw] w-[3vw]`}>
                <div class="w-15 rounded-full">
                    <img src={userDetails?.avatar} />
                </div>
            </div>
            <div className='font-medium leading-none'>
                <h2 className='text-lg'>{userDetails?.username}</h2>
                <h5 className='text-sm font-extralight text-gray-400'>@{userDetails?.username}</h5>
            </div>
        </div>
    )
}

export default User
