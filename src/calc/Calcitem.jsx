const Calcitem = ({ item, setItem }) => {
    const { id, imgurl, title, price } = item;
    return (
        <div className="item" onClick={() => setItem(item)}>
            <img src={imgurl} alt={title} />
            <div>{title}</div>
            <div>{price}원</div>
        </div>
    );
};

export default Calcitem;
