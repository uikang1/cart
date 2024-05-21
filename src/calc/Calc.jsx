import React, { useState } from 'react';
import './style.scss';
import data from '../assets/api/data';
import CalcList from './CalcList';
import Calcform from './Calcform';
import CalcPrice from './CalcPrice';
import { CiShoppingCart } from 'react-icons/ci';

const Calc = () => {
    const [item, setItem] = useState(null);
    const [list, setList] = useState([]);
    const [num, setNum] = useState(1);

    const addList = () => {
        if (!item) return;
        setList([...list, { ...item, num }]);
        setItem(null);
    };

    const onDel = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const totalPrice = () => {
        return list.reduce((total, item) => total + item.price * item.num, 0).toLocaleString();
    };

    const order = () => {
        if (list.length === 0) {
            alert('장바구니가 비었습니다');
        } else {
            alert('주문완료');
            setList([]);
        }
    };
    return (
        <div className="container">
            <CalcList data={data} setItem={setItem} />
            {item && <Calcform item={item} num={num} setNum={setNum} addList={addList} />}
            <div className="icon">
                <CiShoppingCart />
                <span>{list.length}</span>
            </div>
            <CalcPrice list={list} totalPrice={totalPrice} onDel={onDel} />
            <button onClick={order}>주문하기</button>
        </div>
    );
};

export default Calc;
