const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

module.exports = {
  register: async (req, res, next) => {
    try {
      let { name, email, password } = req.body;
      let existUser = await prisma.User.findUnique({ where: { email } });

      if (existUser) {
        req.flash('error', 'user already used');
        return res.redirect('/register');
      }

      let encryptedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: encryptedPassword,
        },
      });

      return res.redirect('/login');
    } catch (err) {
      next(err);
    }
  },
};
