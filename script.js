function checkMarks() {
    
  let ids = ["urdu", "english", "maths"];
  let total = 0;

  for (let i = 0; i < ids.length; i++) {
    total += Number(document.getElementById(ids[i]).value);
  }

  let message = (total >= 120) ? "Congrats! You have passed." : "Sorry, you have failed.";
  alert(message);
  return false;
}
