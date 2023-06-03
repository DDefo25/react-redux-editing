import { useSelector, useDispatch } from "react-redux";
import {removeService, changeServiceField} from './actions/actions'

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const handleRemove = id => dispatch(removeService(id))
    const handleEdit = (o) => Object.entries(o).forEach(([name, value]) => dispatch(changeServiceField(name, value)))

    return (
        <ul className="list-group list-group-flush">
            {items.map(o => (
                <li className="list-group-item" key={o.id}>
                    {o.name} {o.price}
                    <i className="bi bi-pencil-square" onClick={() => handleEdit(o)} />
                    <i className="bi bi-trash3" onClick={() => handleRemove(o.id)} />
                </li>
            ))}
        </ul>
    )
}
