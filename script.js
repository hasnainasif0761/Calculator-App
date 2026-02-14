function solve(val){
    let inp = document.getElementById('res');
    inp.value += val;
}

function Result(){
    let num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x','*'));
        document.getElementById('res').value = num2;
    } catch (error) {
        document.getElementById('res').value = "Error";
    }
}

function cleared(){
    document.getElementById('res').value = '';
}

function back(){
    let inp = document.getElementById('res');
    inp.value = inp.value.slice(0,-1);
}

document.addEventListener('keydown',(event)=>{
    const key = event.key;
    const validKey = '0123456789/-+*%.';
    if(validKey.includes(key)){
        solve(key == '*' ? 'x' : key);
    }else if(key == 'Enter'){
        Result();
    }else if(key == 'Backspace'){
        back();
    }else if(key.toLowerCase() == 'c'){
        cleared();
    }
})
