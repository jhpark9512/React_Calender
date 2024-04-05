const express = require('express');
const cors = require('cors');
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

const postDB = new Client({
    user: "postgres",
    host: "127.0.0.1",
    database: "postgres",
    password: "wjdgh9512!",
    port: 5432,
});

const getData = async () => {
    try{
        postDB.connect();
        const result =  await postDB.query('SELECT * FROM coupon_types');
        console.log(result.rows)
        return result.rows
    }catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'An error occurred while executing query' });
      }
      
}
app.get('/coupons2', async (req, res)=>{
    try {
        const coupons = [
            { code: 'coupon1', discount: 10 },
            { code: 'coupon2', discount: 20 },
            { code: 'coupon3', discount: 30 }
          ];
          res.json(coupons)
        
    }catch (error){
        res.status(500).json({ message: 'server error'});
    }
})

app.get('/coupons', async (req, res)=>{
    try {
        const data = await getData();
        console.log('데이터 타입:'+typeof(data))
        res.setHeader('Content-Type','application/json');
        console.log('json: '+JSON.stringify(data))
        res.send(JSON.stringify(data))
        
    }catch (error){
        res.status(500).json({ message: 'server error'});
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


