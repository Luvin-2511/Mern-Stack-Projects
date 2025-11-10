import React from 'react'
import UsersideBar from './UsersideBar'
import MessageCont from './MessageCont'
import { useDispatch, useSelector } from 'react-redux'
import { initializeSocket } from '../../store/slice/socket/socket.slice'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, userProfile } = useSelector(state => state.userReducer)
  const {socket, state} = useSelector(state => state.socketReducer)

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializeSocket(userProfile._id))
  }, [isAuthenticated])

  useEffect(() => {
    if(!socket) return;
    socket.on("onlineUsers", (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });
    socket.on("newMessage", (newMessage) => {
      console.log("New message received:", newMessage);
      dispatch(setNewMessage(newMessage));
    });
    return () => {
      socket.close();
    }
  }, [socket])

  return (
    <div className='flex'>
      <UsersideBar />
      <MessageCont />
    </div>
  )
}

export default Home
