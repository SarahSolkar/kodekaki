// $(document).ready(function () {
//     $('.submit-button').click(logIn);
// });
/**
 * Makes login object to be stored in localStorage.
 * @param {Boolean} signedIn - Whether or not the user is signed in
 * @param {UserName} email - Username of user
 */
function makeLoginObject(signedIn, email) {
  let d = new Date();
  expireDate = new Date(d.getTime() + 60 * 60 * 1000); //Expires in 1 hour
  return { signedIn: signedIn, email: email, expireDate: expireDate };
}

function isEmpty(id, pwd) {
  let email = id.trim();
  let password = pwd.trim();
  if (email === "" || email == null || password === "" || password == null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Log the user into the system. Login information is stored in localStorage
 * with credentials as the identifier
 */
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!isEmpty(email, password)) {
    //Stringify login object and store in Local Storage (LS)
    let login = makeLoginObject(true, email);
    localStorage.setItem("credentials", JSON.stringify(login));

    //Redirect to index
    window.location.href = "index.html";
  } else {
    alert("Check your credentials");
  }
}
