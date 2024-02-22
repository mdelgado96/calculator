let toggledark = false;
let togglelight = false;

function entered(number) {
  let count = 0;

  const current = (document.getElementById("screen").firstChild.nodeValue +=
    number);

  console.log(typeof current); //iterate through string to check for amount of decimals

  if (count > 1) {
    console.log("count =" + count);
    exit();
  }

  if (number == ".") {
    count++;
    console.log("count =" + count);
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
