function showSection(sectionId) {
    const sections = document.querySelectorAll(".content section ");
    sections.forEach((section) => {
        section.style.display = "none ";
    });
    document.getElementById(sectionId).style.display = "block ";
}

function showForm(formId) {
    document.getElementById("login-form ").style.display = "none ";
    document.getElementById("signup-form ").style.display = "none ";
    document.getElementById(formId + "-form ").style.display = "block ";
    src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons.js";
}