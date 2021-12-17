
// Working algo - find input element and look for targeted words

// Adding class to highlght text
var css_to_append = document.createElement('style');
css_to_append.innerHTML = `.yellowBg {  border: 5px solid red !important; }
 .popover__content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  transform: translate(0, 10px);
  background-color: #bfbfbf;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
  transition: all 0.5s ease-in;
}


.popover__wrapper:hover .popover__content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  position: static;
  transition: all 0.5s ease-in;
  top: 0px;
 
}`; 
// transform: translate(100px, -500px);
var div_to_append = document.createElement('div');
div_to_append.innerHTML = `<div class="popover__content">
<p class="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p>
<img alt="Joseph Francis Joey Tribbiani, Jr." src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif">
</div>`;




//border: 2px solid powderblue;






$('head').append(css_to_append);





var wait = 0;
let intervalId = window.setInterval(function(){
  if(wait == 1)
  {
    scrape_div();
   
    window.clearInterval(intervalId);
  }
    wait +=1;
  }, 1000);





cookie_words = ['cookie' , 'use', 'agree', 'consent' , 'permission' , 'understand' , 'automatically','privacy','policy'] ;
relevant_link_words = [ 'cookie', 'terms' , 'privacy' ,'policy', "terms of service" , "terms and conditions" , 
"rights" , "legal"] ; 
var all_links = [] ;
var links = [] ;

var div_count =[];

$('a').each(function() {
      all_links.push(this.href);
    });

for (var i=0; i < all_links.length ; i++)
{
    for (var j = 0 ; j< relevant_link_words.length ; j++)
    {   if(all_links[i].includes(relevant_link_words[j]))
         {links.push(all_links[i]);
            break;
        }
    }
}


function scrape_div() {
  var count = 0;
  var z_index = 0;
  var divs ;
  $('div').each(function(){
      cond = false; 
       
      for(var i = 0 ; i < cookie_words.length ;i++)
      { 
       if(this.innerText.includes(cookie_words[i]) )
        { 
          console.log(this.innerText);
          //console.log(this);
          cond=true;
          count +=1;
          break;
        }
      
      }

      if(cond)
      { 
        //$(this).eq(count).addClass('popover__wrapper yellowBg');
        //$(this).eq(count).append(div_to_append);
        //console.log($(this).eq(count));


       if($(this).css('z-index')> z_index && $(this).css('z-index') != 'auto' || $(this).css('z-index')> z_index ) 
       { 
         //if($(this).width()>0 && $(this).height()>0);
         {z_index= $(this).css('z-index');
         divs = this;
        console.log($(this).css('z-index'));
        console.log($(this));
         }
        
        }
       /*
        if(count>=2)
       {
        {z_index= $(this).css('z-index');
        divs = this;
       console.log($(this).css('z-index'));
       console.log($(this));
        }
       }
    */
       
        

     }
    
    //count +=1;
  });
  //console.log(divs);
  //console.log($(divs).css('z-index'));
  $(divs).addClass('popover__wrapper yellowBg');
  $(divs).append(div_to_append);


}


