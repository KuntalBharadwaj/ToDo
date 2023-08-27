var input = document.getElementById("inp");
var main = document.getElementById("iner_2");


function todo() {
    var inputtext = input.value;
    if(inputtext == "" || inputtext == " ") {
        alert("Enter a valid task")
    }
    else {
        var ned = document.createElement("div");
        ned.setAttribute("class","newtask");

        var sp = document.createElement("span");
        sp.innerHTML = inputtext;

        var check = document.createElement("input");
        check.setAttribute("type","checkbox");
        
        var btn = document.createElement("button");
        btn.setAttribute("class","btn");
        btn.innerHTML = "X";
        
        
        
        ned.appendChild(sp);
        ned.appendChild(check);
        ned.appendChild(btn);
        
        main.appendChild(ned);
        
        btn.addEventListener("click",()=>{
            ned.remove();
        })

        check.addEventListener("click",(e)=>{
            //console.log(check.value)
            if(check.checked == true) {
                sp.style.textDecoration = "line-through";
            }
            else {
                sp.style.textDecoration = "none";
            }
        })


    }

}


input.addEventListener("keydown",(e)=>{
    if(e.key == 'Enter') {
        todo();
    }
})