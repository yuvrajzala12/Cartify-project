document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "yuvraj" && password === "yuvraj123") {
     alert("Invalid credentials! Try admin / admin123");
    
    
    
  } else {
   
    setTimeout(() => {
      window.location.href = "ex.html";
    }, 1000);
  }
});
