import { useSelector, useDispatch } from "react-redux";
import { addService, changeServiceField, clearServiceField, editService } from "../store/actions/actions";

export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd)
    const dispatch = useDispatch()
    const handleChange = evt => { 
        const {name, value} = evt.target; 
        dispatch( changeServiceField(name, value))
    }
    const handleSubmit = evt => { 
        evt.preventDefault();
        const {id, name, price} = item;
        if (id) {
            dispatch( editService(id, name, price) )
        } else {
            dispatch( addService(name, price) )
        }
        Object.keys(item).forEach((name) => dispatch(clearServiceField(name)))
    }

    const handleClear = evt => {
        evt.preventDefault()
        Object.keys(item).forEach((name) => dispatch(clearServiceField(name)))
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group input-group-sm m-3">
                <span className="input-group-text " id="inputGroup-sizing-sm">Название</span>
                <input type="text" className="form-control" name='name' onChange={handleChange} value={item.name} />
                <span className="input-group-text" id="inputGroup-sizing-sm">Стоимость</span>
                <input type="number" className="form-control" name='price' onChange={handleChange} value={item.price} />
                <button type='submit' className="btn btn-primary">Сохранить</button>
                <button className="btn btn-secondary ms-1" onClick={handleClear} >Очистить</button>
            </div>
        </form>
    );
}
