import bcryptjs from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/utils/db';
import NextAuth from 'next-auth';
import Users from '@/models/Users';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await db.connect();
        const user = await Users.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            name: user.name,
            email: user.email,
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
