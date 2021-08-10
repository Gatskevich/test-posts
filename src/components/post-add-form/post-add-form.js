import React from 'react';
import { Field, reduxForm } from 'redux-form'

import './post-add-form.scss'






  let ContactForm = props => {
    const { handleSubmit } = props
        return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">title</label>
            <Field name="title" component="input"   type="text"   placeholder='Title'/>
            </div>
            <div>
            <label htmlFor="body">body</label>
            <Field name="body" component="input"   type="text" />
            </div>
            <div>
            <label htmlFor="id-user">id user</label>
            <Field name="userId" component="input"   type="number" />
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }


ContactForm = reduxForm({
    // a unique name for the form
    form: 'post'
  })(ContactForm)
  
export default ContactForm;
