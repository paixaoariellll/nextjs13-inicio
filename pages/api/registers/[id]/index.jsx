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
    status: req.body.status,
    lunchFryday: req.body.lunchFryday,
    lunchFrydayValue: req.body.lunchFrydayValue,
    lunchSaturday: req.body.lunchSaturday,
    lunchSaturdayValue: req.body.lunchSaturdayValue,
    shirt: {
      size: req.body.size,
      value: req.body.value,
    },
    guests: req.body.guests,
    guest: {
      name: req.body.guestName,
      rg: req.body.guestRg,
      kinship: req.body.guestKinship,
      lunchFryday: req.body.guestLunchFryday,
      lunchFrydayValue: req.body.guestLunchFrydayValue,
      lunchSaturday: req.body.guestLunchSaturday,
      lunchSaturdayValue: req.body.guestLunchSaturdayValue,
      shirt: {
        size: req.body.guestSize,
        value: req.body.guestValue,
      },
    },
  });
  const registers = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro adicionado com sucesso!', registers });
};

export default handler;
