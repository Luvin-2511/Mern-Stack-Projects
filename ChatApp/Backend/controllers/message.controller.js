import User from '../models/user.model.js'
import Conversation from '../models/conversation.model.js'
import { asyncHandler } from '../utilities/asyncHandler.js';
import { errorHandler } from '../utilities/errorHandler.js';
import Message from '../models/message.model.js'
import { io } from '../socket/socket.js';
import { getSocketId } from '../socket/socket.js';

export const sendMessage = asyncHandler(async (req, res, next) => {
    const senderId = req.user._id;
    const receiverId = req.params.receiverId;
    const message = req.body.message;

    if (!senderId || !receiverId || !message) {
        return next(new errorHandler("All fields are required", 400));
    }

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
            messages: [] // ensure it's initialized if creating fresh
        });
    }

    const newMessage = await Message.create({
        senderId,
        receiverId,
        message
    });

    // ✅ Use `messages` instead of `message`
    conversation.messages.push(newMessage._id);
    await conversation.save();

    const socketId = getSocketId(receiverId);
    io.to(socketId).emit("newMessage", newMessage);

    res.status(200).json({
        success: true,
        responseData: newMessage
    });
});

export const getMessage = asyncHandler(async (req, res, next) => {
    const myId = req.user._id;
    const otherParticipantId = req.params.receiverId;

    if (!myId || !otherParticipantId) {
        return next(new errorHandler("All fields are required", 400));
    }

    const conversation = await Conversation.findOne({
        participants: { $all: [myId, otherParticipantId] }
    }).populate("messages"); // ✅ not `message`

    res.status(200).json({
        success: true,
        responseData: conversation
    });
});
