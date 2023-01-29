import Registers from '@/models/Registers';
import db from '@/utils/db';

const postHandler = async (req, res) => {
  await db.connect();
  await Registers.createIndexes({ unique: true });
  const newRegister = new Registers({
    ...req.body,
  });
  const register = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro addicionado com sucesso!', register });
};

const getHandler = async (req, res) => {
  await db.connect();
  const registers = await Registers.find();
  await db.disconnect();
  res.send(registers);
};

const putHandler = async (req, res) => {
  await db.connect();
  const { id } = req.params;
  const updatedData = req.body;
  const register = await Registers.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  await db.disconnect();
  res.send({ message: 'Registro atualizado com sucesso!', register });
};

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  }
  if (req.method === 'POST') {
    return postHandler(req, res);
  }
  if (req.method === 'PUT') {
    return putHandler(req, res);
  }
  return res.status(400).send({
    message: 'Ops, parece que houve um problema no GET, no POST ou no PUT!',
  });
};

export default handler;
