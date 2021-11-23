import { Component } from 'react'
import Userchange from './Userchange'

class User extends Component {
    constructor() {
        super();
        this.state = { name: 0, show: true }
        console.log('constructor')
    }

    componentDidUpdate() { console.log('componentDidUpdate') }

    componentDidMount() { console.log('componentDidMount') }

    shouldComponentUpdate() {
        if (this.state.name > 2 && this.state.name < 7) { return true }
       else if (this.state.name > 12 && this.state.name < 20) { return true }
        else {
            console.log('shouldComponentUpdate', this.state.name)
            return false
        }
    }

    change() { this.setState({ name: this.state.name + 1 }) }

    render() {
        // for Render lifecycle check 
        console.log('render')
        return (
            <>
                <div className='click-me'>
                    <h1>hello {this.state.name}</h1>
                    <button className='buton' onClick={() => this.change()}>Click me</button>
                    <button className='buton' onClick={() => this.setState({ show: !this.state.show })}>Remove component</button>
                    {this.state.show ? <Userchange /> : <h1>removed</h1>}
                </div>
            </>
        )
    }
}

export default User;
