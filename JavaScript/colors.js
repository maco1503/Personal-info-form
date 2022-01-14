document.getElementById("final_submit").addEventListener("click", culoare);
function culoare() {
  let ok = 0;
  if (
    document.querySelector("#other").value === '' &&
    document.querySelector("#blue").checked === false &&
    document.querySelector("#red").checked === false &&
    document.querySelector("#yellow").checked === false &&
    document.querySelector("#green").checked === false
    ){return;}
    if (document.querySelector("#blue").checked === true) {
      ok++;
      document.querySelector("#colors").innerText = "I also like blue.";
    }
  if (document.querySelector("#red").checked === true) {
    if (ok > 0) {
      document.querySelector("#colors").innerText =
        document.querySelector("#colors").innerText +
        " I see that you also like red";
    } else
      document.querySelector("#colors").innerText = " I see that you like red";
    ok++;
  }
  if (document.querySelector("#yellow").checked === true) {
    if (ok > 0) {
      document.querySelector("#colors").innerText =
        document.querySelector("#colors").innerText + " and yellow";
    } else
      document.querySelector("#colors").innerText =
        " I see that you like yellow";
    ok++;
  }
  if (document.querySelector("#green").checked === true) {
    if (ok > 0)
      document.querySelector("#colors").innerText =
        document.querySelector("#colors").innerText + " and green";
    else
      document.querySelector("#colors").innerText =
        " I see that you like green";
    ok++;
  }
  if (document.querySelector("#other").value !== "" && ok)
    document.querySelector("#colors").innerText =
      document.querySelector("#colors").innerText +
      " and " +
      document.querySelector("#other").value;
  else if(document.querySelector("#other").value !== "" && ok==0)
    document.querySelector("#colors").innerText =
      "I see that you like " + document.querySelector("#other").value;
}
