import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  messages: [  // ✅ This should be an array
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
}, { timestamps: true });

export default mongoose.model("Conversation", conversationSchema);
