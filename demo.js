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
    document.getElementById("smile").value ="";
    document.getElementById("msgSmile").value ="";
    document.getElementById("fname").value ="";
    document.getElementById("lname").value ="";
    document.getElementById("mail").value ="";

    
}

$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: 'http://onesignal.github.io/emoji-picker/lib/img/',
      popupButtonClasses: 'fa fa-smile-o'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });