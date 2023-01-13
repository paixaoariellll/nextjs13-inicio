import Registers from '../../../models/Registers';
import db from '../../../utils/db';

const postHandler = async (req, res) => {
  await db.connect();
  const newRegister = new Registers({
    name: 'a',
    stageName: 'a',
    postGraduation: 'a',
    CPF: 'a',
    rgCivil: 'a',
    rgMilitary: 'a',
    CEP: 'a',
    number: 'a',
    address: 'a',
    neighborhood: 'a',
    city: 'a',
    uf: 'a',
    formation: 'a',
    email: 'a',
    tellphone: 'a',
    cellphone: 'a',
    status: 'a',
    lunchFryday: 'a',
    lunchFrydayValue: 'a',
    lunchSaturday: 'a',
    lunchSaturdayValue: 'a',
    shirt: {
      size: 'a',
      value: 'a',
    },
    guests: 'a',
    guest: {
      name: 'a',
      rg: 'a',
      kinship: 'a',
      lunchFryday: 'a',
      lunchFrydayValue: 'a',
      lunchSaturday: 'a',
      lunchSaturdayValue: 'a',
      shirt: {
        size: 'a',
        value: 'a',
      },
    },
  });
  const registers = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Car added successfully!', registers });
};

const getHandler = async (req, res) => {
  await db.connect();
  const registers = await Registers.find({});
  await db.disconnect();
  res.send(registers);
};

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  }
  if (req.method === 'POST') {
    return postHandler(req, res);
  }
  return res
    .status(400)
    .send({ message: 'Ops, parece que houve um problem no GET ou no POST!' });
};

export default handler;
