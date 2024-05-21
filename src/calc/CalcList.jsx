import Calcitem from './Calcitem';

const CalcList = ({ data, setItem }) => {
    return (
        <div className="list">
            {data.map((item) => (
                <Calcitem key={item.id} item={item} setItem={setItem} />
            ))}
        </div>
    );
};

export default CalcList;
