const darkModeCheckbox = document.getElementById("dark-mode-checkbox")

const isDarkMode = localStorage.getItem("dark-mode")

if (isDarkMode === "enabled") {
    document.body.classList.add("dark-mode")
    darkModeCheckbox.checked = true  
} else {
    darkModeCheckbox.checked = false 
}

const enableDarkMode = () => {
    document.body.classList.add("dark-mode")
    localStorage.setItem("dark-mode", "enabled")  
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode")
    localStorage.setItem("dark-mode", "disabled") 
}

darkModeCheckbox.addEventListener("change", () => {
    if (darkModeCheckbox.checked) {
        enableDarkMode()  
    } else {
        disableDarkMode() 
    }
})
