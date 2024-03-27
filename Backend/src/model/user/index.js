import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const UserModel = sequelize.define (
    "User",
     {
     username: {
        type: DataTypes.STRING
     },

     email: {
        type: DataTypes.STRING
     },

     password: {
        type: DataTypes.STRING
     }
    },
   
    {paranoid: true}
);

export default UserModel;