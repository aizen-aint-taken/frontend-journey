function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    document.getElementById("clock").textContent = time;
  }


  updateClock();
  setInterval(updateClock, 1000);






  (function updateYear() {
    const now = new Date();
    const year = now.getFullYear();

    document.querySelectorAll('[data-year]').forEach(el => {
      const start = parseInt(el.getAttribute('start'), 10);
      el.textContent = (!isNaN(start) && start < year) 
        ? `${start}–${year}` 
        : `${year}`;
    });

    // Schedule update after New Year
    const nextTick = new Date(year + 1, 0, 1, 0, 0, 1);
    setTimeout(updateYear, nextTick - now);
  })();
