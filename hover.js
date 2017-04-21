let doc = document;
let state = false;
let element = doc.getElementsByClass('div_buttons1');
function hover(a,b){
    state = true;
    if(a = 1){
        hoverOn(a);
    }
    else{
        hoverOn(b);
    }
}

function hoverOn(x){
    if(state === true){
        element.style.opacity="0.5";
        state = false;
    }
    else{
        doc.getElementsByClass('div_buttons').style.opacity="1";
    }
}
