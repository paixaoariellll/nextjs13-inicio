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
    priceVeteran: req.body.priceVeteran,
    priceGuest: req.body.priceGuest,
    shirt: {
      size: req.body.shirt.size,
    },
    manyGuests: req.body.manyGuests,
    guest: {
      guest1: {
        name: req.body.guest.guest1.name,
        rg: req.body.guest.guest1.rg,
        kinship: req.body.guest.guest1.kinship,
        lunchFryday: req.body.guest.guest1.lunchFryday,
        lunchSaturday: req.body.guest.guest1.lunchSaturday,
        guestBuyShirt: req.body.guest.guest1.guestBuyShirt,
        price: req.body.guest.guest1.price,
        shirt: {
          size: req.body.guest.guest1.shirt.size,
        },
      },
      guest2: {
        name: req.body.guest.guest2.name,
        rg: req.body.guest.guest2.rg,
        kinship: req.body.guest.guest2.kinship,
        lunchFryday: req.body.guest.guest2.lunchFryday,
        lunchSaturday: req.body.guest.guest2.lunchSaturday,
        guestBuyShirt: req.body.guest.guest2.guestBuyShirt,
        price: req.body.guest.guest2.price,
        shirt: {
          size: req.body.guest.guest2.shirt.size,
        },
      },
      guest3: {
        name: req.body.guest.guest3.name,
        rg: req.body.guest.guest3.rg,
        kinship: req.body.guest.guest3.kinship,
        lunchFryday: req.body.guest.guest3.lunchFryday,
        lunchSaturday: req.body.guest.guest3.lunchSaturday,
        guestBuyShirt: req.body.guest.guest3.guestBuyShirt,
        price: req.body.guest.guest3.price,
        shirt: {
          size: req.body.guest.guest3.shirt.size,
        },
      },
      guest4: {
        name: req.body.guest.guest4.name,
        rg: req.body.guest.guest4.rg,
        kinship: req.body.guest.guest4.kinship,
        lunchFryday: req.body.guest.guest4.lunchFryday,
        lunchSaturday: req.body.guest.guest4.lunchSaturday,
        guestBuyShirt: req.body.guest.guest4.guestBuyShirt,
        price: req.body.guest.guest4.price,
        shirt: {
          size: req.body.guest.guest4.shirt.size,
        },
      },
      guest5: {
        name: req.body.guest.guest5.name,
        rg: req.body.guest.guest5.rg,
        kinship: req.body.guest.guest5.kinship,
        lunchFryday: req.body.guest.guest5.lunchFryday,
        lunchSaturday: req.body.guest.guest5.lunchSaturday,
        guestBuyShirt: req.body.guest.guest5.guestBuyShirt,
        price: req.body.guest.guest5.price,
        shirt: {
          size: req.body.guest.guest5.shirt.size,
        },
      },
      guest6: {
        name: req.body.guest.guest6.name,
        rg: req.body.guest.guest6.rg,
        kinship: req.body.guest.guest6.kinship,
        lunchFryday: req.body.guest.guest6.lunchFryday,
        lunchSaturday: req.body.guest.guest6.lunchSaturday,
        guestBuyShirt: req.body.guest.guest6.guestBuyShirt,
        price: req.body.guest.guest6.price,
        shirt: {
          size: req.body.guest.guest6.shirt.size,
        },
      },
      guest7: {
        name: req.body.guest.guest7.name,
        rg: req.body.guest.guest7.rg,
        kinship: req.body.guest.guest7.kinship,
        lunchFryday: req.body.guest.guest7.lunchFryday,
        lunchSaturday: req.body.guest.guest7.lunchSaturday,
        guestBuyShirt: req.body.guest.guest7.guestBuyShirt,
        price: req.body.guest.guest7.price,
        shirt: {
          size: req.body.guest.guest7.shirt.size,
        },
      },
      guest8: {
        name: req.body.guest.guest8.name,
        rg: req.body.guest.guest8.rg,
        kinship: req.body.guest.guest8.kinship,
        lunchFryday: req.body.guest.guest8.lunchFryday,
        lunchSaturday: req.body.guest.guest8.lunchSaturday,
        guestBuyShirt: req.body.guest.guest8.guestBuyShirt,
        price: req.body.guest.guest8.price,
        shirt: {
          size: req.body.guest.guest8.shirt.size,
        },
      },
      guest9: {
        name: req.body.guest.guest9.name,
        rg: req.body.guest.guest9.rg,
        kinship: req.body.guest.guest9.kinship,
        lunchFryday: req.body.guest.guest9.lunchFryday,
        lunchSaturday: req.body.guest.guest9.lunchSaturday,
        guestBuyShirt: req.body.guest.guest9.guestBuyShirt,
        price: req.body.guest.guest9.price,
        shirt: {
          size: req.body.guest.guest9.shirt.size,
        },
      },
      guest10: {
        name: req.body.guest.guest10.name,
        rg: req.body.guest.guest10.rg,
        kinship: req.body.guest.guest10.kinship,
        lunchFryday: req.body.guest.guest10.lunchFryday,
        lunchSaturday: req.body.guest.guest10.lunchSaturday,
        guestBuyShirt: req.body.guest.guest10.guestBuyShirt,
        price: req.body.guest.guest10.price,
        shirt: {
          size: req.body.guest.guest10.shirt.size,
        },
      },
    },
  });
  const registers = await newRegister.save();
  await db.disconnect();
  res.send({ message: 'Registro adicionado com sucesso!', registers });
};

export default handler;
