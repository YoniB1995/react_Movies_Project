import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);

    }
    
    
    render() {
        const {title , placeholder , buttonTitle , thisFunc} = this.props;
        return (
            <div>
            <h1>Form</h1>
            <input type="text" name="" id="" title={title} placeholder={placeholder} />
            <button title={buttonTitle} onClick={thisFunc}>Click</button>
            </div>
        );
    }
}

export default Form;