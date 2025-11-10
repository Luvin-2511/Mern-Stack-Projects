import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../store/slice/message/message.thunk';


const SendMessage = () => {
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(state => state.userReducer)
    const [message, setMessage] = useState('')
    const handleSendMessage = () => {
        dispatch(sendMessageThunk({
            receiverId: selectedUser?._id,
            message
        }))
        setMessage(' ')
    }
    return (
        <div>
            <div className='flex justify-center items-center w-full'>
                <input
                    className='h-[3vw] p-10 rounded-full w-[60vw] border-[1px] border-gray-500 text-2xl  m-2' type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type here...." />
                <IoSend onClick={handleSendMessage} className='cursor-pointer h-[90px] w-[88px] rounded-full text-2xl p-4' />
            </div>
        </div>
    )
}

export default SendMessage
