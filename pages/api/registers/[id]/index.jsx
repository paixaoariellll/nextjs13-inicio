import Registers from '../../../../models/Registers';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const newRegister = new Registers({
    name: req.body.name,
    stageName: req.body.stageName,
    postGraduation: req.body.postGraduation,
    CPF: req.body.CPF,
    rgCivil: req.body.rgCivil,
    rgMilitary: req.body.rgMilitary,
    CEP: req.body.CEP,
    number: req.body.number,
    address: req.body.address,
    neighborhood: req.body.neighborhood,
    city: req.body.city,
    uf: req.body.uf,
    formation: req.body.formation,
    email: req.body.email,
    tellphone: req.body.tellphone,
    cellphone: req.body.cellphone,
    lunchFryday: req.body.lunchFryday,
    lunchSaturday: req.body.lunchSaturday,
    buyShirt: req.body.buyShirt,
    shirt: {
      size: req.body.shirt.size,
    },
    manyGuests: req.body.manyGuests,
    guest: {
      name: req.body.guest.name,
      rg: req.body.guest.rg,
      kinship: req.body.guest.kinship,
      lunchFryday: req.body.guest.lunchFryday,
      lunchFrydayValue: req.body.guest.lunchFrydayValue,
      lunchSaturday: req.body.guest.lunchSaturday,
      lunchSaturdayValue: req.body.guest.lunchSaturdayValue,
      buyShirt: req.body.guest.guestBuyShirt,
      shirt: {
        size: req.body.guest.shirt.size,
      },
    },
  });
  const registers = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro adicionado com sucesso!', registers });
};

export default handler;
