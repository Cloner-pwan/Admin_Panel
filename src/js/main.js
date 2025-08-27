import admin_panel from './functions/admin_panel.js';
import api from './functions/api.js';
api(`http://localhost:3000/users`);
admin_panel();
