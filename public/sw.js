  (function() {
    // Create a new script element
    var script = document.createElement('script');
    
    // Set the data-zone attribute
    script.dataset.zone = '10582557';
    
    // Set the source URL
    script.src = 'https://nap5k.com/tag.min.js';
    
    // Append the script to the last available element (html or body)
    var parent = [document.documentElement, document.body].filter(Boolean).pop();
    parent.appendChild(script);
  })();