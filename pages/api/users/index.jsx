import db from '@/utils/db';
import Users from '@/models/Users';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await db.connect();
    const { name, email, password } = req.body;
    const user = await Users.create({ name, email, password });
    await db.disconnect();
    res.status(201).json({ user });
  }
};

export default handler;
