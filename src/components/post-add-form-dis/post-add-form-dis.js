import React, {Component} from 'react';
import {addFromCart} from '../../actions';
import ContactForm from '../post-add-form';
import { connect } from 'react-redux';


class PostAddForm extends Component {
    submit = values => {
        // print the form values to the console
        this.addFromCart(values);
    }

    render() {
        const {addFromCart} = this.props;
        return <>
            
            <ContactForm onSubmit={this.submit = values => addFromCart(values)} />
        </>
        
    }
};


const mapDispatchToProps = {
    addFromCart
}


export default connect(null, mapDispatchToProps)(PostAddForm);