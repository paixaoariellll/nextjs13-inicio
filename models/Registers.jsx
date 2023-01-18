import mongoose from 'mongoose';

const registers = new mongoose.Schema(
  {
    name: { type: String, required: false },
    stageName: { type: String, required: false },
    postGraduation: { type: String, required: false },
    CPF: { type: String, required: false },
    rgCivil: { type: String, required: false },
    rgMilitary: { type: String, required: false },
    CEP: { type: String, required: false },
    number: { type: String, required: false },
    address: { type: String, required: false },
    neighborhood: { type: String, required: false },
    city: { type: String, required: false },
    uf: { type: String, required: false },
    formation: { type: Number, required: false, default: 1980 },
    email: { type: String, required: false },
    tellphone: { type: String, required: false },
    cellphone: { type: String, required: false },
    lunchFryday: { type: String, required: false },
    lunchSaturday: { type: String, required: false },
    buyShirt: { type: String, required: false },
    priceVeteran: { type: Number, required: true },
    priceGuest: { type: Object, required: true },
    totalPrice: { type: Number, required: true },
    guest: {
      guest1: {
        name: { type: String, required: false },
        rg: { type: String, required: false },
        kinship: { type: String, required: false },
        lunchFryday: { type: String, required: false },
        lunchSaturday: { type: String, required: false },
        guestBuyShirt: { type: String, required: false },
        price: { type: Number, required: false, default: 0 },
        shirt: {
          size: { type: String, required: false },
        },
      },
      guest2: {
        name: { type: String, required: false },
        rg: { type: String, required: false },
        kinship: { type: String, required: false },
        lunchFryday: { type: String, required: false },
        lunchSaturday: { type: String, required: false },
        guestBuyShirt: { type: String, required: false },
        price: { type: Number, required: false, default: 0 },
        shirt: {
          size: { type: String, required: false },
        },
      },
      guest3: {
        name: { type: String, required: false },
        rg: { type: String, required: false },
        kinship: { type: String, required: false },
        lunchFryday: { type: String, required: false },
        lunchSaturday: { type: String, required: false },
        guestBuyShirt: { type: String, required: false },
        price: { type: Number, required: false, default: 0 },
        shirt: {
          size: { type: String, required: false },
        },
      },
      guest4: {
        name: { type: String, required: false },
        rg: { type: String, required: false },
        kinship: { type: String, required: false },
        lunchFryday: { type: String, required: false },
        lunchSaturday: { type: String, required: false },
        guestBuyShirt: { type: String, required: false },
        price: { type: Number, required: false, default: 0 },
        shirt: {
          size: { type: String, required: false },
        },
      },
      guest5: {
        name: { type: String, required: false },
        rg: { type: String, required: false },
        kinship: { type: String, required: false },
        lunchFryday: { type: String, required: false },
        lunchSaturday: { type: String, required: false },
        guestBuyShirt: { type: String, required: false },
        price: { type: Number, required: false, default: 0 },
        shirt: {
          size: { type: String, required: false },
        },
      },
    },
  },
  { timestamps: true },
);

const Register =
  mongoose.models.Register || mongoose.model('Register', registers);

export default Register;
