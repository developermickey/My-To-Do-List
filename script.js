function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("textt").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must write someting");
    }else {
        document.getElementById("textnew").appendChild(li);
    }
    document.getElementById("textt").value = "";
    }