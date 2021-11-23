import { Component } from 'react'

class Userchange extends Component {

    componentWillUnmount() { console.log('componentWillUnmount') }

    render() { return (<h1 className='title-h'>remove the child element</h1>) }
}

export default Userchange;
