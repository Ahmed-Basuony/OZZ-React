export default function validation(values) {
  let errors = {};

  //first name error validate
  if (!values.firstName.trim()) {
    errors.firstName = "first name is required *";
  }

  //last name error validate
  if (!values.lastName) {
    errors.lastName = "last name is required *";
  }

  //email error validate
  if (!values.email) {
    errors.email = "Email is required *";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //password error validate
  if (!values.password) {
    errors.password = "Password is required *";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  return errors;
}
