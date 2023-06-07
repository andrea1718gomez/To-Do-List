import { Component } from 'react'
import './index.css'

class ComponentClase extends Component {
    state = { count: 0 }

    sumar() {
        // this.state.count = this.state.count + 1;
        this.setState({ count: this.state.count + 1 })
        // console.log(this.state.count)
    }

    restar() {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        };
    }

    componentDidMount() {
        console.log(`Hola`)
    }

    componentDidUpdate() {
        console.log(`actualizado`);
    }

    componentWillUnmount() {
        console.log(`ya no queria vivir a si que me mori.  :/`);
    }
    render() {
        return (
            <>
                <button onClick={() => this.sumar()} className="buttonMas"> + </button>
                <button onClick={() => this.restar()} className="buttonMenos"> - </button>
                {this.state.count}
            </>
        );
    }
}

export default ComponentClase;