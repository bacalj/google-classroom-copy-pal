const currentTab = {
    active: true, 
    currentWindow: true
}

let loadCheckboxesButton = document.getElementById('loadCheckboxesButton');

loadCheckboxesButton.onclick = function(){
    chrome.tabs.query(
        currentTab,
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id, 
                { 
                    file: "loadCheckboxes.js"
                }
            );
        }
    );
}

let copyItemsButton = document.getElementById('copyItemsButton');

copyItemsButton.onclick = function(){
    chrome.tabs.query(
        currentTab,
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id, 
                { 
                    file: "copyItems.js"
                }
            );
        }
    );
}