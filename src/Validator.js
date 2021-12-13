import { getUserData, storeUserData } from "./Authentication";

export function idValidator(type, id) {
  if (!id) return "Please enter your ID";
  const userData = getUserData("userData");
  if (type === "signup") {
    if (id === userData.id) return "ID already exists";
  }
  return "";
}

export function passwordValidator(type, password) {
  if (!password) return "Please enter your password";
  if (password.length < 8 || password.length > 12)
    return "The number of characters should be between 8 and 12";
  return "";
}

export function emailValidator(type, email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Please enter your Email";
  if (!re.test(email)) return "Please enter a valid Email address";
  return "";
}

export function loginValidator(id, password) {
  const userData = getUserData("userData");

  if (
    Object.keys(userData).length === 0 ||
    id !== userData.id ||
    password !== userData.password
  ) {
    return "Your ID or Password does not exist";
  }
  return "";
}
