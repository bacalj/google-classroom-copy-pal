let myButton = document.getElementById('myButton');

myButton.onclick = function(element){
    let localcolor = element.target.value;
 
    /* testing for the active tab
    */
    chrome.tabs.query(
        {
            active: true, 
            currentWindow: true
        }, 
        
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    code: 'document.body.style.backgroundColor = "' + localcolor + '";'
                }
            );
        }
    );
}

/*  load color value into our world
*/
chrome.storage.sync.get('color', function(data){
    myButton.style.backgroundColor = data.color;
    myButton.setAttribute('value', data.color);
});
