import './styles.css';
import { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { HiOutlineMinusCircle } from 'react-icons/hi';

export const ItemCount = ({item, initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <>
            <div className="row mx-0" id="counter">
                <button className="btn p-0 mr-auto shadow-none" type="button" onClick={decrement}>
                    <HiOutlineMinusCircle size="30" color={counter === initial ? '#C2E7F5' : '#2294C6'}/>
                </button>
                <p className="m-0 mx-4 align-self-center">{stock > 0 ? counter : stock}</p>
                <button className="btn p-0 ml-auto shadow-none" type="button" onClick={increment}>
                    <HiOutlinePlusCircle size="30" color={counter === stock || stock === 0 ? '#C2E7F5' : '#2294C6'} />
                </button>
            </div>
            <button className="col-12 btn btn-primary mt-4" type="button" id={stock !== 0 ? 'addToCart' : 'addToCartNoStock'} onClick={stock !== 0 ? () => {onAdd(item, counter)} : null}>
                <p className="m-0">Agregar al carrito</p>
            </button>
        </>
    )
}