import bcryptjs from 'bcryptjs';
import db from '@/utils/db';
import Users from '@/models/Users';

async function handler(req, res) {
  if (req.method === 'POST') {
    await db.connect();

    const { name, email, password } = req.body;
    if (!name || !email || !email.includes('@')) {
      res.status(422).json({
        message: 'Erro de validação.',
      });
      return;
    }

    const existingUser = await Users.findOne({ email: email });
    if (existingUser) {
      res.status(422).json({ message: 'E-mail já cadastrado!' });
      await db.disconnect();
      return;
    }

    const newUser = new Users({
      name,
      email,
      password: bcryptjs.hashSync(password),
      isAdmin: false,
    });

    const user = await newUser.save();
    await db.disconnect();
    res.status(201).send({
      message: 'Usuário criado com sucesso!',
      user,
    });
  }
}

export default handler;
