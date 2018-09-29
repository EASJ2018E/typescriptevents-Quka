//Her skal du skrive din typescriptkoden

function createEl (el: string, elText: string, elClass: string, nextId : number) : HTMLElement  {
    let li : HTMLElement = document.createElement(el);
    li.appendChild(document.createTextNode(elText));
    li.setAttribute("id", String(nextId));
    li.setAttribute("class", elClass);

    return li;
}

function addLiFunc() : void {
    let inputText = (<HTMLInputElement> document.getElementById("vare"));
    
    if(inputText.value.length < 1) {
        console.log("vare empty");
        return;
    }

    let sundhed = (<HTMLInputElement> this).value;
    let location = sundhed == 'sundt' ? document.getElementById("liste") : document.getElementById("listeUsund");
    let listChildrenLength = getNextNumberId(location);

    let li = createEl("li", inputText.value, sundhed, listChildrenLength);
    location.appendChild(li);

    inputText.value = "";
}

function getNextNumberId(list : HTMLElement) : number {
    return list.children.length;
}

// Add eventlisteners to input btns
let btns = document.getElementsByClassName("submitBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", addLiFunc);
}

