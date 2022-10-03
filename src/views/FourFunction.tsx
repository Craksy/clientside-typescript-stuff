import './FourFunctions.css'

const FourFunction = () => {
    return(
        <div className="calculator container">
            <h1 className="is-size-3 is-primary">FFour Function Calculator</h1>
            <div className="tile is-ancestor is-10 is-vertical my-5">
                <div className="tile is-parent my-2">
                    <div id='output' className="tile is-child is-dark box">
                        output
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <input id='input' className='input is-info' type="text"/>
                    </div>
                </div>
                <div className="tile is-parent">
                    <button id='btn-c' className="button tile is-child box is-3 is-warning">C</button>
                    <button id='btn-ce' className="button tile is-child box is-3 is-danger">CE</button>
                    <button id='btn-bs' className="button tile is-child box is-6">Backspace</button>
                </div>
                <div className="tile is-parent">
                    <button id='btn-1' className="button tile is-3 is-child">1</button>
                    <button id='btn-2' className="button tile is-3 is-child">2</button>
                    <button id='btn-3' className="button tile is-3 is-child">3</button>
                    <button id='btn-div' className="button tile is-3 is-child is-link">/</button>
                </div>
                <div className="tile is-parent">
                    <button id='btn-4' className="button tile is-child is-3">4</button>
                    <button id='btn-5' className="button tile is-child is-3">5</button>
                    <button id='btn-6' className="button tile is-child is-3">6</button>
                    <button id='btn-mul' className="button tile is-child is-3 is-link">x</button>
                </div>
                <div className="tile is-parent">
                    <button id='btn-7' className="button tile is-3">7</button>
                    <button id='btn-8' className="button tile is-3">8</button>
                    <button id='btn-9' className="button tile is-3">9</button>
                    <button id='btn-sub' className="button tile is-3 is-link">-</button>
                </div>
                <div className="tile is-parent">
                    <button id='btn-eq' className="button tile is-link">=</button>
                    <button id='btn-0' className="button tile ">0</button>
                    <button id='btn-dot' className="button tile ">.</button>
                    <button id='btn-add' className="button tile is-link">+</button>
                </div>
            </div>
        </div>
    )
}

export default FourFunction