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
     },

     avatar : {
       type: DataTypes.STRING,
       default:  "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
     }
    },
   
    {paranoid: true}
);

export default UserModel;