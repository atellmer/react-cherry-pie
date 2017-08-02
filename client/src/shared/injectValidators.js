/** @flow */
import { addValidationRule } from 'formsy-react';


const injectValidators = () => {
  addValidationRule('isAlphaLatCyr', (values, value) => {
    const pattern = /^[a-zA-Z,а-яА-Я]*$/;

    return pattern.test(value);
  });
};

export default injectValidators;
