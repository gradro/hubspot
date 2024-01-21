document.addEventListener('DOMContentLoaded', () => {
  
    // Select the container where you want to place the table of contents
    var tocContainer = document.querySelector('.toc-wrapper .toc-list');
  
    // Check if the container exists on the page
    if (tocContainer !== null) {
        
      // Find all headings (you can customize this based on your needs)
      var textContainer = document.querySelector('.post-inner')
      var headings = textContainer.querySelectorAll('h2, h3, h4, h5, h6, .h2, .h3, .h4, .h5, .h6');
  
      // Check if there are headings to create a table of contents
      if (headings.length) {
          
        // Create the table of contents
        var tocHtml = ' <ul class="list-minus">';
  
        // Iterate through each heading and add an entry to the table of contents
        headings.forEach(function(heading, index) {
          
            var headingText = heading.textContent;
            var headingLevel;
  
            if(heading.tagName === "STRONG") {
              headingLevel = parseInt(heading.className.charAt(1));
            } else {
              headingLevel = parseInt(heading.tagName.charAt(1));
            }
                  
            var headingId = heading.id || 'toc-heading-' + index;
  
            // Assign an ID to the heading if it doesn't have one
            if (!heading.id) {
              heading.id = headingId;
            }
          
            // Add an entry to the table of contents
            tocHtml += '<li><a href="#' + headingId + '">' + headingText + '</a>';
          
            if(index+1 < headings.length && (headings[index+1].className.charAt(1) > 2 || headings[index+1].tagName.charAt(1) > 2) && headingLevel === 2 ) {
              tocHtml += '<ul class="sublist-minus">'
            } else {
              tocHtml += '</li>'
            }
          
            if( (index+1 < headings.length ) && headingLevel > 2 && (headings[index+1].className.charAt(1) == 2 || headings[index+1].tagName.charAt(1) == 2) ) {
              tocHtml += '</ul>'
            }
          
          
        });
  
        // Close the table of contents HTML
        tocHtml += '</ul>';
  
        // Append the table of contents to the specified container
        tocContainer.innerHTML = tocHtml;
      }
    }
  });
  