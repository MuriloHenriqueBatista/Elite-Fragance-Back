import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Usuario extends Model{
}

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "Users"
}

)