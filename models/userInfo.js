const Sequelize = require('sequelize');

module.exports = class UserInfo extends Sequelize.Model{

    static init(sequelize){
        return super.init({
            isInfected : {
                type : Sequelize.BOOLEAN,
                allowNull : false,
                default : false
            },
            isVaccined: {
                type : Sequelize.BOOLEAN,
                allowNull : false,
                default : false
            },
            vaccine : {
                type : Sequelize.ENUM('m', 'w', 'a', 'y'),       
                allowNull : false,
                default : 'm'      
            },
            firstInjection : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            secondInjection : {                       
                type : Sequelize.STRING(40),
                allowNull : false,
            }
        },         
        {
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'UserInfo',
            tableName : 'userinfos',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }
}