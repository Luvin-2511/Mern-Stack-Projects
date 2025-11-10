import React, { useEffect } from 'react'
import { use } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({ messageDetails }) => {
    const { userProfile } = useSelector(state => state.userReducer)
    const messageRef = useRef(null)

    useEffect(() => {
      if(messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [])
    
    return (
        <>
            <div className=' p-2'>
                <div
                    ref={messageRef}
                    className={`chat ${userProfile?._id === messageDetails.senderId ? 'chat-end' : 'chat-start'
                        }`}>
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            />
                        </div>
                    </div>
                    <div class="chat-header">
                        <time class="text-xs opacity-50">12:45</time>
                    </div>
                    <div class="chat-bubble rounded-4xl">{messageDetails?.message}</div>
                </div>
            </div>
        </>

    )
}

export default Message
