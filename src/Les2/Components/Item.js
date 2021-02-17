const Item = ({ number, name, img, present, onItemClick }) => {
    return (
        <li onClick={() => onItemClick(name)} className="student" key={number}>
            <img src={img} alt={name} />
            <span>{name} ({number})</span>
            <span className={`student__badge ${!present ? 'student__badge--absent' : ''}`}>{
                present ? 'Aanwezig' : 'Afwezig'
            }</span>
        </li>
    )
};

export default Item;
