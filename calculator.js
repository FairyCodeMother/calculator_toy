let newValue;
let oldValue = parseInt(document.querySelector('.result'));
let result = document.querySelector('.result');
document.querySelector('.container').addEventListener('click', function(event) {
    newValue = event.target.innerText;
    oldValue = result.innerText;
    if(isNaN(newValue)) {        
        if (newValue===".") {
            console.log(`last: ${oldValue.charAt(oldValue.length-1)}; new val:${newValue}`);
            if(oldValue.charAt(oldValue.length-1)===".") {
                console.log("do nothing");
            } else {
                console.log("new: "+oldValue);
                result.innerText = oldValue.concat(newValue);
            }
        } else if (newValue==="C") {
            console.log("clear");
            result.innerText = "0"
        } else if (newValue==="←") {
            console.log("back");
            if(oldValue.length===1) {
                result.innerText = 0;
            } else {
                result.innerText = oldValue.substring(0, oldValue.length-1);
            }
        } else if (newValue === "=") {
            console.log("equal");
            oldValue = oldValue.replace("÷", "/").replace("×", "*");
            result.innerText = eval(oldValue);
        } else {
            console.log("math");
            if('÷×-+'.includes(oldValue.charAt(oldValue.length-1))) {
                result.innerText = oldValue.replace(/[-+÷×]*$/, newValue);
            } else {
                result.innerText = oldValue.concat(newValue);
            }
        }
    } else {
        console.log("#");
        if(oldValue==="0") {
            result.innerText = newValue;
        } else {
            result.innerText = oldValue.concat(newValue);
        }        
    }
})



