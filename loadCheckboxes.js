var setBackTo = document.body.style.color;

document.body.style.backgroundColor = "lightblue";

var lis = document.querySelectorAll('main ol li');

lis.forEach(element => {
    let isItem = element.classList.length > 4;
    let hasBox = element.querySelector('.copypal-checkbox');
    
    if (isItem){
        if ( !hasBox ){
            console.log('adding checkbox');
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.classList.add("copypal-checkbox");
            checkbox.style.position = "absolute";
            checkbox.style.transform = "translate(-25px, -39px)";
            checkbox.name = element.dataset.domId;
            checkbox.id = "cb_" + element.dataset.domId;
            checkbox.value = "v_" + element.dataset.domId;
            element.appendChild(checkbox);
        } else {
            console.log('already has checkbox');
        }
    }
});

/* exciting flash of orange */
setTimeout(() => {
    document.body.style.backgroundColor = setBackTo;
}, 200);