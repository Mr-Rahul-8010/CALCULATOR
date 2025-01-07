let input = document.getElementById("inp");
let buttons = document.querySelectorAll(".btn");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let divide = document.getElementById("divide");
let mul = document.getElementById("multi");
let sub = document.getElementById("subt");
let add = document.getElementById("add");
let percent = document.getElementById("percent");


buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        let value = button.getAttribute('data-value');
        input.value += value;
    });
});

clear.addEventListener("click",()=>{
    input.value = "";
});

add.addEventListener("click",()=>{
    let value = add.getAttribute('data-value');
    input.value += value;
});

sub.addEventListener("click",()=>{
    let value = subt.getAttribute('data-value');
    input.value += value;
});

mul.addEventListener("click",()=>{
    let value = multi.getAttribute('data-value')
    input.value += value;
});

divide.addEventListener("click",()=>{
    let value = divide.getAttribute('data-value')
    input.value += value;
});

percent.addEventListener("click",()=>{
    let value = percent.getAttribute('data-value')
    input.value += value;

     let value1 = input.value;
    if (value1) {
        input.value = (parseFloat(value1) / 100).toString();
    }
});

// percent.addEventListener("click", () => {
//     let value = input.value;
//     if (value) {
//         input.value = (parseFloat(value) / 100).toString();
//     }
// });

equal.addEventListener("click",()=>{
    try{
        input.value = eval(input.value);
    }catch (e) {
        input.value = "ERROR";
    }
});
