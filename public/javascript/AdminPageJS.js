function myFunction() {
  document.getElementById("i2").classList.toggle("show");
}

function redirectToAdminProfile() {
  window.location.href = "Profile.html";
}

function redirectToSharedDevices() {
  window.location.href = "Devices.html";
}

function redirectToOrders() {
  window.location.href = "Orders.html";
}

window.onclick = function(event) {
  if (!event.target.matches('.p3')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}