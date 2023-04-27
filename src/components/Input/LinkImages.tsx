// CREATE AN OBJECT OF IMAGES TO BE USED IN THE FORMS
const images = {
  email: require("../../../assets/icons/email.png"),
  password: require("../../../assets/icons/password.png"),
  username: require("../../../assets/icons/username.png"),
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
  }

  return path;
}
