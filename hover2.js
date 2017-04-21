function hover(n){
    let doc = document;
    hoverOn(doc,n);
    hoverOff(doc,n);
}

function hoverOn(page,n){
    alert('working');
    let elementA = page.getElementById('dbutton1');
    let elementB = page.getElementById('dbutton2')
    if(n === a){
        alert('a');
        elementA.style.opacity="0.5";
    }
    else{
        alert('b');
        elementB.style.opacity="0.5";
    }
}
