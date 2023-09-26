// WEB303 Assignment 2

document.addEventListener("DOMContentLoaded", function () {
    let contentDiv = document.getElementById('content');
  
    function loadContent(contentID) {
      let xhr = new XMLHttpRequest();
  
      /* xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            contentDiv.style.display = 'none';
            contentDiv.innerHTML = xhr.responseText;
            contentDiv.style.display = 'block';
          } else {
            contentDiv.innerHTML = "<p>Page Not Found!!</p>";
          }
        }
      }; */

      xhr.onload = function () {
        if (xhr.status === 200) {
          contentDiv.style.display = 'none';
          contentDiv.innerHTML = xhr.responseText;
          contentDiv.style.display = 'block';
        } else {
          contentDiv.innerHTML = "<p>Page Not Found!!</p>";
        }
      };
  
      xhr.open("GET", contentID + ".html", true);
      xhr.send();
    }
  
    let prospectLink = document.getElementById('prospect');
    let retainLink = document.getElementById('retain');
    let convertLink = document.getElementById('convert');
  
    prospectLink.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('prospect');
    });
  
    retainLink.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('retain');
    });
  
    convertLink.addEventListener('click', function (e) {
      e.preventDefault();
      loadContent('convert');
    });
  });
  