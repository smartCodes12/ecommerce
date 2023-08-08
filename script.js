let logoutButton = document.getElementById("logoutButton");

// add event listener to logout button and clear local storage of user model and reducet to login page
logoutButton?.addEventListener("click", function () {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  window.location.href = "login.html";
});

const product_json = {
  items: [
    {
      id: 1,
      image: "img/products/n1.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
    },
    {
      id: 2,
      image: "img/products/n2.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 34,
    },
    {
      id: 3,
      image: "img/products/n3.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 345,
    },
    {
      id: 4,
      image: "img/products/n4.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
    },
    {
      id: 5,
      image: "img/products/n5.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
    },
    {
      id: 6,
      image: "img/products/n6.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
    },
    {
      id: 7,
      image: "img/products/n7.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
    },
    {
      id: 8,
      image: "img/products/n8.jpg",
      url: "sproduct.html",
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: "78",
    },
    {
      id: 9,
      brand: "adidas",
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/f1.jpg",
    },
    {
      brand: "adidas",
      id: 10,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp1.jpg",
    },
    {
      brand: "adidas",
      id: 11,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp2.jpg",
    },
    {
      brand: "adidas",
      id: 12,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp3.jpg",
    },
    {
      brand: "adidas",
      id: 13,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp4.jpg",
    },
    {
      brand: "adidas",
      id: 14,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp5.jpg",
    },
    {
      brand: "adidas",
      id: 15,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 78,
      image: "img/products/sp6.jpg",
    },
    {
      brand: "adidas",
      id: 16,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 780,
      image: "img/products/sp7.jpg",
    },
    {
      brand: "adidas",
      id: 17,
      name: "cartoon astronaut t-shirts",
      rating: 5,
      price: 780,
      image: "img/products/n6.jpg",
    },
  ],
};
// add product_json to local storage
localStorage.setItem("products_json", JSON.stringify(product_json));

if (
  localStorage.getItem("user") == null &&
  location.pathname != "/login.html" &&
  location.pathname != "/register.html"
) {
  window.location.href = "login.html";
}

// add event listener to loginForm
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
      email,
      password,
    };
    // call post request to localhost:3000/auth/login/ with email and password and get the repsonse also check sttaus 200

    fetch("http://localhost:3000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged in successfully") {
          localStorage.setItem("user", JSON.stringify(user));
          window.location.href = "index.html";
        } else {
          alert(data.message);
        }

        console.log(data);
        // localStorage.setItem('token', data.token);
      });
    // window.location.href = 'login.html';
  });
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var removeCartItemButtons = document.getElementsByClassName("btn-danger");
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
  });
}
