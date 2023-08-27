let inpu = document.getElementById("inp");


function store() {
    if(inpu.value != '') {
        const data = JSON.parse(localStorage.getItem("key")) || [];
        data.push(inpu.value)
        localStorage.setItem('key',JSON.stringify(data));
    }


}



function Todo() {
    let newd = document.createElement("div");
    newd.setAttribute("class", "newtask");


    let span = document.createElement("span");
    let btn = document.createElement("button");
    btn.innerHTML = "X";

    let check = document.createElement("input");
    check.setAttribute("id", "check");
    check.setAttribute('type', 'checkbox');
    span.innerHTML = inpu.value;

    check.addEventListener('click',()=>{
    if(check.checked == true) {
        span.style.textDecoration = 'line-through'
    }
    else {
        span.style.textDecoration = 'none'
    }

})
    newd.appendChild(span);
    newd.appendChild(btn);
    newd.appendChild(check);

    btn.addEventListener('click',()=>{
        newd.remove();
    })
    let task = document.getElementById("iner_2");
    task.appendChild(newd);
    store();

    let aba = JSON.parse(localStorage.getItem('key'));
    aba.forEach((e) => {
        console.log(e);
    });
}





inpu.addEventListener('keydown',(e)=>{
    if(e.key =='Enter') {
        if(inpu.value == "") alert("enter valied task");
        else if(inpu.value == " ") alert("not valied task");
        else {
            Todo();

        }
    }
})


