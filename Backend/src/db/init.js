import UserModel from "../model/user/index.js";


const dataBaseInIt = async() => {
    await UserModel.sync({ alter: true, force: false });
}

export default dataBaseInIt