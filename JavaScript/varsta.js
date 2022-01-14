document.getElementById("final_submit").addEventListener("click", varsta);

function varsta() {
  let birthday = new Date(document.querySelector("#date").value);
  let by = birthday.getFullYear();
  let bm = birthday.getMonth();
  let bd = birthday.getDay();
  let date = new Date();
  let dy = date.getFullYear();
  let dm = date.getMonth();
  let dd = date.getDay();
  let years = dy - by;

  if(document.querySelector("#date").value!=='')document.getElementById("your_age").innerText =
    "You've lived on this planet for approximately " + years + " years";
}
