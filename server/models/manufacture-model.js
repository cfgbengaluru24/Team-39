import mongoose from 'mongoose';

const manufactureSchema = mongoose.Schema({
    machine: Number,
    worker: Number,
    progress: Number,
    orderID: { type: mongoose.Schema.Types.ObjectId,ref: 'order' },
    location:String
});

export default mongoose.model('manufacture', manufactureSchema);