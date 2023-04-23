(() => {

    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;
  
    const end = new Date("May 21, 2023 11:57:00").getTime();
  
    const int = setInterval(() => {
      const current = new Date().getTime();
      const remaining = end - current;
      document.getElementById("days").innerText = Math.floor(remaining / day);
      document.getElementById("hours").innerText = Math.floor( (remaining % day) / hour );
      document.getElementById("minutes").innerText = Math.floor( (remaining % hour) / min );
      document.getElementById("seconds").innerText = Math.floor( (remaining % min) / sec );          
    }, 1000);
    
    window.onload = function() {
      setTimeout(function() {
        document.body.style.opacity = "0";
      }, 5000);
    }
    
)();
