document.addEventListener('DOMContentLoaded', () => {
  
    var tocContainer = document.querySelector('.toc-wrapper .toc-list');
  
    if (tocContainer !== null) {
        
      var textContainer = document.querySelector('.post-inner')
      var headings = textContainer.querySelectorAll('h2, h3, h4, h5, h6, .h2, .h3, .h4, .h5, .h6');
  
      if (headings.length) {
          
        var tocHtml = ' <ul class="list-minus">';
  
        headings.forEach(function(heading, index) {
          
            var headingText = heading.textContent;
            var headingLevel;
  
            if(heading.tagName === "STRONG") {
              headingLevel = parseInt(heading.className.charAt(1));
            } else {
              headingLevel = parseInt(heading.tagName.charAt(1));
            }
                  
            var headingId = heading.id || 'toc-heading-' + index;
  
            // Assign an ID to the heading
            if (!heading.id) {
              heading.id = headingId;
            }
          
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
  
        tocHtml += '</ul>';
  
        // Append 
        tocContainer.innerHTML = tocHtml;
      }
    }
  });
  
