import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('Connectou!');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('O Banco de Dados está conectado!');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('Nova Coneção feita');
  console.log(db);
  connection.isConnected = mongoose.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Não desconectou!');
    }
  }
}

function convertDocToObject(doc) {
  const obj = {
    _id: doc._id.toString(),
    createdAt: doc.createdAt.toString(),
    updatedAt: doc.updatedAt.toString(),
  };
  return obj;
}

const db = { connect, disconnect, convertDocToObject };
export default db;
