let requests = [];

window.onload = function () {
  const saved = localStorage.getItem("requests");

  if (saved) {
    requests = JSON.parse(saved);
    displayRequests();
  }
};

function addRequest() {
  const subjectInput = document.getElementById("subject");
  const durationInput = document.getElementById("duration");

  const subject = subjectInput.value.trim();
  const duration = durationInput.value.trim();

  // ולידציה: שדות ריקים
  if (!subject || !duration) {
    alert("Please fill all fields");
    return;
  }

  if (isNaN(duration) || Number(duration) <= 0) {
    alert("Duration must be a positive number");
    return;
  }

  const request = {
    subject: subject,
    duration: Number(duration)
  };

  requests.push(request);

  localStorage.setItem("requests", JSON.stringify(requests));

  subjectInput.value = "";
  durationInput.value = "";

  displayRequests();
}

function displayRequests() {
  const list = document.getElementById("requests");
  list.innerHTML = "";

  requests.forEach(req => {
    const li = document.createElement("li");
    li.textContent = `${req.subject} - ${req.duration} minutes`;
    list.appendChild(li);
  });
}
