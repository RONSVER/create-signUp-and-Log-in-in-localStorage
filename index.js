let gmailUsr = document.querySelector(".email");
let passwordUsr = document.querySelector(".password");
let regBtn = document.querySelector(".regBtn");
let pMsg = document.createElement("p");

let body = document.body;

regBtn.addEventListener("click", () => {
  if (!gmailUsr.value || !passwordUsr.value) {
    pMsg.innerHTML = "Введите текст";
    pMsg.style.color = "red";
    body.append(pMsg);
  } else {
    regBtn.setAttribute("href", "logIn.html");
    localStorage.setItem("gmailUsr", gmailUsr.value);
    localStorage.setItem("passwordUsr", passwordUsr.value);
  }
});
