let toggledark = false;
let togglelight = false;

function entered(number) {
  let count = 0;

  if (count > 1) {
    console.log("count =" + count);
    exit();
  }

  if (number == ".") {
    count++;
    console.log("count =" + count);
  }

  document.getElementById("screen").firstChild.nodeValue += number;
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
