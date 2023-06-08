import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from "../actions/actionsTypes";

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer (state=initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            let { name, price } = action.payload;
            return [...state, { id: nanoid(), name, price: Number(price) }]         
        case REMOVE_SERVICE:
            let { id } = action.payload;
            return state.filter(service => service.id !== id)
        case EDIT_SERVICE:
            let { id: editId, name: editName, price: editPrice } = action.payload;
            return [...state.filter(service => service.id !== editId), { id: editId, name: editName, price: Number(editPrice) }]
        default:
            return state;
    }

}