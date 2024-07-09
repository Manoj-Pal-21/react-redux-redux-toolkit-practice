import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { counterActions } from '../store/slices/counter'

const Controls = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    const handleAdd = () => {
        dispatch(counterActions.add(inputRef.current.value));
        inputRef.current.value = '';
    };

    const handleSubstract = () => {
        dispatch(counterActions.substract(inputRef.current.value));
        inputRef.current.value = '';
    };

    return (
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary" onClick={handleIncrement}>Increment</button>
            <button type="button" className="btn btn-success" onClick={handleDecrement}>Decrement</button>
            <input type="text" className="form-control" ref={inputRef} id="FormControlInput" placeholder="Enter Number" />
            <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-danger" onClick={handleSubstract}>Substract</button>
        </div>
    )
}

export default Controls