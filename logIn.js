let body = document.body;

let inputGmailLogIn = document.querySelector(".emailLogIn");
inputGmailLogIn.value = "123";
let inputPasswordLogIn = document.querySelector(".passwordLogIn");
inputPasswordLogIn.value = "321";
let logInBtn = document.querySelector(".logInBtn");
let saveGmail = localStorage.getItem("gmailUsr");
let savePassword = localStorage.getItem("passwordUsr");
let pMsgLogIn = document.createElement("p");

let form = document.querySelector(".orderForm");
let divOrder = document.querySelector(".notification");

logInBtn.addEventListener("click", () => {
  if (
    inputGmailLogIn.value === saveGmail &&
    inputPasswordLogIn.value === savePassword
  ) {
    form.style.display = "block";
  } else if (!inputGmailLogIn.value || !inputPasswordLogIn.value) {
    pMsgLogIn.innerHTML = "Введите текст";
    pMsgLogIn.style.color = "red";
    body.append(pMsgLogIn);
  } else {
    pMsgLogIn.innerHTML = "не ок";
    pMsgLogIn.style.color = "red";
    body.append(pMsgLogIn);
  }
});

let address = document.querySelector(".address");
address.value = 1;
let price = document.querySelector(".price");
price.value = 2;
let cost = document.querySelector(".cost");
cost.value = 3;
let buttonOrder = document.querySelector(".buttonOrder");

let data = {
  address: address,
  price: price,
  cost: cost,
};

let btnObj = [
  {
    div: "div",
    divEl: "divBtnOrders",
    btns: "button",
    btnClass: "btn",
    ord1: "оплатить",
    ord2: "оплачен",
  },
  {
    btns: "button",
    btnClass: "btn",
    ord1: "отправить",
    ord2: "отправлен",
  },
  {
    btns: "button",
    btnClass: "btn",
    ord1: "принять",
    ord2: "принят",
  },
  {
    btns: "button",
    btnClass: "btn",
    ord1: "завершить",
    ord2: "завершон",
  },
];

function createsButton() {
  // if (!document.querySelector(".btn")) {
  //   btnObj.forEach(({  divEl, btns, btnClass, ord1 }) => {
  //     let divBtn = document.createElement("div");
  //     divBtn.classList.add(divEl);
  //     let btn = document.createElement(btns);
  //     btn.classList.add(btnClass);
  //     btn.innerHTML = ord1;
  //     divBtn.appendChild(btn);

  //     document.body.appendChild(divBtn);

  //     btn.addEventListener("click", function () {
  //       showNotification(`Заказ ${ord1}`);
  //     });
  //   });
  // }

  if (!document.querySelector(".btn")) {
    btnObj.forEach(({ divEl, btns, btnClass, ord1, ord2, div }) => {
      
      let divBtn = document.createElement(div);
      divBtn.classList.add(divEl);
      let btn = document.createElement(btns);
      btn.classList.add(btnClass);
      btn.innerHTML = ord1;
      divBtn.append(btn);

      body.appendChild(divBtn);

      btn.addEventListener("click", () => {
        showNotification(`заказ ${ord2}`);
      });
    });
  }
}

function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "objectOrder/json",
    },
    body: JSON.stringify(data),
  }).then(
    (response) => {
      if (response.status === 201) {
        divOrder.style.display = "block";
        divOrder.innerHTML = "Загрузка...";

        setTimeout(() => {
          divOrder.innerHTML = "Загрузка..";
        }, 1000);
        setTimeout(() => {
          divOrder.innerHTML = "Загрузка.";
        }, 2000);

        setTimeout(() => {
          divOrder.innerHTML = "Заказ создан!";
          divOrder.style.display = "block";
          createsButton();
        }, 3000);
      } else {
        alert("Произошла ошибка. Попробуйте еще раз.");
      }
    },
    (error) => {
      console.error("Ошибка:", error);
    }
  );
}

buttonOrder.addEventListener("click", (event) => {
  event.preventDefault();

  if (!address.value || !price.value || !cost.value) {
    pMsgLogIn.innerHTML = "Введите текст";
    pMsgLogIn.style.color = "red";
    pMsgLogIn.style.display = "block";
    form.append(pMsgLogIn);
  } else {
    fetchPost();
    pMsgLogIn.style.display = "none";
  }
});

function showNotification(message) {
  let notificationElement = document.createElement("div");
  notificationElement.classList.add("notification");
  notificationElement.classList.add("newNotification");
  notificationElement.innerHTML = message;
  document
    .getElementById("notificationsOrders")
    .appendChild(notificationElement);

  setTimeout(function () {
    notificationElement.remove();
  }, 1000);
}
