//Buttons and Displays
///////////////////////////////////////////////////////////
var getMoney = setInterval(getMoney, 100);
var getBet = setInterval(getBet, 50);
var getLevel = setInterval(getLevel, 100);

var winBanner = document.getElementById("winLine");

function getMoney() {
    var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
  spinButton = false;
}

function getBet() {
  if (money < 40) {
    bet = money/4;
  }
  document.getElementById("betAmount").innerHTML = "$" + (bet * 4);
  }

var bet = 1;
var increaseButton = document.getElementById("plusBet");
increaseButton.addEventListener("click", increaseBet);

function increaseBet() {
  if (bet < 10) {
  bet += 1;
  }
}

var decreaseButton = document.getElementById("minusBet");
decreaseButton.addEventListener("click", decreaseBet);

function decreaseBet() {
  if (bet > 1) {
    bet -= 1;
  }
}

var maximumBet = document.getElementById("maxBet");
maxBet.addEventListener("click", maxTheBet);

function maxTheBet() {
  while(bet < 10) {
    bet += 1;
  }
}

var minimumBet = document.getElementById("minBet");
minimumBet.addEventListener("click", minTheBet);

function minTheBet() {
  while(bet > 1) {
    bet -= 1;
  }
}

//money and level system
////////////////////////////////////////////////////////////


var money = 400;
var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
var level = 1;

function getLevel() {
var theLevel = document.getElementById("level").innerHTML = level;
}

//Reel Spin System
///////////////////////////////////////////////////////////

var spinButton = document.getElementById("spin");
spinButton.addEventListener("click", startGame);

function spinTheReels() {

  if (money > 500 && money <1000) {
  level = 2;
var theLevel = document.getElementById("level").innerHTML = level;
} else if (money >= 1000 && money <3000) {
  level = 3;
var theLevel = document.getElementById("level").innerHTML = level;
} else if (money >= 10000) {
  level = 4;
var theLevel = document.getElementById("level").innerHTML = level;
} else {
    level = 1;
  }

   reel1.style.backgroundColor = null;
   reel2.style.backgroundColor = null;
   reel3.style.backgroundColor = null;
   reel4.style.backgroundColor = null;
   reel5.style.backgroundColor = null;

winBanner.style.zIndex="0";

var loseArray = ["-660", "-457.5", "-50", "-85", "-135", "-170", "-220", "-595", "-105", "-505", "-50", "-25", "-255", "-510", "-510", "-510", "-457.5", "-457.5", "-215", "-95", "-315", "-75", "-145", "-140", "-640", "-235", "-230", "-85"]

//Spin The Reels - Where will the reels land?
var resultArray = [ "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "fullDiamonds", "fullDollarSign", "line1Toilet", "line2Poop", "line3Bags", "line4Angry", "lose",  "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "lose", "line1Toilet", "line1Toilet", "line3Bags", "line3Bags", "line4Angry", "lose" ]
var randResult = resultArray[Math.floor(Math.random()*resultArray.length)];

 switch (randResult) {
   case "fullDollarSign":
     rand1 = -660;
     rand2 = -660;
     rand3 = -660;
     rand4 = -660;
     rand5 = -660;
     break;
   case "fullDiamonds":
     rand1 = -457.5;
     rand2 = -457.5;
     rand3 = -457.5;
     rand4 = -457.5;
     rand5 = -457.5;
     var winResult = "fullDiamonds";
     break;
   case "line1Toilet":
     rand1 = -50;
     rand2 = -85;
     rand3 = -135;
     rand4 = -170;
     rand5 = -220;
     break;
   case "line2Poop":
     rand1 = -220;
     rand2 = -255;
     rand3 = -305;
     rand4 = -355;
     rand5 = -390;
     break;
   case "line3Bags":
     rand1 = -390;
     rand2 = -595;
     rand3 = -50;
     rand4 = -510;
     rand5 = -560;
     break;
   case "line4Angry":
     rand1 = -85;
     rand2 = -390;
     rand3 = -48.5;
     rand4 = -85;
     rand5 = -85;
     break;
   case "lose":
     rand1 = Math.floor(Math.random()*-700);
     rand2 = Math.floor(Math.random()*-700);
     rand3 = Math.floor(Math.random()*-700);
     rand4 = Math.floor(Math.random()*-700);
     rand5 = Math.floor(Math.random()*-700);
     break;
   default:
     rand1 = -5;
     rand2 = -10;
     rand3 = -15;
     rand4 = -20;
     rand5 = -25;
     break;
     }

  rand1;
  rand2;
  rand3;
  rand4;
  rand5;

  setTimeout(function bannerDisplay() {

    var countUpInt = setInterval(CountUp, 100);

    switch (randResult) {
      case "fullDollarSign":
        winBanner.style.zIndex="2";
        winBanner.innerHTML="💲WIN💲 $" + (100*bet);
        reel1.style.backgroundColor = "green";
        reel2.style.backgroundColor = "green";
        reel3.style.backgroundColor = "green";
        reel4.style.backgroundColor = "green";
        reel5.style.backgroundColor = "green";
        money += (50*bet);
        function CountUp() {
          while (money < (money + (100*bet))) {
            money++;
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
          }
        }
        break;
      case "fullDiamonds":
        winBanner.style.zIndex="2";
        winBanner.innerHTML="💎JACKPOT💎 Win $" + (200*bet);
        reel1.style.backgroundColor = "white";
        reel2.style.backgroundColor = "white";
        reel3.style.backgroundColor = "white";
        reel4.style.backgroundColor = "white";
        reel5.style.backgroundColor = "white";
        money += (200*bet);
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
        break;
      case "line1Toilet":
        winBanner.style.zIndex="2";
        winBanner.style.backgroundColor="white";
        winBanner.innerHTML="🚽WHAT STINKS?🚽 $" + (15*bet);
        money += (15*bet);
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
        break;
      case "line2Poop":
        winBanner.style.zIndex="2";
        winBanner.style.backgroundColor="brown";
        winBanner.innerHTML="💩CRAP!💩 $" + (5*bet);
        money += (5*bet);
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
        break;
      case "line3Bags":
        winBanner.style.zIndex="2";
        winBanner.style.backgroundColor="tan";
        winBanner.innerHTML="💰Bag it!💰 $" + (20*bet);
        money += (20*bet);
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
        break;
      case "line4Angry":
        winBanner.style.zIndex="2";
        winBanner.style.backgroundColor="black";
        winBanner.innerHTML="👿Watch Out!👿 $" + (40*bet);
        money += (40*bet);
        var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;
        break;
      default:
        winBanner.style.zIndex="0";

    }
  }, 1000);

  //Spin The Reels - How do they spin??
  //////////////////////////////////////////////////////////////////

  var spinner1 = document.getElementById("reel1");
  var spinner2 = document.getElementById("reel2");
  var spinner3 = document.getElementById("reel3");
  var spinner4 = document.getElementById("reel4");
  var spinner5 = document.getElementById("reel5");
  var pos1 = -10;
  var pos2 = -5;
  var pos3 = -25;
  var pos4 = -35;
  var pos5 = -15;

  var id1 = setInterval(row1,1);
  var id2 = setInterval(row2,1);
  var id3 = setInterval(row3,1);
  var id4 = setInterval(row4,1);
  var id5 = setInterval(row5,1);

  //It costs money to spin!
  money -= (bet * 4);
  var moneyDisplay = document.getElementById("totalMoney").innerHTML= "$" + money;

 function row1() {
    if (pos1 <= rand1) {
      clearInterval(id1);
    } else {
      pos1-= 5;
      spinner1.style.top = pos1 + "vh";
      }
    }

  function row2() {
    setTimeout (function row2time() {
    if (pos2 <= rand2) {
      clearInterval(id2);
    } else {
      pos2-= 5;
      spinner2.style.top = pos2 + "vh";
      }
    }, 20);
    }

  function row3() {
    setTimeout (function row3time() {if (pos3 <= rand3) {
      clearInterval(id3);
    } else {
      pos3-= 5;
      spinner3.style.top = pos3 + "vh";
      }
     }, 40);
    }

  function row4() {
    setTimeout ( function row4time() {
      if (pos4 <= rand4) {
      clearInterval(id4);
    } else {
      pos4-= 5;
      spinner4.style.top = pos4 + "vh";
      }
    }, 60);
    }

  function row5() {
    setTimeout (
      function row5time() {
        if (pos5 <= rand5) {
      clearInterval(id5);
    } else {
      pos5-= 5;
      spinner5.style.top = pos5 + "vh";
      }
        }, 80);
    }
  }
//Reel Spin System - Win System
//////////////////////////////////////////////////////////////////////////

function startGame() {
if (money > 0 && money < 5000) {
spinTheReels();
} else if (money >= 5000) {
  alert("OVER $5,000!? You've put those Rafael's back in line! You're truly a master. Now go get some fresh air.")
  money = 1000000000;
}
  else {
    winBanner.style.zIndex = "2";
    winBanner.style.top = "40vh";
    winBanner.innerHTML = "You're Broke! Refresh the page to try again!";
    winBanner.style.height = "32vh";
  }
}
