import React, { useEffect } from 'react'
import User from './User'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThunk } from '../../store/slice/message/message.thunk';
import SendMessage from './SendMessage';

const MessageCont = () => {
    const { selectedUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const {messages} = useSelector(state=>state.messageReducer)
    useEffect(() => {
        if (selectedUser && selectedUser._id) {
            dispatch(getMessageThunk({ receiverId: selectedUser._id }));
        }
    }, [selectedUser]);


    return (
        <>
            {!selectedUser ? (
                <>Please Select a user</>
            ) : (<div className=' w-full rounded-l-3xl ml-3'>
                <div className=' overflow-y-auto border-b-1 border-gray-400'>
                    <User userDetails={selectedUser} />
                </div>
                <div className='h-[80vh] overflow-auto'>
                    {messages?.map(messageDetails=>{
                        return (
                            <Message key={messageDetails._id} messageDetails={messageDetails}/>
                        )


                    })}
                </div>
                <SendMessage/>
                
            </div>)
            }

        </>
    )
}

export default MessageCont
