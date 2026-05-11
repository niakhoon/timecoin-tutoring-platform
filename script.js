let requests = [];

window.onload = function () {
  const saved = localStorage.getItem("requests");

  if (saved) {
    requests = JSON.parse(saved);
    displayRequests();
  }
};

function addRequest() {
  const subject = document.getElementById("subject").value;
  const duration = document.getElementById("duration").value;

  if (!subject || !duration) {
    alert("Please fill all fields");
    return;
  }

  const request = {
    subject: subject,
    duration: duration
  };

  requests.push(request);

  localStorage.setItem("requests", JSON.stringify(requests));

  displayRequests();
}

function displayRequests() {
  const list = document.getElementById("requests");
  list.innerHTML = "";

  requests.forEach(req => {
    const li = document.createElement("li");
    li.textContent = req.subject + " - " + req.duration + " minutes";
    list.appendChild(li);
  });
}
