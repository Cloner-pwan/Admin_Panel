let admin_panel = () => {
  // is working
  function darkMode() {
    document.querySelector("#darkMode").addEventListener("click", () => {
      document.querySelector("html").classList.toggle("dark");
    });
  }
  darkMode();
};
export default admin_panel;
