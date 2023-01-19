import bcrypt from 'bcryptjs';

module.exports = {
  users: [
    {
      name: 'Administrador',
      image: '',
      lastName: 'Local',
      email: 'admin@example.com',
      password: bcrypt.hashSync('Amiga2023!'),
      isAdmin: true,
    },
    {
      name: 'Usuário',
      image: '',
      lastName: 'Local',
      email: 'user@example.com',
      password: bcrypt.hashSync('Amiga2023!'),
      isAdmin: false,
    },
  ],

  registers: [
    {
      name: 'Ariel0',
      stageName: 'Paixão',
      postGraduation: 'SGT',
      CPF: '03131312391',
      rgCivil: '321654',
      rgMilitary: '2131454',
      CEP: '12515125',
      number: '321',
      address: 'logo ali',
      neighborhood: 'confia',
      city: 'guara',
      uf: 'SP',
      formation: 1972,
      email: 'exemplo@gmail.com',
      tellphone: '12991199191',
      cellphone: '12010100100',
      status: 'inativo',
      lunchFryday: true,
      lunchSaturday: false,
      buyShirt: false,
      shirt: {
        size: 'G',
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
          shirt: {
            size: 'a',
          },
        },
        guest6: {
          name: 'a',
          rg: 'a',
          kinship: 'a',
          lunchFryday: 'a',
          lunchSaturday: 'a',
          guestBuyShirt: 'a',
          shirt: {
            size: 'a',
          },
        },
        guest7: {
          name: 'a',
          rg: 'a',
          kinship: 'a',
          lunchFryday: 'a',
          lunchSaturday: 'a',
          guestBuyShirt: 'a',
          shirt: {
            size: 'a',
          },
        },
        guest8: {
          name: 'a',
          rg: 'a',
          kinship: 'a',
          lunchFryday: 'a',
          lunchSaturday: 'a',
          guestBuyShirt: 'a',
          shirt: {
            size: 'a',
          },
        },
        guest9: {
          name: 'a',
          rg: 'a',
          kinship: 'a',
          lunchFryday: 'a',
          lunchSaturday: 'a',
          guestBuyShirt: 'a',
          shirt: {
            size: 'a',
          },
        },
        guest10: {
          name: 'a',
          rg: 'a',
          kinship: 'a',
          lunchFryday: 'a',
          lunchSaturday: 'a',
          guestBuyShirt: 'a',
          shirt: {
            size: 'a',
          },
        },
      },
    },
  ],
};
