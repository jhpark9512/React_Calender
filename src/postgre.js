
const { Client } = require("pg")

const postDB = new Client({
    user :"postgres",
    host :"127.0.0.1",
    database :"postgres",
    password : "wjdgh9512!",
    port : 5432,
});

postDB.connect();



postDB.query('SELECT * FROM coupons', (req,res) => {
    console.log(req, res);
});
postDB.query('SELECT * FROM coupon_users', (req,res) => {
    console.log(req, res);
});
postDB.query('SELECT * FROM coupon_types', (req,res) => {
    console.log(req, res);
    postDB.end();
});
