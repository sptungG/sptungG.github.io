/*
- Login/ Register / Logout
- Create Conservation / Invite / Remove
- Send Message
- Send File

+ Register: email
+ Password
+ Display Name/ Username
+ Confirm Password
+ Btn Submit
*/

import Register from "./register.js"

const container =  document.getElementById("app");
const register = new Register();
register.initRender(container);