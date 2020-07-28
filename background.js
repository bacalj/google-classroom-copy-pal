/* setup and other background business will happen */
chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set(
        {
            color: 'orange'
        },

        function(){
            console.log('foo');
        }
    );
    
    /* act on page under these conditions */
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostEquals: 'developer.chrome.com'
                        },
                    })
                ],

                /* call in the built in hook of sorts */
                actions: [
                    new chrome.declarativeContent.ShowPageAction()
                ]
            }
        ]);
    });
    
});