import bcryptjs from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/utils/db';
import NextAuth from 'next-auth';
import Users from '@/models/Users';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await Users.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('E-mail ou senha inválido!');
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
