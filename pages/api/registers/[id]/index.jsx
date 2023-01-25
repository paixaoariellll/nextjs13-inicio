import Registers from '@/models/Registers';
import db from '@/utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Registers.createIndexes({ unique: true });
  const {
    name,
    stageName,
    postGraduation,
    CPF,
    rgCivil,
    rgMilitary,
    CEP,
    number,
    address,
    neighborhood,
    city,
    uf,
    formation,
    email,
    tellphone,
    cellphone,
    lunchFryday,
    lunchSaturday,
    buyShirt,
    manyBuyShirt,
    shirtSizes,
    priceVeteran,
    priceGuest,
    totalPrice,
    manyGuests,
    guest,
  } = req.body;
  const newRegister = new Registers({
    name,
    stageName,
    postGraduation,
    CPF,
    rgCivil,
    rgMilitary,
    CEP,
    number,
    address,
    neighborhood,
    city,
    uf,
    formation,
    email,
    tellphone,
    cellphone,
    lunchFryday,
    lunchSaturday,
    buyShirt,
    manyBuyShirt,
    shirtSizes,
    priceVeteran,
    priceGuest,
    totalPrice,
    manyGuests,
    guest,
  });
  const register = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro addicionado com sucesso!', register });
};

export default handler;
