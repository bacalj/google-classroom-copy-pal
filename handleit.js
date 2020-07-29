var setBackTo = document.body.style.color;

document.body.style.backgroundColor = "orange";

var lis = document.querySelectorAll('main ol li');

lis.forEach(element => {
    let isItem = element.classList.length > 4;
    
    if (isItem){
        console.log(element);
        element.style.backgroundColor = "yellow";
    }
    
});

setTimeout(() => {
    document.body.style.backgroundColor = setBackTo;
}, 1000);