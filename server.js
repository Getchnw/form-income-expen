import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  

// เชื่อมต่อฐานข้อมูล
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "income_expenses",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้: ' + err.message);
        return;
    }
    console.log('เชื่อมต่อกับฐานข้อมูลสำเร็จ!');
});

app.get('/transactions', (req, res) => {
    const sql = "SELECT * FROM list_income_expenese";
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/transactions', (req, res) => {
    const { name, amount, date, type } = req.body;
    const sql = "INSERT INTO list_income_expenese (name, amount, date_use, type) VALUES (?, ?, ?, ?)";
    connection.query(sql, [name, amount, date, type], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'บันทึกข้อมูลสำเร็จ!' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});