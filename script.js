console.log("Karthickart clone ready");
document.querySelector('.login-btn').addEventListener('click', () => {
  document.getElementById('loginModal').style.display = 'block';
});

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  alert("Logged in as: " + user);
  closeModal();
}
