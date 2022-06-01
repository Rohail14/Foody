import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    
    name: { type : String, required : true },
    img: { type : String, required: true },
    menu: [
        {
            _id: { type: String, required : true},
            name: { type : String, required : true },
            img: { type : String, required: true },
            price: { type: Number, required:true},
        },
    ],
}, {
    timestamps : true
})

const Food = mongoose.models.Food || mongoose.model('Food', foodSchema);

export default Food;