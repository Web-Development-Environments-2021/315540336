const funcSel=()=>{
    let msg = document.getElementById("msgSmile");
    let ele = document.getElementById("smile");
    let s = ele.options[ele.selectedIndex].text;
    console.log(s)
    msg.value += s;

    }



const funSumbit=()=>{
   clear();
}
const clear=()=>{
    document.getElementById("Subject").value ="";
    document.getElementById("msgSmile").value ="";
    document.getElementById("fname").value ="";
    document.getElementById("lname").value ="";
    document.getElementById("mail").value ="";

    
}

