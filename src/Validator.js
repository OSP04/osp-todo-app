export function idValidator(id) {
  if (!id) return "Please enter your ID";
  return "";
}

export function passwordValidator(password) {
  if (!password) return "Please enter your password";
  if (password.length < 8 || password.length > 12)
    return "The number of characters should be between 8 and 12";
  return "";
}

export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Please enter your Email";
  if (!re.test(email)) return "Please enter a valid Email address";
  return "";
}
