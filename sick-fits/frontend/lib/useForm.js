import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  // create a function to handle changes
  function handleChange(event) {
    // const { name, value } = event.target;
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }
  // return the inputs and the handleChange function
  //   return {
  //     inputs,
  //     handleChange,
  //   };
}
