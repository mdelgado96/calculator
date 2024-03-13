let toggledark = false;
let togglelight = false;
let lastNum = "";

function entered(number) {
  // count for the number of decimal points
  let count = 0;

  // adds numbers to the screen
  const current = (document.getElementById("screen").firstChild.nodeValue +=
    number);

  // removes initial 0
  if (current.length < 3 && current[0] == "0") {
    document.getElementById("screen").firstChild.nodeValue -= "";
  }

  // counts number of decimal points
  for (let i = 0; i < current.length; i++) {
    if (current[i] == ".") {
      count++;
    }
  }

  // if extra decmila is added then resets number on screen
  if (count > 1) {
    document.getElementById("screen").firstChild.nodeValue = "0";
  }
}

// clears everything on the screen and previous number
function clearAll() {
  document.getElementById("screen").firstChild.nodeValue = "0";
  document.getElementById("last_num").innerText = "";
}

// only clears number currently on the screen
function clearCurrent() {
  console.log("click");
  document.getElementById("screen").firstChild.nodeValue = "0";
}

// adds operators to previous number to get ready for operation
function operator(op) {
  document.getElementById("screen").firstChild.nodeValue += " " + op;

  prevNum = document.getElementById("screen").firstChild.nodeValue;
  lastNum = document.getElementById("last_num").innerText += " " + `${prevNum}`;

  document.getElementById("screen").firstChild.nodeValue = "0";
}

// performs operation
function equals() {
  lastNum += document.getElementById("screen").firstChild.nodeValue;
  console.log(lastNum);

  lastNum = lastNum.replace(/\s+/g, "");

  console.log(lastNum);
  try {
    console.log(lastNum);
    document.getElementById("screen").firstChild.nodeValue = eval(`${lastNum}`);
  } catch (error) {
    document.getElementById("screen").firstChild.nodeValue = "error";
    document.getElementById("last_num").innerText = "";
  }
}

// toggles to dark theme
function toggleDark() {
  togglelight = !togglelight;
  if (togglelight) {
    togglelight = false;
    document.body.classList = "dark-theme";
    document.body.classList.remove("shadow");
  }
  toggledark = true;
}

// toggles to light theme
function toggleLight() {
  if (toggledark) {
    toggledark = false;
    return document.body.classList.remove("dark-theme");
  }
}
