let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element){
    let localcolor = element.target.value;
 
    /* once user clicks on an active tab we have to be testing for if we on active tab */
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

/*  when the value "color" is got, a.k.a. when we sync/load values
    set the color of the button to the data.color
    set the `value` attribute of the element to  data.color
    so the script can access it when it comes time to click
*/
chrome.storage.sync.get('color', function(data){
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});
