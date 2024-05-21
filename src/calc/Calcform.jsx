const CalcForm = ({ item, num, setNum, addList }) => {
    const { id, imgurl, title, price } = item;
    return (
        <div className="form">
            <img src={imgurl} alt={title} />
            <h3>{title}</h3>
            <p>{price}원</p>
            <select value={num} onChange={(e) => setNum(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={addList}>장바구니 담기</button>
        </div>
    );
};

export default CalcForm;
