import { storeUserData } from "./Authentication";

export const idValidator = (users, type, id) => {
  if (!id) {
    return "Please enter your ID";
  } else {
    if (type === "signup" && Array.isArray(users) && users.length !== 0) {
      if (users.findIndex((e) => e.id === id) !== -1)
        return "ID already exists";
      else {
      }
      return "";
    }
  }
};

export const passwordValidator = (password) => {
  if (!password) return "Please enter your password";
  if (password.length < 8 || password.length > 12)
    return "The number of characters should be between 8 and 12";
  return "";
};

export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Please enter your Email";
  if (!re.test(email)) return "Please enter a valid Email address";
  return "";
};

export const loginValidator = (users, id, password) => {
  const index = users.findIndex((e) => e.id === id);

  if (index !== -1) {
    if (id !== users[index].id || password !== users[index].password) {
      return "Your ID or Password does not exist";
    } else {
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...users[index], isLogedIn: true } : user
      );
      storeUserData("userData", updatedUsers);
      return "";
    }
  } else {
    return "Your ID or Password does not exist";
  }
};
