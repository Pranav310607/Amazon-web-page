// Show Sign-in Modal
document.querySelector(".nav-sigin").addEventListener("click", () => {
  document.getElementById("signin-modal").style.display = "flex";
});

function closeModal() {
  document.getElementById("signin-modal").style.display = "none";
}

// Simple login validation
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "user" && password === "1234") {
    alert("Login successful!");
    closeModal();
  } else {
    alert("Invalid username or password");
  }
}

// Scroll to top
document.querySelector(".foot-pannel1").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live Search
document.querySelector(".search-input").addEventListener("input", function () {
  const term = this.value.toLowerCase();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.style.display = box.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

// Add-to-cart and cart count
let cartCount = 0;
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  const btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.onclick = () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    btn.textContent = "✔ Added!";
    btn.style.backgroundColor = "#28a745";
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.backgroundColor = "#febd68";
    }, 1500);
  };
  box.querySelector(".box-content").appendChild(btn);
});
