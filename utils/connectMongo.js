// import mongoose from "mongoose";

// const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

// export default connectMongo;

import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      //****** since  mongoose 6, we dont need those******
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    })
    .catch((err) => console.log(err))
    .then((con) => console.log("connected to db"));
};

function convertDocToObj(doc){
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

export default dbConnect;
export {convertDocToObj};

// const connection = {};

// async function connect(){

//     if(connection.isConnected){
//         console.log("Already Connected");
//         return;
//     }

//     if (mongoose.connections.length > 0){
//         connection.isConnected = mongoose.connections[0].readyState;
//         if (connection.isConnected === 1) {
//             console.log('use previous connection');
//             return;
//         }
//         await mongoose.disconnect();
//     }
    
//     const db = mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
        
//     });
//     console.log('new connection');
//     connection.isConnected = db.connections[0].readyState;
// }

// async function disconnect(){
//     if (connection.isConnected){
//         if(process.env.NODE_ENV === 'production'){
//             await mongoose.disconnect();
//             connection.isConnected = false;
//         } else {
//             console.log('no disconnected');
//         }
//     }
// }



// const db = { convertDocToObj};

// export default db;