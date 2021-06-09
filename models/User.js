const S = require("sequelize");
const db = require("../db/db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    age: {
      type: S.INTEGER,
      allowNull: false,
    },
    userName: {
      type: S.STRING,
    },
    birthYear: {
      type: S.VIRTUAL,

      get() {
        //No vamos a tener en cuenta los meses, para no complicar
        return new Date().getFullYear() - this.getDataValue("age");
      },
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  user.userName = `${user.name}_${user.lastName}`;
});

User.legalAge = function () {
  return User.findAll({
    where: {
      age: {
        [S.Op.gte]: 18,
      },
    },
  });
};

User.prototype.getSameAge = function (user) {
  return User.findAll({
    where: {
      age: this.age,
    },
  });
};

module.exports = User;
