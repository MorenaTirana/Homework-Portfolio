function calculate_square(){
    var s = document.getElementById('side').value;
    var res = Math.sqrt(2) * Number(s);
    document.getElementById('answer').innerHTML = res;
}

function calculate_rectangle(){
    var l = document.getElementById('length').value;
    var w = document.getElementById('width').value;
    var res = Math.sqrt((Number(l) * Number(l)) + ((Number(w) * Number(w))));
    document.getElementById('ans').innerHTML = res;
}
