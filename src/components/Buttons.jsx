import refresh from '../images/refresh.png'

function Buttons(){
    return(
        <div className='buttons'>
            <button className='plus'>+</button>
            <button className='refresh'><img src={refresh} alt=""/></button>
            <button className='minus'>-</button>
        </div>
    )
}

export default Buttons;