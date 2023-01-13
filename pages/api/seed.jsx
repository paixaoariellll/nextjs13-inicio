import data from '../../utils/data';
import db from '../../utils/db';
import Registers from '../../models/Registers';

const handler = async (req, res) => {
  await db.connect();
  await Registers.deleteMany();
  await Registers.insertMany(data.registers);
  await db.disconnect();
  res.send({ message: 'Seed concluída com sucesso!' });
};

export default handler;
