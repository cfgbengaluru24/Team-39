import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    
});

export default mongoose.model('admin', adminSchema);