window.vari ;

chrome.runtime.onMessage.addListener(receiver);

//console.log(bg.vari);

function receiver(request, sender, sendResponse)
{
  console.log(request);
  window.vari = request;
}
