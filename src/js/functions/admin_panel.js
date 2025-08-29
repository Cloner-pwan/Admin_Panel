let admin_panel = () => {
  function side_panel() {
    document.addEventListener('click', (event) => {
      const item = event.target.closest('.menu_items');
      if (!item) return;

      const itemName = item.querySelector('p')?.textContent;
      if (!itemName) return;

      const content = document.getElementById(itemName);
      if (!content) return;

      // Hide other contents
      document.querySelectorAll('.item_content').forEach((el) => el.classList.add('hidden'));

      // hide other borders
      document.querySelectorAll('.menu_items').forEach((el) => {
        el.classList.add('border-transparent');
      });
      // Show the clicked content
      content.classList.remove('hidden');
      item.classList.add('border-rose-600');
      item.classList.remove('border-transparent');
    });
  }
  function resizing_side_panel() {
    const sidePanel = document.querySelector('.side_panel');
    const resizer = document.getElementById('resizer');

    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      document.body.style.cursor = 'ew-resize'; // change cursor globally
    });

    window.addEventListener('mousemove', (e) => {
      if (!isResizing) return;

      let newWidth = e.clientX;
      if (newWidth < 200) newWidth = 200; // min width
      if (newWidth > 600) newWidth = 600; // max width

      sidePanel.style.width = newWidth + 'px';
    });

    window.addEventListener('mouseup', () => {
      isResizing = false;
      document.body.style.cursor = 'default';
    });
  }
  function darkMode() {
    document.querySelector('#darkMode').addEventListener('click', () => {
      document.querySelector('html').classList.toggle('dark');
    });
  }
  function exportToXLSX() {
    let export_btn = document.querySelector('#export_btn');
    export_btn.addEventListener('click', () => {
      let table = document.querySelector('#TableToExport');
      let wb = XLSX.utils.table_to_book(table);
      XLSX.writeFile(wb, 'export.xlsx');
    });
  }
  exportToXLSX();
  side_panel();
  darkMode();
  resizing_side_panel();
};
export default admin_panel;
