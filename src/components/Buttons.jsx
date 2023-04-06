import refresh from '../images/refresh.png'

function Buttons({counter, setCounter}){ 
    function plus(){
        setCounter(counter + 3)
    }

    function minus(){
        if (counter <= 0) {
            return alert('Ошибка');
        } else if (counter <= 1){
            return alert('Ошибка');
        } else {
            setCounter(counter - 2)
        }
    }

    function reset(){
        setCounter(0)
    }

    return(
        <div className='buttons'>
            <button className='plus' onClick={plus}>+</button>
            <button className='refresh' onClick={reset}><img src={refresh} alt=""/></button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}

export default Buttons;