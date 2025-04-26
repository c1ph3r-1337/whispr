// script.js

// Utils
function genUsername() {
    return "whispr_" + Math.random().toString(36).slice(2, 10);
  }
  function $(id) { return document.getElementById(id); }
  
  // Date formatting
  function formatTimestamp(ts) {
    return new Date(ts).toLocaleString();
  }
  
  // Render a single post into the container
  function renderPost(p, container, prepend = false) {
    const div = document.createElement("div");
    div.className = "post animate-in";
    div.innerHTML = `
      <div class="user">🕵️ ${p.username}</div>
      <div class="text">🔐 ${p.hashed}</div>
      ${
        p.attachments && p.attachments.length
          ? `<div class="attachments">` +
            p.attachments
              .map(
                (a) =>
                  `<a href="/uploads/${a}" target="_blank">${a}</a>`
              )
              .join("") +
            `</div>`
          : ""
      }
      <div class="timestamp">${formatTimestamp(p.timestamp)}</div>
    `;
    if (prepend) container.prepend(div);
    else container.appendChild(div);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginView = $("login-view");
    const boardView = $("board-view");
    const nodesView = $("nodes-view");
    const assignedEl = $("assigned-username");
    assignedEl.textContent = genUsername();
    const loginForm = $("login-form");
    const pwInput = $("password");
    const loginError = $("login-error");
    const postsContainer = $("posts");
    const postForm = $("post-form-container");
    const newBtn = $("new-whispr-btn");
    const postBtn = $("post-whispr");
    const textInput = $("whispr-text");
    const fileInput = $("attachment");
  
    let currentUser = null;
  
    // Switch visible view
    function switchView(name) {
        [loginView, boardView, nodesView].forEach((v) => v.classList.add("hidden"));
        if (name === "login")      loginView.classList.remove("hidden");
        else if (name === "board") boardView.classList.remove("hidden");
        else if (name === "nodes") nodesView.classList.remove("hidden");
   
       // hide nav on login, show on other views
        const nav = document.querySelector(".bottom-nav");
        if (name === "login") nav.classList.add("hidden");
        else                  nav.classList.remove("hidden");
      }
  
    // Load and display all posts
    async function loadPosts() {
      postsContainer.innerHTML = "";
      const res = await fetch("/api/posts");
      const arr = await res.json();
      if (!arr.length) {
        postsContainer.innerHTML =
          '<p class="empty-state">No whispers yet. Be the first!</p>';
      } else {
        arr.forEach((p) => renderPost(p, postsContainer));
      }
    }
  
    // Handle login
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      loginError.textContent = "";
      const pw = pwInput.value.trim();
      if (pw.length < 4) {
        loginError.textContent = "Password must be ≥ 4 chars";
        return;
      }
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      const json = await res.json();
      if (!json.success) {
        loginError.textContent = json.message;
        return;
      }
      currentUser = json.username;
      assignedEl.textContent = currentUser;
      switchView("board");
      loadPosts();
    });
  
    // Toggle new-whispr form
    newBtn.addEventListener("click", () => {
      postForm.classList.toggle("hidden");
      if (!postForm.classList.contains("hidden")) {
        textInput.focus();
      }
    });
  
    // Handle posting a new Whispr
    postBtn.addEventListener("click", async () => {
      const text = textInput.value.trim();
      const files = fileInput.files;
      if (!text && files.length === 0) {
        alert("Add text or attachment!");
        return;
      }
      const fd = new FormData();
      fd.append("text", text);
      for (let f of files) fd.append("attachments", f);
  
      const res = await fetch("/api/post", { method: "POST", body: fd });
      if (!res.ok) {
        alert("Failed to post. Make sure you're logged in.");
        return;
      }
      // reset form
      textInput.value = "";
      fileInput.value = "";
      postForm.classList.add("hidden");
      // reload
      await loadPosts();
    });
  
    // Nav buttons
    $("nav-boards").addEventListener("click", () => switchView("board"));
    $("nav-nodes").addEventListener("click", () => switchView("nodes"));
  
    // Start on login
    switchView("login");
  });
  