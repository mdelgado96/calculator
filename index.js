let toggledark = false;
let togglelight = false;
let lastNum = "";

function entered(number) {
  let count = 0;

  const current = (document.getElementById("screen").firstChild.nodeValue +=
    number);

  if (current.length < 3 && current[0] == "0") {
    document.getElementById("screen").firstChild.nodeValue -= "";
  }

  for (let i = 0; i < current.length; i++) {
    if (current[i] == ".") {
      count++;
    }
  }

  if (count > 1) {
    document.getElementById("screen").firstChild.nodeValue = "0";
  }
}

function clearAll() {
  document.getElementById("screen").firstChild.nodeValue = "0";
  document.getElementById("last_num").innerText = "";
}

function clear() {
  console.log("click");
  document.getElementById("screen").firstChild.nodeValue = "0";
}

function operator(op) {
  document.getElementById("screen").firstChild.nodeValue += op;

  lastNum = document.getElementById("screen").firstChild.nodeValue;
  document.getElementById("last_num").innerText += `${lastNum}`;

  document.getElementById("screen").firstChild.nodeValue = "0";
}

function equals() {
  // lastNum += document.getElementById("screen").firstChild.nodeValue;

  try {
    document.getElementById("screen").firstChild.nodeValue = eval(lastNum);
  } catch (error) {
    document.getElementById("screen").firstChild.nodeValue = "error";
    document.getElementById("last_num").innerText = "";
  }
}

function toggleDark() {
  togglelight = !togglelight;
  if (togglelight) {
    togglelight = false;
    document.body.classList = "dark-theme";
    document.body.classList.remove("shadow");
  }
  toggledark = true;
}

function toggleLight() {
  if (toggledark) {
    toggledark = false;
    return document.body.classList.remove("dark-theme");
  }
}
