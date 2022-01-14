document.getElementById("final_submit").addEventListener("click", scrie);

function scrie() {
  if(document.querySelector("#name").value!=='')document.getElementById("your_name").innerText =
    "Hi, " + document.querySelector("#name").value + " !";
}
