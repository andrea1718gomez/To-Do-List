import { useState } from 'react';
const ComponentFuncion = () => {
    let [state, setState] = useState({ count: 0 });

    let sumar = () => {
        setState({ count: state.count + 1 })
    }

    let restar = () => {
        if (state.count > 0) {
            setState({ count: state.count - 1 })
        }
    }
    return (
        <>
            <button onClick={() => sumar()}> + </button>
            <button onClick={() => restar()}> - </button>
            {state.count}
        </>
    );
}

export default ComponentFuncion;