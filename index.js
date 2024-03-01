let toggledark = false;
let togglelight = false;

function entered(number) {
  let count = 0;

  const current = (document.getElementById("screen").firstChild.nodeValue +=
    number);

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
}

// function equals() {
//   if (op)

//   substring (document.getElementById("screen").firstChild.nodeValue) > convert to int and perform operation
// }

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
