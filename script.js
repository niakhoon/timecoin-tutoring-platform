function addRequest() {
  const subject = document.getElementById("subject").value;
  const duration = document.getElementById("duration").value;

  const li = document.createElement("li");
  li.textContent = subject + " - " + duration + " minutes";

  document.getElementById("requests").appendChild(li);
}
