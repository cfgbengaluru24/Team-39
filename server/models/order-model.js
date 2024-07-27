import mongoose from 'mongoose';
import manufactureModel from './manufacture-model.js';

const orderSchema = mongoose.Schema({
    name: String,
    orderType: String,
    customization: String,
    quantity: Number,
    tentative: { type: Date, default: Date.now },
    cost: Number,
    location:String
});

orderSchema.post('save', async function(doc) {
    try {
        const manufacture = new manufactureModel({
            machine: 2 * doc.quantity,
            worker: 5 * doc.quantity,
            progress: 0,  // Initial progress can be set to 0 or any other initial value
            orderID: doc._id,
            location: doc.location  // You can set a default location or customize as needed
        });
        await manufacture.save();
    } catch (error) {
        console.error('Error creating manufacture document:', error);
    }
});

export default mongoose.model('order', orderSchema);