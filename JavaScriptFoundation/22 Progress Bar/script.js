window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
  
    let progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
  });
  