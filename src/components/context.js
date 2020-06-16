// import React, { Component, useState } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';
// import useForm from 'react-hook-form';

// function createArrayWithNumbers(length) {
//   return Array.from({ length }, (_, k) => k + 1);
// }

// function YourForm() {
//   const { register, handleSubmit, watch, errors } = useForm()
//   const onSubmit = data => {
//     console.log('data: ', data)
//   }; // your form submit function which will invoke after successful validation

//   console.log(watch('example')) // you can watch individual input by pass the name of the input
//   console.log(errors,"errors");
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* you will have to register your input into react-hook-form, by invoke the register function with ref as the argument */}
//       <input
//         type="text"
//         name="example"
//         ref={register({ required: true })}
//       />
//       <input
//         type="text"
//         name="max_length"
//         placeholder="max_length"
//         ref={register({  maxLength: 3 })}
//       />
//       <input
//         type="text"
//         name="min_length"
//         placeholder="min_length"
//         ref={register({  minLength: 3 })}
//       />
//       {/* include validation with required field or other standard html validation rules */}
//       <input
//         type="text"
//         name="exampleRequired"
//         ref={register({ required: true, maxLength: 10,
//         pattern: /[A-Za-z]{3}/ })}
//       />
//       {/* errors will return true if particular field validation is invalid  */}
//       {errors.example && '<span>This field is required</span>'}
//       <input type="submit" />
//     </form>
//   )
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <YourForm />
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));
