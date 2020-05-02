// empty inputs form validation
const emptyInputsValidation = $formInputs => {
  let isValid = true;
  $formInputs.map((i, el) => el.value === '' && (isValid = false));
  return isValid;
};