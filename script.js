function solve(val){
    let inp = document.getElementById('res');
    inp.value += val;
}

function Result(){
    let inp = document.getElementById('res').value;
    try {
        var num2 = eval(inp.replace('x','*'));
        document.getElementById('res').value = num2
    } catch (error) {
        document.getElementById('res').textContent = "Error";
    }
}

function cleared(){
    document.getElementById('res').value = '';
}

function back(){
    let inp = document.getElementById('res');
    inp.value = inp.value.slice(0,-1)
}



