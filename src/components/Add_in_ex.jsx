import React, { useState } from 'react';
import axios from 'axios';

const AddInEx = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    
    const addIncome = async (e) => {
        e.preventDefault();
        const data = { name, amount, date, type };
        
        try {
            const response = await axios.post('http://localhost:4000/transactions', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('บันทึกข้อมูลสำเร็จ!');
                setName('');
                setAmount('');
                setDate('');
                setType('');
            } else {
                alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
        }
    };
  
    return (
        <div className='flex justify-center items-center h-screen p-4'>
             <div className="flex flex-col max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
            <h2 className='text-3xl text-gray-900 underline'>เพิ่มรายรับ-รายจ่าย</h2>
            <form onSubmit={addIncome} className="max-w-3xl mx-auto p-2">
                <div className="w-full flex flex-row items-center gap-4 mt-4">
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="title" className='text-lg'>ชื่อรายการ</label>
                        <input type="text" id='title' className='w-full border p-2 rounded-lg' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="type" className='text-lg'>ประเภท</label>
                        <select id="type" className='w-full border p-2 rounded-lg' value={type} onChange={(e) => setType(e.target.value)} required>
                            <option value="">เลือกประเภท</option>
                            <option value="รายรับ">รายรับ</option>
                            <option value="รายจ่าย">รายจ่าย</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center gap-4 mt-4">
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="amount" className='text-lg'>จำนวนเงิน</label>
                        <input type="number" id='amount' className='w-full border p-2 rounded-lg' value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="date" className='text-lg'>วันที่</label>
                        <input type="date" id='date' className='w-full border p-2 rounded-lg' value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    บันทึกข้อมูล
                </button>
            </form>
        </div>
        </div>
        
    );
};

export default AddInEx;
