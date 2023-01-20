import Registers from '@/models/Registers';
import db from '@/utils/db';

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
    formation: 1980,
    email: 'a',
    tellphone: 'a',
    cellphone: 'a',
    lunchFryday: 'a',
    lunchSaturday: 'a',
    buyShirt: true,
    priceVeteran: 0,
    priceGuest: 0,
    totalPrice: 0,
    shirt: {
      size: 'M',
    },
    manyGuests: 0,
    guest: {
      guest1: {
        name: 'a',
        rg: 'a',
        kinship: 'a',
        lunchFryday: 'a',
        lunchSaturday: 'a',
        guestBuyShirt: 'a',
        price: 0,
        shirt: {
          size: 'a',
        },
      },
      guest2: {
        name: 'a',
        rg: 'a',
        kinship: 'a',
        lunchFryday: 'a',
        lunchSaturday: 'a',
        guestBuyShirt: 'a',
        price: 0,
        shirt: {
          size: 'a',
        },
      },
      guest3: {
        name: 'a',
        rg: 'a',
        kinship: 'a',
        lunchFryday: 'a',
        lunchSaturday: 'a',
        guestBuyShirt: 'a',
        price: 0,
        shirt: {
          size: 'a',
        },
      },
      guest4: {
        name: 'a',
        rg: 'a',
        kinship: 'a',
        lunchFryday: 'a',
        lunchSaturday: 'a',
        guestBuyShirt: 'a',
        price: 0,
        shirt: {
          size: 'a',
        },
      },
      guest5: {
        name: 'a',
        rg: 'a',
        kinship: 'a',
        lunchFryday: 'a',
        lunchSaturday: 'a',
        guestBuyShirt: 'a',
        price: 0,
        shirt: {
          size: 'a',
        },
      },
    },
  });
  const registers = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro addicionado com sucesso!', registers });
};

const getHandler = async (req, res) => {
  await db.connect();
  const registers = await Registers.find({});
  await db.disconnect();
  res.send(registers);
};

const putHandler = async (req, res) => {
  await db.connect();
  const { id } = req.params;
  const updatedData = req.body;
  const register = await Registers.findByIdAndUpdate(id, updatedData, {
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
