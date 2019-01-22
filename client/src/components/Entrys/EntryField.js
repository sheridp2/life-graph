import React from 'react';

export default ({ input, label, meta: { error, touched, active } }) => {

  return(
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom:'5px'}}/>
      <div className="red-text" style={{marginBottom:'20px'}}>
        {!active && touched && error}
      </div>
    </div>
  )
}
