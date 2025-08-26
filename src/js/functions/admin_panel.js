let admin_panel = () => {
  function side_panel() {
    document.addEventListener("click", (event) => {
      const item = event.target.closest(".menu_items");
      if (!item) return;

      const itemName = item.querySelector("p")?.textContent;
      if (!itemName) return;

      const content = document.getElementById(itemName);
      if (!content) return;

      // Hide other contents
      document
        .querySelectorAll(".item_content")
        .forEach((el) => el.classList.add("hidden"));

      // Show the clicked content
      content.classList.remove("hidden");
    });
  }

  function darkMode() {
    document.querySelector("#darkMode").addEventListener("click", () => {
      document.querySelector("html").classList.toggle("dark");
    });
  }
  side_panel();
  darkMode();
};
export default admin_panel;
