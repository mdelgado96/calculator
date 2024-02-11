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
