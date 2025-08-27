let api = (endpoint) => {
  async function get_user() {
    let req = await fetch(endpoint);
    let res = await req.json();
    let username = document.getElementById("user_side_panel_name");
    let profilePic = document.getElementById("profile_pic");
    username.innerHTML = res[0].username;
    profilePic.src = res[0].avatar;
  }
  get_user();
};

export default api;
