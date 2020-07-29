let setBackTo = document.body.style.color;

document.body.style.backgroundColor = "orange";

setTimeout(() => {
    document.body.style.backgroundColor = setBackTo;
}, 1000);