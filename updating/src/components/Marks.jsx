import React, { Component } from 'react'

export default class Marks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roll: this.props.roll
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log('Get Derived State From Props');
        console.log(props, state);
        if (props.roll !== state.roll) {
            return { roll: props.roll }
        }
        return null;

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.roll < 2170) {
            console.log('Marks - ShoudlComponentUpdate');
            console.log(nextProps, nextState);
            return true;
        }

        console.log(nextProps, nextState);
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Marks- GetSnapShotBeforeUpdate- It runs before update');
        console.log(prevProps, prevState);
        return '45';

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Marks- ComponentDidUpdate - It runs after update');
        console.log(prevProps, prevState,snapshot);
    }
    render() {
        console.log('Marks Rendered!');
        return (
            <div>
                <h2>I am Makin . My Roll is {this.state.roll}</h2>
            </div>
        )
    }

}
