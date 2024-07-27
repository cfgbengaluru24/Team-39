import mongoose from 'mongoose';

const upskillingSchema = mongoose.Schema({
    videolink: String,
    pdflink: String,
});

export default mongoose.model('upskill', upskillingSchema);