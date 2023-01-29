import bcryptjs from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/utils/db';
import NextAuth from 'next-auth';
import Users from '@/models/Users';

export default NextAuth({
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
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwtToken({ token, user }) {
      const newToken = { ...token };
      if (user?._id) newToken._id = user._id;
      if (user?.isAdmin) newToken.isAdmin = user.isAdmin;
      return newToken;
    },
    async jwtSession({ session, token }) {
      const newSession = { ...session };
      if (token?._id) newSession._id = token._id;
      if (token?.isAdmin) newSession.isAdmin = token.isAdmin;
      return newSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
