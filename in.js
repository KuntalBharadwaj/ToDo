var ine_2 = document.getElementById("iner_2");
var inpp = document.getElementById("inp");
// inpp.addEventListener('keydown',alert(inpp.value))

inpp.addEventListener('keydown', (e) => {

    if (e.key == 'Enter') {
        if (inpp.value != "") {
            if (inpp.value != ' ') {
                addtodolist();
                store();
                inpp.value = '';
            } else {
                alert("Enter Your task!!!");
            }


        }
        else {
            alert("Enter Your task!!!");
        }
    }


}
);

function addtodolist() {
    var newtask = document.createElement('div');
    newtask.classList.add("newtask");
    var spantask = document.createElement('span');

    spantask.innerHTML = inpp.value;
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('title', 'checktocomplete');
    check.addEventListener('click', (e) => {
        if (check.checked == true) {
            spantask.style.textDecoration = 'line-through';
        }
        else
            spantask.style.textDecoration = 'none';
    });


    let btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', 'delete');
    btn.setAttribute('value', 'X');
    btn.classList.add("btn");
    btn.addEventListener('click', () => {
        newtask.remove();
        check.remove();
        btn.remove();
    });
    var newdiv = document.createElement('div');
    newdiv.appendChild(check);
    newdiv.appendChild(btn);


    newtask.appendChild(spantask);
    newtask.appendChild(newdiv);
    ine_2.append(newtask);
}

function store() {
    const input = document.getElementById("inp").value;
    if (input !== "") {
      
      const values = JSON.parse(localStorage.getItem("values")) || [];
      values.push(input);
      localStorage.setItem("values", JSON.stringify(values));
      document.getElementById("inp").value = "";
    }
  }