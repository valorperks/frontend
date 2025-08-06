// BTC Chart already included in your HTML

  // Welcome Toast
  window.addEventListener('DOMContentLoaded', () => {
    const toast = document.createElement('div');
    toast.textContent = 'Welcome to your dashboard!';
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #00ffcc;
      color: #1f1f1f;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
      z-index: 999;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '1', 300);
    setTimeout(() => toast.style.opacity = '0', 3000);
  });

  // Redirect Animation (example: logout)
  const logoutBtn = document.querySelector('a[href="/logout"]');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = logoutBtn.href;
      }, 1000);
    });
  }

