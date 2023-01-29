import data from '@/utils/data';
import db from '@/utils/db';
import Registers from '@/models/Registers';
import Users from '@/models/Users';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('Administrador, acesse a sua conta!');
  }

  await db.connect();
  await Registers.deleteMany();
  await Registers.insertMany(data.registers);
  await Users.deleteMany();
  await Users.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'Seed concluída com sucesso!' });
};

export default handler;
