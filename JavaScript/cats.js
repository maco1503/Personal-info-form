function scrie() {
  if (
    document.querySelector("#no").checked === false &&
    document.querySelector("#lot").checked === false &&
    document.querySelector("#idk").checked === false &&
    document.querySelector("#yes").checked === false
  )return;
    if (document.querySelector("#no").checked === true) {
      document.querySelector("#cats1").innerText =
        "Well too bad, u suck:)";
    }
  if (document.querySelector("#no").checked === false) {
    document.querySelector("#cats1").innerText = "Here is a cat :)";
    document.querySelector("#cats2").innerHTML =
      '<img src="../photos/cat.jpg">';
  }
}
document.getElementById("final_submit").addEventListener("click", scrie);
