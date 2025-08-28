let api = (endpoint) => {
  async function get_user() {
    let req = await fetch(endpoint);
    let res = await req.json();
    let username = document.getElementById('user_side_panel_name');
    let profilePic = document.getElementById('profile_pic');
    username.innerHTML = res[0].username;
    profilePic.src = res[0].avatar;
  }
  async function get_user_data() {
    let req = await fetch(endpoint);
    let res = await req.json();
    let tbody = document.querySelector('#tbody');
    let data = res.map((user) => {
      return `<tr>
                  <th class="px-4 py-2 font-semibold">${user.fullName}</th>
                  <th class="px-4 py-2 font-semibold">${user.username}</th>
                  <th class="px-4 py-2 font-semibold">${user.email}</th>
                  <th class="px-4 py-2 font-semibold">${user.followers}</th>
                  <th class="px-4 py-2 font-semibold">${user.following}</th>
                  <th class="px-4 py-2 font-semibold flex gap-2">
                    <a href="#">
                      <button class="px-4 py-1.5 bg-sky-600 hover:bg-sky-700 rounded-sm text-center text-white cursor-pointer transition-all duration-300">Edit</button>
                    </a>
                    <a href="#">
                      <button class="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 rounded-sm text-center text-white cursor-pointer transition-all duration-300">Delete</button>
                    </a>
                  </th>
               </tr>`;
    });
    tbody.insertAdjacentHTML('beforeend', data.join(''));
  }
  get_user();
  get_user_data();
};

export default api;
