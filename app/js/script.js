const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Function to enable dark mode
const setDarkMode = () => {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  darkButton.checked = true;
};

// Function to enable light mode
const setLightMode = () => {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  lightButton.checked = true;
};

// Function to apply a given color mode
const applyColorMode = (mode) => {
    if (mode === "dark") {
        setDarkMode();
    } else {
        setLightMode();
    }
};

// Function to check and apply the saved color mode from localStorage
const setColorMode = () => {
  const savedMode = localStorage.getItem("colorMode");

  if (savedMode) {
    applyColorMode(savedMode);
  } else {
        // Check system preference for dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyColorMode(prefersDark ? "dark" : "light");
  }
};

// Function to detect system theme changes and apply them dynamically
const checkModeChange = () => {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    applyColorMode(event.matches ? "dark" : "light");
  });
};

// Event listener for user input on the theme toggle switch
document.querySelector(".toggle__wrapper").addEventListener("input", (event) => {
  if (event.target.id === "dark") {
    localStorage.setItem("colorMode", "dark");
    setDarkMode();
  } else if (event.target.id === "light") {
    localStorage.setItem("colorMode", "light");
    setLightMode();
  }
});

setColorMode();
checkModeChange();
