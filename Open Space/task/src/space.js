const pass = "TrustNo1";

function startRocket() {
    let rocket = document.getElementById("rocket");
    rocket.style.transform = "translate(400px, -400px) rotate(80deg)";
}

function checkParameters() {
    for (let inp of allChecks) { if (!inp.checked) { return } }
    for (let inp of allSlides) { if (inp.value != "100") { return }}
    launchButton.removeAttribute("disabled")
}

let allChecks = document.getElementsByClassName("check");
for (let inp in allChecks) {
    allChecks.item(inp).setAttribute("disabled", "");
}

let allSlides = document.getElementsByClassName("slide");
for (let inp in allSlides) {
    allSlides.item(inp).setAttribute("disabled", "");
}

let launchButton = document.getElementById("launch");
launchButton.setAttribute("disabled", "");

launchButton.addEventListener("click", function () {
    startRocket();
})

let okButton = document.getElementById("password_ok");
okButton.addEventListener("click", function() {
    if (document.getElementById("password").value == pass) {
        for (let inp of allChecks) {
            inp.removeAttribute("disabled");
            inp.onchange = function () {
                checkParameters();
            }
        }
        for (let inp of allSlides) {
            inp.removeAttribute("disabled");
            inp.onchange = function () {
                checkParameters();
            }
        }
        document.getElementById("password").setAttribute("disabled", "");
        document.getElementById("password_ok").setAttribute("disabled", "");
    }
});