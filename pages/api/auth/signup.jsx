import bcryptjs from 'bcryptjs';
import db from '@/utils/db';
import Users from '@/models/Users';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await db.connect();

    const { name, email, password } = req.body;

    if (!email || !email.includes('@')) {
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
      isAdmin: false,
    });

    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(password, salt);

    const user = await newUser.save();
    await db.disconnect();
    res.status(201).send({
      message: 'Usuário criado com sucesso!',
      user,
    });
  }
};

export default handler;
