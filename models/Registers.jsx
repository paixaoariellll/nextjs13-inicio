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
    formation: { type: String, required: false },
    email: { type: String, required: false },
    tellphone: { type: String, required: false },
    cellphone: { type: String, required: false },
    status: { type: String, required: false },
    lunchFryday: { type: String, required: false },
    lunchFrydayValue: { type: String, required: false },
    lunchSaturday: { type: String, required: false },
    lunchSaturdayValue: { type: String, required: false },
    shirt: {
      size: { type: String, required: false },
      value: { type: String, required: false },
    },
    guests: { type: String, required: false },
    guest: {
      name: { type: String, required: false },
      rg: { type: String, required: false },
      kinship: { type: String, required: false },
      lunchFryday: { type: String, required: false },
      lunchFrydayValue: { type: String, required: false },
      lunchSaturday: { type: String, required: false },
      lunchSaturdayValue: { type: String, required: false },
      shirt: {
        size: { type: String, required: false },
        value: { type: String, required: false },
      },
    },
  },
  { timestamps: true },
);

const Register =
  mongoose.models.Register || mongoose.model('Register', registers);

export default Register;
