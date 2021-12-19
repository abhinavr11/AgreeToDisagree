// Working algo - find input element and look for targeted words

// Adding class to highlght text
var css_to_append = document.createElement("style");
css_to_append.innerHTML = `.yellowBg { background-colour : red ; }

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;


  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: opacity 0.5s;
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 4.63588px;
}


.popover__wrapper:hover .popover__content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  position: static;
  transition: all 0.5s ease-in;
  top: 0px;
 
}

.title {
  /* position: absolute; */
  left: 129.29px;
  top: 22.97px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 29.6696px;
  line-height: 35px;
  text-align: center;

  color: #141414;
}

.slogan {
  /* position: absolute; */
  width: auto;
  left: 129.29px;
  top: 63.72px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  text-align: center;
  margin-top: 5px;

  color: #5b1ede;
  // margin-bottom: -25px;
}

.grade {
  /* position: absolute; */
 
  left: 202.43px;
  top: 95.44px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 133.513px;
  line-height: 156px;
  text-align: center;

  color: #5b1ede;
}

.grade-heading {
  /* position: absolute; */

  left: 181.93px;
  top: 237.09px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22.2522px;
  line-height: 26px;

  color: #4a4a4a;
  margin-bottom: 10px;
}

.grading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  /* position: absolute; */
 
  left: 32.24px;
  top: 285.84px;
}
.block {
  display: flex;
  justify-content: center;
  width: 80px;
}

.letter {


  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6892px;
  line-height: 20px;

  color: #5b1ede;
  margin-right: 5px;
}

.grade-meaning {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  /* font-size: 11.1261px; */
  /* line-height: 13px; */
  /* identical to box height */

  color: #000000;
}

.grading-sys {
  /* position: absolute; */

  left: 211.16px;
  top: 316.28px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  /* identical to box height */

  color: #4a4a4a;
  margin-bottom: 25px;
  margin-top: 10px;
}

.algorithm {
  /* position: absolute; */
 
  left: 112.19px;
  top: 355.81px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  /* identical to box height */

  color: #4a4a4a;
  margin-bottom: 10px;
}

.points {
  /* position: absolute; */

  left: 80px;
  top: 370px;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: medium;
  font-size: 16.6892px;
  line-height: 20px; 
  /* text-decoration-line: underline; */

  color: #141414;
}

.number {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16.6892px;
  line-height: 20px;
  text-decoration-line: underline;

  color: #5b1ede;
}

.name {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16.6892px;
  line-height: 20px;
  /* text-decoration-line: underline; */

  color: #141414;
}

li{
  margin-bottom: 5px;
}
`;
// transform: translate(100px, -500px);
var div_to_append = document.createElement("div");
div_to_append.innerHTML = `<div id="circle" class="popover__content">
<div class="title">Agree to Disagree</div>
<div class="slogan">Privacy Report Card of every website</div>
<div class="grade">B</div>
<div class="grade-heading">Overall Grade</div>
<div class="grading">
   <div class="block">
      <div class="letter">A</div>
      <div class="grade-meaning">Best</div>
      
    </div>
    <div class="block"><div class="letter">B</div>
    <div class="grade-meaning">Good</div></div>
    <div class="block"><div class="letter">C</div>
    <div class="grade-meaning">Neutral</div></div>
    <div class="block"><div class="letter">D</div>
    <div class="grade-meaning">Bad</div></div>
    <div class="block"><div class="letter">E</div>
    <div class="grade-meaning">Block it</div></div>

  </div>
  <div class="grading-sys">Grading System</div>
  <div class="algorithm">Our Algorithm has rated different points of this policy as </div>
  <div class="points">
    <ul>
      <li>
        <span class="number">5</span> points can be considered as <span class="name">GOOD</span>
      </li>
      <li>
        <span class="number">3</span> points are almost <span class="name">NEUTRAL</span>
      </li>
      <li>
        There are <span class="number">1</span> <span class="name">BAD</span> points
      </li>
      <li>
        There are <span class="number">0</span> points that can be a <span class="name">BLOCKER</span>
      </li>
    </ul>
  </div>
</div>

</div>`;


$('head').append(css_to_append);


var wait = 0;
let intervalId = window.setInterval(function () {
  if (wait == 1) {
    if (!sign_up_case()) {
      scrape_div();
    }

    window.clearInterval(intervalId);
  }
  wait += 1;
}, 1000);

//#####################################################
//################Main Function########################
//####################################################

cookie_words = [
  "cookie",
  "use",
  "agree",
  "consent",
  "permission",
  "understand",
  "automatically",
  "privacy",
  "policy",
];
relevant_link_words = [
  "cookie",
  "terms",
  "privacy",
  "policy",
  "terms of service",
  "terms and conditions",
  "rights",
  "legal",
];
var all_links = [];
var links = [];

$("a").each(function () {
  all_links.push(this.href);
});

for (var i = 0; i < all_links.length; i++) {
  for (var j = 0; j < relevant_link_words.length; j++) {
    if (all_links[i].includes(relevant_link_words[j])) {
      links.push(all_links[i]);
      break;
    }
  }
}

chrome.runtime.sendMessage(links, function(response) {console.log('sent message from content')});


//###########################################################
//##########################################################

function scrape_div() {
  var count = 0;
  var z_index = 0;
  var divs;
  $("div").each(function () {
    cond = false;

    for (var i = 0; i < cookie_words.length; i++) {
      if (this.innerText.includes(cookie_words[i])) {
        //console.log(this.innerText);
        //console.log(this);
        cond = true;
        count += 1;
        break;
      }
    }

    if (cond) {
      if (
        ($(this).css("z-index") > z_index &&
          $(this).css("z-index") != "auto") ||
        $(this).css("z-index") > z_index
      ) {
        //if($(this).width()>0 && $(this).height()>0);
        {
          z_index = $(this).css("z-index");
          divs = this;
        }
      }
    }

    //count +=1;
  });
  //console.log(divs);
  //console.log($(divs).css('z-index'));

  $(divs).addClass("popover__wrapper yellowBg");
  $(divs).append(div_to_append);
  var bg_col = document.querySelector(".yellowBg").style.backgroundColor;
  document.querySelector(".yellowBg").style.backgroundColor = "yellow";
  setTimeout(() => {
    document.querySelector(".yellowBg").style.backgroundColor = bg_col;
  }, 300);

  wait_to_kill();
  return;
}

function sign_up_case() {
  //###########Confirming Case##############
  sign_up_words = ["Sign", "sign", "SIGN", "UP", "up", "Up"];
  title_words = $("title").text().split(" ");
  sign_up_case_cond = false;
  for (var i = 0; i < title_words.length; i++) {
    if (sign_up_words.includes(title_words[i])) {
      sign_up_case_cond = true;
      break;
    }
  }

  
  //##########################################

  if (sign_up_case_cond) {
    console.log("sign up case confirmed");
    var sign_up_para_words = ['sign up','sign-up','agree','terms and conditions','learn more','data','by clicking'];
    var flag = false;
    
    var divs = document.getElementsByTagName("div");
    //console.log(divs[0]);

  
    
  /*
  var bg_col = $(this).style.backgroundColor
  
  */


    wait_to_kill();
    return true;
  }
   
  else {
    return false;
  }
}

function wait_to_kill() {
  console.log("inside wait to kill");
  document.addEventListener("click", kill);
  return;
}

function kill() {
  console.log("inside kill");

  $("div").each(function () {
    if (this.className.includes("popover__wrapper yellowBg")) {
      $(this).removeClass("popover__wrapper yellowBg");
    }
    return;
  });
}
