const funcSel=()=>{
    let msg = document.getElementById("msgSmile");
    let ele = document.getElementById("smile");
    let s = ele.options[ele.selectedIndex].text;
    console.log(s)
    msg.value += s;

    }



const funSumbit=()=>{
    clear();
    alert("success!!");
}

const clear=()=>{
    document.getElementById("smile").value ="";
    document.getElementById("msgSmile").value ="";
    document.getElementsByClassName("input1").value ="";
}

