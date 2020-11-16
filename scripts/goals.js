console.log("connected");
function addGoal() {
    let goalName = document.getElementById('goalInputField').value;
    let saved = prompt("Amount saved: ");
    let target = prompt("Target amount: ");
    document.getElementById("goals").innerHTML += goalCardTemplate(goalName, saved, target);
}

// https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
const node = document.getElementById("goalInputField");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addGoal();
    }
});

function goalCardTemplate(title, saved, target) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title" style="text-align: left;">
            ${title}
        </h5>
      <p style="text-align: left;">Target: ${target}</p>
      <p style="text-align: left;">Saved: ${saved}</p>
    </div>
  </div>
  <br>`;
}