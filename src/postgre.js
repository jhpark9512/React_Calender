const express = require('express');
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

//커넥션 풀
const postDB = new Client({
    user: "postgres",
    host: "127.0.0.1",
    database: "postgres",
    password: "wjdgh9512!",
    port: 5432,
});
//연결
postDB.connect()
    .then(() => console.log('PostgreSQL 연결 성공'))
    .catch(err => console.error('PostgreSQL 연결 오류:', err));

//SELECT * FROM 테이블명 
const getData = async (tablename) => {
    try {

        const result = await postDB.query('SELECT * FROM ' + tablename);
        console.log(result.rows)
        return result.rows
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'An error occurred while executing query' });
    }

}

//coupon_users 테이블
app.get('/coupon_users', async (req, res) => {
    try {
        const data = await getData('coupon_users');
        console.log('데이터 타입:' + typeof (data))
        res.setHeader('Content-Type', 'application/json');
        console.log('json: ' + JSON.stringify(data))
        res.send(JSON.stringify(data))

    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
})

//coupon_types 테이블
app.get('/coupon_types', async (req, res) => {
    try {
        const data = await getData('coupon_types');
        console.log('데이터 타입:' + typeof (data))
        res.setHeader('Content-Type', 'application/json');
        console.log('json: ' + JSON.stringify(data))
        res.send(JSON.stringify(data))

    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
})

//식권대장 테이블(다중join)
const getMainTable = async () => {
    try {
        const result = await postDB.query(
            "SELECT a.use_date, c.type, b.id, b.name, b.department, a.create_dt, a.update_dt from coupons AS a "
            +"INNER JOIN coupon_users AS b "
            +"ON a.coupon_user_id = b.id "
            +"INNER JOIN coupon_types AS c "
            +"ON a.coupon_type_code = c.code "
            +"WHERE use_date ='2024-04-05' ORDER BY id ASC");
        console.log(result.rows)
        return result.rows
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'An error occurred while executing query' });
    }
}

//다중 join으로만든 결과물 테이블
app.get('/main_table', async (req, res) => {
    try {
        const data = await getMainTable();
        console.log('데이터 타입:' + typeof (data))
        res.setHeader('Content-Type', 'application/json');
        console.log('json: ' + JSON.stringify(data))
        res.send(JSON.stringify(data))

    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
})

//5000번 포트 대기
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


