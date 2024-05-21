const CalcPrice = ({ list, totalPrice, onDel }) => {
    return (
        <div className="cart">
            {list.map(({ id, title, num, price }, index) => (
                <div key={index} className="cartitem">
                    <span>{title}</span>
                    <span>{num}개</span>
                    <span>{price * num}원</span>
                    <button onClick={() => onDel(id)}>삭제</button>
                </div>
            ))}
            <div>총금액: {totalPrice()}원</div>
        </div>
    );
};

export default CalcPrice;
