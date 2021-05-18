const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; 
const config = require('../config/index')[env];
const { readdirSync } = require('fs');
const path = require('path');

const SelectiveClinic = require('./selectiveClinic');

const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

db.sequelize = sequelize;

db.SelectiveClinic = SelectiveClinic;

SelectiveClinic.init(sequelize);

db.sequelize.query('SELECT * FROM test1.selectiveclinics')
.then((row)=>{ 
  if(row[0].length == 0){
    readdirSync(path.join(__dirname, 'excel'))
    .filter(file=>/\.csv$/.test(file))
    .forEach(file=>{
      const pwd = path.posix.join('c:/dev/mobeom_server/models/excel', file);
      db.sequelize.query(`LOAD DATA INFILE "${pwd}" INTO TABLE selectiveclinics FIELDS TERMINATED BY ','`)
        .then(()=>{
         console.log("!! csv converting completed !!");
        })
        .catch((err) =>{
          console.log(err);
        })
      }
    );
    }
  }
)
.catch((err) => {
  console.log(err);
})

module.exports = db;