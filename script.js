
let JeepCherokee = {
  model: "NYTimes",
  image: "nytimes.png",
  type: "Current",
  cost: 0.5,
  rating: 5,
  id: "c1",
};
let TeslaX = {
  model: "Fox",
  image: "fox.png",
  type: "Current",
  cost: -1,
  rating: 6,
  id: "c2",
};
let ToyotaCamry = {
  model: "CNN",
  image: "cnn'.png",
  type: "Economy",
  cost: 1,
  rating: 2,
  id: "c3",
};
let LamboAventador = {
  model: "NBC",
  image: "nbc.png",
  type: "Politics",
  cost: 0.9,
  rating: 3,
  id: "c4",
};
let HondaOdyssey = {
  model: "AP",
  image: "ap.png",
  type: "Current",
  cost: 0.1,
  rating: 7,
  id: "c5",
};
let Porsche911 = {
  model: "NPR",
  image: "npr.png",
  type: "Science",
  cost: 1,
  rating: 10,
  id: "c6",
};
let LexusNX = {
  model: "Vox",
  image: "vox.png",
  type: "Politics",
  cost: 0.4,
  rating: 4,
  id: "c7",
};
let DodgeCharger = {
  model: "The Guardian",
  image: "guard.png",
  type: "Tech",
  cost: 0.8,
  rating: 9,
  id: "c8",
};
let VolvoXC90 = {
  model: "ABC",
  image: "abc.png",
  type: "Current",
  cost: 0.6,
  rating: 8,
  id: "c9",
};
let FordMustang = {
  model: "PBS",
  image: "pbs.png",
  type: "Current",
  cost: -0.2,
  rating: 1,
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
  c1: "nytimes.png",
  c2: "fox.png",
  c3: "cnn'.png",
  c4: "nbc.png",
  c5: "ap.png",
  c6: "npr.png",
  c7: "vox.png",
  c8: "guard.png",
  c9: "abc.png",
  c10: "pbs.png",
};

let linkMap = {
  c1: "https://www.nytimes.com/live/2023/01/20/us/biden-2024-president-election-news",
  c2: "https://www.foxnews.com/politics/washington-governor-signs-big-gun-control-package-including-assault-weapons-ban-no-one-needs-ar-15",
  c3: "https://www.cnn.com/2023/04/25/business/bed-bath-beyond-share-repurchases/index.html",
  c4: "https://www.nbcnews.com/news/world/south-korea-yoon-suk-yeol-biden-us-rcna81279",
  c5: "https://apnews.com/article/taliban-isis-abbey-gate-afghanistan-bombing-9a9cb492bb1352a615af8815e715b17a?utm_source=homepage&utm_medium=TopNews&utm_campaign=position_01",
  c6: "https://www.npr.org/2023/04/21/1170986221/californias-destructively-wet-winter-has-a-bright-side-youll-want-to-see-it",
  c7: "https://www.vox.com/technology/2023/4/25/23698083/tucker-carlson-fired-theory-fox-news-peter-kafka-media-column",
  c8: "https://www.theguardian.com/society/2023/apr/25/barbie-doll-with-downs-syndrome-launched-by-mattel",
  c9: "https://abcnews.go.com/GMA/Culture/harry-belafonte-actor-pioneering-calypso-singer-dies-96/story?id=98827996",
  c10: "https://www.pbs.org/newshour/show/hundreds-of-thousands-flee-sudan-as-humanitarian-situation-deteriorates-amid-violence",
};

// Dictionaries (Key-Value Pairs) for linking elements together for iteration

let teslaImage = document.getElementById("hImag");
//homepage img

for (let i = 0; i < document.getElementsByClassName("home").length; i++) {
  document.getElementsByClassName("home")[i].addEventListener("click", function () {
      location.href = "index.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("cat").length; i++) {
  document.getElementsByClassName("cat")[i].addEventListener("click", function () {
      location.href = "catalog.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("shop").length; i++) {
  document.getElementsByClassName("shop")[i].addEventListener("click", function () {
      location.href = "ai.html";
    });
}

for (let i = 0; i < document.getElementsByClassName("login").length; i++) {
  document
    .getElementsByClassName("login")
    [i].addEventListener("click", function () {
      location.href = "login.html";
    });
}


//Adding page redirects for navbar and other page buttons

function carCartAdd() {

  for (let i = 0; i < document.getElementsByClassName("carButton").length; i++) {
    document.getElementsByClassName("carButton")[i].addEventListener("click", function () {
        
        console.log("Clicked");
        location.href = linkMap[document.getElementsByClassName("carButton")[i].id];

      
      });
  }
}

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
  carCartAdd();
} else if (window.location.href.match("ai.html") != null) {
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
} else {}
//Intro animations for pages upon loading in

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
function checkoutPageAnimations() {
  navBarAnimations("snav");
}
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
    } else {
      document.getElementById("dcontent").classList.add("slideB");
      setTimeout(function () {
        document.getElementById("dcontent").style.display = "none";
      }, 600);
    }

    num++;
  });

}
//Adds the sorting function, determines which cars are avaliable, either by random choice or if it is already in cart

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
