var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

var dataArr = [];

checkedBoxes.forEach(element => {
    let itemo = {};
    let li = element.parentElement;
    itemo.text = li.querySelector('span').innerHTML;

    let candidates = li.querySelectorAll('div');
    candidates.forEach(element => {
        if (element.textContent.includes("Due")){
            if (element.childElementCount == 0 ){
                itemo.due = element.innerText;
            }
        }
    });

    dataArr.push(itemo);
});

let outputStr = '';

dataArr.forEach(element => {
    outputStr += element.text;

    if ( 'due' in element ){
        outputStr += " (" + element.due + ")";
    }

    outputStr += "\n";
});

/* lifted from here: git remote add origin https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/ */
var el = document.createElement('textarea');
el.value = outputStr;
el.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);

alert('copied: \n' + outputStr);