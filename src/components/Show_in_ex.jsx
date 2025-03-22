import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Show_in_ex = () => {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/transactions');
                console.log('Response Data:', response.data); // Log the response to verify the data structure
                setTransactions(response.data); // If the response is an array
            } catch (error) {
                console.error('Error fetching transactions:', error);
                alert('ไม่สามารถดึงข้อมูลรายการได้');
            }
        };
    }, []);

  return (
    <div className='flex justify-center items-center h-screen p-4'>
        <div className='flex flex-col max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6'>
            <h1>รายการ</h1>
            <div className='flex flex-row items-end gap-4 border p-2'>
                <label htmlFor="ตักรอง">ตัวกรอง</label>
                <select onChange={(e) => setMonth(e.target.value)}>
                    <option>ทุกเดือน</option>
                    <option>มกราคม</option>
                    <option>กุมภาพันธ์</option>
                    <option>มีนาคม</option>
                    <option>เมษายน</option>
                    <option>พฤษภาคม</option>
                    <option>มิถุนายน</option>
                    <option>กรกฎาคม</option>
                    <option>สิงหาคม</option>
                    <option>กันยายน</option>
                    <option>ตุลาคม</option>
                    <option>พฤศจิกายน</option>
                    <option>ธันวาคม</option>
                </select>
            </div>
            {
                transactions.map((transaction, index) => {
                    return (
                        <div key={index} className='flex flex-row items-center gap-4 border p-2'>
                            <div>{transaction.name}</div>
                            <div>{transaction.amount}</div>
                            <div>{transaction.date_use}</div>
                            <div>{transaction.type}</div>
                        </div>
                    );
            })}
        </div>
        
    </div>
  )
}
export default Show_in_ex