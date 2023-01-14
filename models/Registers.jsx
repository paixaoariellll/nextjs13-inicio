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
    buyShirt: { type: Boolean, required: false, default: false },
    shirt: {
      size: { type: String, required: false, default: 'M' },
    },
    manyGuests: { type: Number, required: false, default: 0 },
    guest: {
      name: { type: String, required: false },
      rg: { type: String, required: false },
      kinship: { type: String, required: false },
      lunchFryday: { type: String, required: false },
      lunchSaturday: { type: String, required: false },
      guestBuyShirt: { type: Boolean, required: false, default: false },
      shirt: {
        size: { type: String, required: false },
      },
    },
  },
  { timestamps: true },
);

const Register = mongoose.models.Register || mongoose.model('Register', registers);

export default Register;
