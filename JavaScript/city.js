document.getElementById("final_submit").addEventListener("click", scrie);
function scrie() {
  if (document.querySelector("#city_input").value !== '')
    document.querySelector("#your_city").innerText =
      "I hope that there's a beautiful day in " +
      document.querySelector("#city_input").value;
    
}
