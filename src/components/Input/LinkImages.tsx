// CREATE AN OBJECT OF IMAGES TO BE USED IN THE FORMS
const images = {
  email: require("../../../assets/icons/email.png"),
  password: require("../../../assets/icons/password.png"),
  username: require("../../../assets/icons/username.png"),
  home: require("../../../assets/icons/home.png"),
  cart: require("../../../assets/icons/cart.png"),
};

let path: {} = "";

// FUNCTION link_images TAKES A STRING AS AN ARGUMENT AND RETURNS THE CORRECT IMAGE
export function link_images(imagePath: string) {
  // SET THE PATH TO THE CORRECT IMAGE
  if (imagePath === "email") {
    path = images.email;
  } else if (imagePath === "password") {
    path = images.password;
  } else if (imagePath === "username") {
    path = images.username;
  } else if (imagePath === "home") {
    path = images.home;
  } else if (imagePath === "cart") {
    path = images.cart;
  }

  return path;
}
