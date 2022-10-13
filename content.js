const observer = new MutationObserver(function() {
    if (document.getElementsByClassName('btmpanel')) {
        observer.disconnect();
    }
});
const config = { childList: true, subtree: true };
  
const words = document.getElementById('rdlat').children;
    for (let word of words){
       if (word.tagName.toLowerCase() == 'span' && word.id != 'ln0')
       {
         word.dispatchEvent(new Event('click'));
         observer.observe(document.querySelector('body'), config);
         translation = document.getElementsByClassName('btmpanel');
         console.log(translation);
         word.innerHTML = word.innerHTML + '(' + translation + ')';
       }
    }