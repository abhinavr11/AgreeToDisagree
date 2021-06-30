

console.log("content running");

console.log($("title").text().toLowerCase());

var cond ; 
var str =["privacy" , "policy" ,"terms" , "conditions" ]; 
for (let i = 0; i < str.length; i++) {
    if($("title").text().toLowerCase().includes(str[i]))
    {
        cond = true;
        break ;
    }
  }

if(cond)
{
   
    var myWindow = window.open("", "MsgWindow", "width=100,height=100");
myWindow.document.write("<p> <strong> This is an alert </strong> </p>   <p> <button type='button' id='myBtn'>Ok</button>");

myWindow.document.getElementById("myBtn").addEventListener("click", func);

function func() {
    myWindow.close();
}

}