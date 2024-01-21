/* Accordion trigger */
/* **************************** */

function handleAccordion() {
  
    let accordion_btns = document.querySelectorAll( '.accordion-trigger' );
    let accordion_contents = document.querySelectorAll( '.accordion-content' )
    
    accordion_btns.forEach(function( btn ) {
      btn.addEventListener('click', function() {
        
        // Remove previous active accordion tab
        accordion_btns.forEach(function( prev_btn ){
          prev_btn.setAttribute('aria-expanded', 'false');
        })
        
        btn.classList.toggle('active');
        btn.setAttribute('aria-expanded', 'true');
        
        accordion_contents.forEach( function( acc_content ) {
          
          if(btn.dataset.accordion === acc_content.getAttribute( 'id' )) {
            acc_content.classList.toggle('active')
          }
        })
        
        
      })
    })
    
  }
  
  
window.addEventListener('DOMContentLoaded', function(){
    handleAccordion()
});