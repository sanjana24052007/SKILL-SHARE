
function showLogin() {
    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });
}

function createProfile() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all details!");
        return;
    }

    document.getElementById("message").innerText =
        "Welcome to SkillShare, " + name + "!";

    alert("Profile created successfully!");
}

