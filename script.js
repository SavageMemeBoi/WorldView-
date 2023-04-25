

//Canvas are implemented with Fabric, which is an external library included as a seperate script

let JeepCherokee = {
  model: "Jeep Cherokee",
  image: "jeepcherokee.jpeg",
  type: "Economy",
  cost: 29.99,
  rating: 8.5,
  id: "c1",
};
let TeslaX = {
  model: "Tesla Model X",
  image: "teslax.jpeg",
  type: "Luxury",
  cost: 49.99,
  rating: 9.1,
  id: "c2",
};
let ToyotaCamry = {
  model: "Toyota Camry",
  image: "toyotacam.jpeg",
  type: "Economy",
  cost: 29.99,
  rating: 7.9,
  id: "c3",
};
let LamboAventador = {
  model: "Lamborghini Aventador",
  image: "lamboavent.jpeg",
  type: "Luxury",
  cost: 69.99,
  rating: 10,
  id: "c4",
};
let HondaOdyssey = {
  model: "Honda Odyssey",
  image: "hondaods.jpeg",
  type: "Economy",
  cost: 29.99,
  rating: 8.3,
  id: "c5",
};
let Porsche911 = {
  model: "Porsche 911",
  image: "porsche911.jpeg",
  type: "Luxury",
  cost: 49.99,
  rating: 9.5,
  id: "c6",
};
let LexusNX = {
  model: "Lexus NX",
  image: "lexusnx90.jpeg",
  type: "Economy",
  cost: 29.99,
  rating: 8.7,
  id: "c7",
};
let DodgeCharger = {
  model: "Dodge Charger",
  image: "dodgecharger.jpeg",
  type: "Luxury",
  cost: 49.99,
  rating: 9.3,
  id: "c8",
};
let VolvoXC90 = {
  model: "Volvo XC90",
  image: "volvoxc90.jpeg",
  type: "Economy",
  cost: 29.99,
  rating: 8.4,
  id: "c9",
};
let FordMustang = {
  model: "Ford Mustang",
  image: "fordmustang.jpeg",
  type: "Luxury",
  cost: 49.99,
  rating: 9.2,
  id: "c10",
};
// Objects to represent each car

var cart = new Set();
//Cart is a set to prevent duplicates

let idList = {
  c1: JeepCherokee,
  c2: TeslaX,
  c3: ToyotaCamry,
  c4: LamboAventador,
  c5: HondaOdyssey,
  c6: Porsche911,
  c7: LexusNX,
  c8: DodgeCharger,
  c9: VolvoXC90,
  c10: FordMustang,
};

let catIdList = {
  c100: JeepCherokee,
  c21: TeslaX,
  c32: ToyotaCamry,
  c43: LamboAventador,
  c54: HondaOdyssey,
  c65: Porsche911,
  c76: LexusNX,
  c87: DodgeCharger,
  c98: VolvoXC90,
  c109: FordMustang,
};

let revCatIdList = {
  JeepCherokee: "c100",
  TeslaX: "c21",
  ToyotaCamry: "c32",
  LamboAventador: "c43",
  HondaOdyssey: "c54",
  Porsche911: "c65",
  LexusNX: "c76",
  DodgeCharger: "c87",
  VolvoXC90: "c98",
  FordMustang: "c109",
};

let carIdList = {
  c1: "c100",
  c2: "c21",
  c3: "c32",
  c4: "c43",
  c5: "c54",
  c6: "c65",
  c7: "c76",
  c8: "c87",
  c9: "c98",
  c10: "c109",
};

let delMap = {};

let imgMap = {
  c1: "jeepcherokee.jpeg",
  c2: "teslax.jpeg",
  c3: "toyotacam.jpeg",
  c4: "lamboavent.jpeg",
  c5: "hondaods.jpeg",
  c6: "porsche911.jpeg",
  c7: "lexusnx90.jpeg",
  c8: "dodgecharger.jpeg",
  c9: "volvoxc90.jpeg",
  c10: "fordmustang.jpeg",
};

// Dictionaries (Key-Value Pairs) for linking elements together for iteration

let teslaImage = document.getElementById("hImag");
//homepage img

for (let i = 0; i < document.getElementsByClassName("home").length; i++) {
  document
    .getElementsByClassName("home")
    [i].addEventListener("click", function () {
      location.href = "index.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("cat").length; i++) {
  document
    .getElementsByClassName("cat")
    [i].addEventListener("click", function () {
      let newCart = [];
      let cartArr = Array.from(cart);

      for (let j = 0; j < cartArr.length; j++) {
        let obj = JSON.stringify(cartArr[j]);
        newCart.push(obj);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));

      location.href = "catalog.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("shop").length; i++) {
  document
    .getElementsByClassName("shop")
    [i].addEventListener("click", function () {
      let newCart = [];
      let cartArr = Array.from(cart);

      for (let j = 0; j < cartArr.length; j++) {
        let obj = JSON.stringify(cartArr[j]);
        newCart.push(obj);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      location.href = "shop.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("login").length; i++) {
  document
    .getElementsByClassName("login")
    [i].addEventListener("click", function () {
      location.href = "login.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("secret").length; i++) {
  document
    .getElementsByClassName("secret")
    [i].addEventListener("click", function () {
      if (JSON.parse(localStorage.getItem("isLogged"))) {
        location.href = "secret.html";
      }
    });
}
//Adding page redirects for navbar and other page buttons

function carCartAdd() {
  for (
    let i = 0;
    i < document.getElementsByClassName("carButton").length;
    i++
  ) {
    document
      .getElementsByClassName("carButton")
      [i].addEventListener("click", function () {
        let chosenCar =
          idList[document.getElementsByClassName("carButton")[i].id];
        cart.add(chosenCar);
        document.getElementsByClassName("carButton")[i].value = "Added to Cart";
        document.getElementsByClassName("carButton")[i].style.backgroundColor =
          "rgb(230, 225, 180)";
        document.getElementsByClassName("carButton")[i].style.border =
          "2px solid black";
        document.getElementById(
          carIdList[document.getElementsByClassName("carButton")[i].id]
        ).style.backgroundColor = "rgb(127, 255, 176)";
        carCartAnimation(
          imgMap[document.getElementsByClassName("carButton")[i].id]
        );
      });
  }
}
carCartAdd();
//Adding Cars to Cart

if (window.location.href.match("index.html") != null) {
  window.addEventListener("load", homePageAnimations);
} else if (window.location.href.match("catalog.html") != null) {
  window.addEventListener("load", catalogPageAnimations);

  for (let i = 0; i < document.getElementsByClassName("dropOp").length; i++) {
    document
      .getElementsByClassName("dropOp")
      [i].addEventListener("click", function () {
        for (
          let j = 0;
          j < document.getElementsByClassName("dropOp").length;
          j++
        ) {
          document
            .getElementsByClassName("dropOp")
            [j].classList.remove("selected");
        }

        document
          .getElementsByClassName("dropOp")
          [i].classList.toggle("selected");
        sorting(document.getElementsByClassName("dropOp")[i].id);
      });
  }
} else if (window.location.href.match("shop.html") != null) {
  window.addEventListener("load", checkoutPageAnimations);
  document.getElementById("checkout").addEventListener("click", checkoutCart);
  setInterval(function () {
    document.getElementById("legendTitle").style.border =
      "10px solid " + randomColor();
    document.getElementById("legendTitle").style.transitionDuration = "400ms";
  }, 400);
  document.getElementById("formSubmit").addEventListener("click", invoiceLoad);
  document.getElementById("days").addEventListener("change", costCalc);
  document.getElementById("coupons").addEventListener("change", couponChecker);
  document.getElementById("reset").addEventListener("click", function () {
    myCanvas.clear();
  });
} else if (window.location.href.match("invoice.html") != null) {
  window.addEventListener("load", invoicePageAnimations);
} else if (window.location.href.match("login.html") != null) {
  window.addEventListener("load", loginPageAnimations);
  setInterval(function () {
    document.getElementById("lStyle2").style.border =
      "10px solid " + randomColor();
    document.getElementById("lStyle2").style.transitionDuration = "400ms";
  }, 400);
} else {
}
//Intro animations for pages upon loading in

window.addEventListener("beforeunload", function () {
  let newCart = [];
  let cartArr = Array.from(cart);

  for (let j = 0; j < cartArr.length; j++) {
    let obj = JSON.stringify(cartArr[j]);
    newCart.push(obj);
  }

  localStorage.setItem("cart", JSON.stringify(newCart));
});
// Saving Cart on reload (safety precaution, probably doesn't work as intended but :D)

function navBarAnimations(id) {
  let currentImageHeight = -70;

  let navbarAnimation = setInterval(function () {
    if (currentImageHeight < 5) {
      document.getElementById(id).style.top = currentImageHeight + "px";
      currentImageHeight += 1;
    } else {
      clearInterval(navbarAnimation);
    }
  }, 10);
  document.getElementById(id).classList.add("fadeIn");
}
//Animates the navbar dropping

function homePageAnimations() {
  let currentImageHeight = 40;
  let currentTitleHeight = 0;

  let homePageAnimation = setInterval(function () {
    if (currentImageHeight < 600) {
      teslaImage.style.height = currentImageHeight + "px";
      currentImageHeight += 4;
    } else if (currentImageHeight >= 600 && currentImageHeight < 700) {
      teslaImage.style.height = currentImageHeight + "px";
      currentImageHeight += 1;
    } else {
      clearInterval(homePageAnimation);
    }
  }, 7);

  let titleAnimation = setInterval(function () {
    if (currentTitleHeight < 100) {
      document.getElementById("imsacars").style.paddingTop =
        currentTitleHeight + "px";
      currentTitleHeight += 0.50;
    } else {
      clearInterval(titleAnimation);
    }
  }, 7);
  navBarAnimations("hnav");

  if (JSON.parse(localStorage.getItem("isLogged"))) {
    console.log("Logged in!");

    let fancyCar = JSON.parse(localStorage.getItem("fancy"));
    document.getElementById("fancyCarDisplay").innerHTML += fancyCar.model;
    document.getElementById("fancyCarDisplay").classList.remove("hidden");

    let cheapCar = JSON.parse(localStorage.getItem("cheap"));
    document.getElementById("cheapCarDisplay").innerHTML += cheapCar.model;
    document.getElementById("cheapCarDisplay").classList.remove("hidden");

    let avgCost = JSON.parse(localStorage.getItem("avgCost"));
    document.getElementById("avgPriceDisplay").innerHTML += avgCost;
    document.getElementById("avgPriceDisplay").classList.remove("hidden");
  }
}
//Animates the background image, color of the IMSA CARS, and checks login status

function catalogPageAnimations() {
  navBarAnimations("cnav");

  let num = 0;

  document.getElementById("sortBut").addEventListener("click", function () {
    if (num % 2 == 0) {
      document.getElementById("dcontent").classList.remove("slideB");
      document.getElementById("dcontent").style.display = "block";
      console.log("appe");
    } else {
      document.getElementById("dcontent").classList.add("slideB");
      console.log("disp");
      setTimeout(function () {
        document.getElementById("dcontent").style.display = "none";
      }, 600);
    }

    num++;
  });

  let c = [
    JeepCherokee,
    TeslaX,
    ToyotaCamry,
    LamboAventador,
    HondaOdyssey,
    Porsche911,
    LexusNX,
    DodgeCharger,
    VolvoXC90,
    FordMustang,
  ];

  let cars = [];

  for (let i = 0; i < c.length; i++) {
    cars[i] = JSON.stringify(c[i]);
  }

  cart = JSON.parse(localStorage.getItem("cart"));
  let cartArr = Array.from(cart);
  console.log(cartArr);

  for (let i = 0; i < cartArr.length; i++) {
    cartArr[i] = JSON.parse(cartArr[i]);

    for (let j = 0; j < cars.length; j++) {
      let carListedCar = cars[j];
      let stringCartItem = JSON.stringify(cartArr[i]);

      if (carListedCar === stringCartItem) {
        document.getElementById(c[cars.indexOf(stringCartItem)].id).value =
          "Unavaliable (In Cart)";
        document
          .getElementById(c[cars.indexOf(stringCartItem)].id)
          .classList.toggle("butDisabled");
        document
          .getElementById(carIdList[c[cars.indexOf(stringCartItem)].id])
          .classList.toggle("carDisabled");
        document.getElementById(
          c[cars.indexOf(stringCartItem)].id
        ).disabled = true;
      }
    }
  }
  cart = new Set(cartArr);
  console.log(cart);

  localStorage.removeItem("cart");

  disabledCars = [];

  for (let i = 0; i < cars.length; i++) {
    let carObj = JSON.parse(cars[i]);

    if (carObj.type === "Economy") {
      if (Math.random() > 0.9) {
        document.getElementById(carObj.id).value = "Unavaliable";
        document.getElementById(carObj.id).classList.toggle("butDisabled");
        document
          .getElementById(carIdList[carObj.id])
          .classList.toggle("carDisabled");

        disabledCars.push(idList[carObj.id]);
        document.getElementById(carObj.id).disabled = true;
      }
    } else if (carObj.type === "Luxury") {
      if (carObj.id === "c4") {
        if (Math.random() > 0.35) {
          document.getElementById(carObj.id).value = "Unavaliable";
          document.getElementById(carObj.id).classList.toggle("butDisabled");
          document
            .getElementById(carIdList[carObj.id])
            .classList.toggle("carDisabled");
          disabledCars.push(idList["c4"]);
          document.getElementById("c4").disabled = true;
        }
      } else {
        if (Math.random() > 0.85) {
          document.getElementById(carObj.id).value = "Unavaliable";
          document.getElementById(carObj.id).classList.toggle("butDisabled");
          document
            .getElementById(carIdList[carObj.id])
            .classList.toggle("carDisabled");
          disabledCars.push(idList[carObj.id]);
          document.getElementById(carObj.id).disabled = true;
        }
      }
    }
  }

  if (localStorage.getItem("flag")) {
    localStorage.setItem("flag", false);
    localStorage.removeItem("flag");

    document.getElementById("rhl").click();
    document.getElementById("rlh").click();
    for (let i = 0; i < disabledCars.length; i++) {
      if (disabledCars[i] == c[i]) {
        c.splice(c.indexOf(disabledCars[i]), 1);
        i--;
      }
    }
    let sumCost = 0;
    for (let i = 0; i < c.length; i++) {
      sumCost += c[i].cost;
    }
    localStorage.setItem("avgCost", (sumCost / c.length).toFixed(2));
    location.href = "index.html";
  }
}
//Adds the sorting function, determines which cars are avaliable, either by random choice or if it is already in cart

function checkoutPageAnimations() {
  navBarAnimations("snav");

  let cartPage = document.getElementById("cList");
  cart = JSON.parse(localStorage.getItem("cart"));
  let cartArr = Array.from(cart);
  for (let i = 0; i < cartArr.length; i++) {
    cartArr[i] = JSON.parse(cartArr[i]);
  }
  cart = new Set(cartArr);
  let cost = 0;
  localStorage.removeItem("cart");

  for (let i = 0; i < cart.size; i++) {
    let newCartEntry =
      "<div class='cartEntry' id='cartEntry" +
      i +
      "'> <img class='cartImg' src=" +
      cartArr[i].image +
      "> <p class='cartDesc'> " +
      cartArr[i].model +
      "</p> <p class='cartDesc'>" +
      cartArr[i].type +
      "</p> <p class='cartDesc'>$" +
      cartArr[i].cost +
      "</p> <button class='removeBut' id='delButton" +
      i +
      "'></button> </div>";
    cartPage.innerHTML += newCartEntry;

    cost += cartArr[i].cost;
    delMap["delButton" + i] = cartArr[i].id;
  }

  for (let i = 0; i < cart.size; i++) {
    document
      .getElementById("delButton" + i)
      .addEventListener("click", function () {
        let cartArr = Array.from(cart);

        for (let i = 0; i < cartArr.length; i++) {
          cartArr[i] = JSON.stringify(cartArr[i]);
          console.log(cartArr[i]);
        }

        let cartItem =
          cartArr[
            cartArr.indexOf(JSON.stringify(idList[delMap["delButton" + i]]))
          ];
        console.log(JSON.stringify(idList[delMap["delButton" + i]]));
        let deduction = JSON.parse(cartItem).cost;

        document.getElementById("cartEntry" + i).classList.add("hidden");

        cost -= deduction;
        localStorage.setItem("cost", cost);

        cartArr.splice(cartArr.indexOf(cartItem), 1);

        for (let i = 0; i < cartArr.length; i++) {
          cartArr[i] = JSON.parse(cartArr[i]);
        }
        if (cartArr.length < 1) {
          document.getElementById("checkoutMenuForm").classList.add("hidden");
        }

        cart = new Set(cartArr);

        costCalc();
      });
  }

  document.getElementById("cost").innerHTML += cost.toFixed(2) + " per day";
  localStorage.setItem("cost", cost.toFixed(2));
}
//Renders cart into a list, adds remove from cart functionality, and loads invoice form

function invoicePageAnimations() {
  navBarAnimations("inav");
  backgroundAnimations();

  let invoiceString =
    "<p class='invoiceData'>A loyal customer of IMSA Cars, " +
    localStorage.getItem("name") +
    ", purchased a <br> ";

  let rawCartArr = Array.from(JSON.parse(localStorage.getItem("cart")));

  for (let i = 0; i < rawCartArr.length; i++) {
    rawCartArr[i] = JSON.parse(rawCartArr[i]);
    invoiceString += "*** " + rawCartArr[i].model + "<br>";
  }
  invoiceString +=
    "These cars will be rented for " +
    localStorage.getItem("days") +
    " days for a grand total of $" +
    (localStorage.getItem("cost") * localStorage.getItem("days")).toFixed(2) +
    "<br> Email: " +
    localStorage.getItem("email") +
    "<br> Phone Number: " +
    localStorage.getItem("pnum") +
    "<br> Credit Card Number: " +
    localStorage.getItem("cardnum") +
    "<br> Proof of Purchase: <br> <img class='signatureInvoice' src='" +
    localStorage.getItem("signature") +
    "'> <br> Thank you very much for your purchase, we hope to see you again! </p>";

  document.getElementById("invoice").innerHTML = invoiceString;
}
//Creates the invoice based on form data saved in localStorage

function loginPageAnimations() {
  navBarAnimations("lnav");

  document.getElementById("loginSubmit").addEventListener("click", function () {
    console.log("clicked!");

    localStorage.setItem("isLogged", true);
    document.getElementById("myModal").innerHTML =
      "<div class='modal-content'> Login Successful! Please click off to continue your shopping experience! </div> <button class='close'>&times;</button> </div>";

    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
      localStorage.setItem("flag", true);
      location.href = "catalog.html";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        localStorage.setItem("flag", true);
        location.href = "catalog.html";
      }
    };
  });
}
//Loads the modal for the login

function secretPageAnimations() {
  navBarAnimations("snav");

  let offset = -70;

  setInterval(function () {
    document.getElementById("weeb").style.backgroundPosition =
      offset + "px " + (-500 + offset) + "px";
    document.getElementById("weeb2").style.transform =
      "rotate(" + offset + "deg)";
    document.getElementById("weeb3").style.transform =
      "rotate(" + -offset + "deg)";
    document.getElementById("weeb4").style.transform =
      "rotate(" + 2 * offset + "deg)";
    offset += 20;
  }, 20);
}
//Animations for spinning pics and background

function backgroundAnimations() {
  let offset = -70;

  setInterval(function () {
    document.getElementById("iHead").style.backgroundPosition =
      offset + "px -500px";
    offset += 10;
  }, 20);
}
//Background animation for car on invoice page

function randomColor() {
  var col =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  return col;
}
//Generates random color for title animation

function checkoutCart() {
  if (!cart.size == 0) {
    document.getElementById("checkoutMenuForm").classList.remove("hidden");
  }
}
//Reveals form if there are items in cart

function invoiceLoad() {
  console.log("form was submitted");

  let canvas = document.getElementById("sig");

  let signature = canvas.toDataURL();

  localStorage.setItem("signature", signature);

  let name =
    document.getElementById("fname").value +
    " " +
    document.getElementById("lname").value;

  localStorage.setItem("name", name);

  let email = document.getElementById("email").value;

  localStorage.setItem("email", email);

  let pnum = document.getElementById("pnum").value;

  localStorage.setItem("pnum", pnum);

  let cardnum = document.getElementById("cardnum").value;

  localStorage.setItem("cardnum", cardnum);

  let newCart = [];

  let cartArr = Array.from(cart);

  for (let j = 0; j < cartArr.length; j++) {
    let obj = JSON.stringify(cartArr[j]);
    newCart.push(obj);
  }

  console.log("cart before invoice" + cartArr);

  localStorage.setItem("cart", JSON.stringify(newCart));
  localStorage.setItem("days", document.getElementById("days").value);
  location.href = "invoice.html";
}
//Form Submission data saving

function costCalc() {
  let days = document.getElementById("days").value;
  let cost = parseFloat(localStorage.getItem("cost"));
  document.getElementById("cost").innerHTML =
    "Total Cost: $" + (days * cost).toFixed(2) + " for " + days + " days";
  localStorage.setItem("cost", cost);
}
//Updates total cost during checkout

function couponChecker() {
  let coupons = [
    "wergf",
    "hypi",
    "weeb22",
    "imsacars",
    "save20",
    "notlateatall",
  ];

  let ogCost = JSON.parse(localStorage.getItem("cost"));

  if (coupons.includes(document.getElementById("coupons").value)) {
    localStorage.setItem("cost", ogCost * 0.9);
    document.getElementById("coupons").style.border =
      "5px solid rgb(140, 255, 184)";
    costCalc();
    document.getElementById("discountSpan").classList.add("fadeInQ");
    document.getElementById("discountSpan").style.display = "block";
    document.getElementById("discountSpan").innerHTML =
      "Coupon Code Detected, 10% Discount applied!!!!";
    document.getElementById("coupons").disabled = true;
  } else {
    localStorage.setItem("cost", ogCost);
    costCalc();
    document.getElementById("coupons").style.border = "1px solid black";
    document.getElementById("discountSpan").style.display = "none";
  }
}
//Validates coupon codes and gives discount

function carCartAnimation(img) {
  document.getElementById("cani").src = img;
  document.getElementById("cani").classList.remove("hidden");

  let offset = 0;

  let anim = setInterval(function () {
    document.getElementById("cani").style.left = offset + "px";
    document.getElementById("cani").style.boxShadow =
      "10px 10px 69px 21px " + randomColor();
    document.getElementById("cani").style.top = window.scrollY + 150 + "px";

    document.getElementById("cani").style.transform =
      "rotate(" + offset * 0.5 + "deg)";
    offset += 10;

    if (offset >= 2300) {
      document.getElementById("cani").left = 0;
      clearInterval(anim);
    }
  }, 15);
}
//Does the Spinning Car Animation when adding to cart

function sorting(id) {
  console.log("clicked");

  function rlh(a, b) {
    if (a.rating < b.rating) {
      return -1;
    }
    if (a.rating > b.rating) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  function rhl(a, b) {
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  function tel(a, b) {
    return a.type.localeCompare(b.type);
  }

  function tle(a, b) {
    return -1 * a.type.localeCompare(b.type);
  }

  function clh(a, b) {
    if (a.cost < b.cost) {
      return -1;
    }
    if (a.cost > b.cost) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  function chl(a, b) {
    if (a.cost > b.cost) {
      return -1;
    }
    if (a.cost < b.cost) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  let currentOrder;
  let objects;
  let newCatOrder;

  switch (id) {
    case "rlh":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(rlh);
      localStorage.setItem("cheap", JSON.stringify(objects[0]));

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;

    case "rhl":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(rhl);

      localStorage.setItem("fancy", JSON.stringify(objects[0]));

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;

    case "tel":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(tel);

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;

    case "tle":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(tle);

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;
    case "clh":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(clh);

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;
    case "chl":
      currentOrder = Array.from(document.getElementById("catDisplay").children);
      objects = [];
      for (let i = 0; i < currentOrder.length; i++) {
        objects[i] = catIdList[currentOrder[i].id];
      }
      objects.sort(chl);

      newCatOrder = "";

      for (let i = 0; i < currentOrder.length; i++) {
        newCatOrder += document.getElementById(
          carIdList[objects[i].id]
        ).outerHTML;
      }
      document.getElementById("catDisplay").innerHTML = newCatOrder;
      break;
  }
  carCartAdd();
}
//Sorts Catalog based on option picked
