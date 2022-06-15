function calculate(){
    var r = document.getElementById('radius').value;
    var cmf = 2 * 3.1415 * r;
    var area = 2 * r * r;
    document.getElementById('ans').innerHTML = cmf;
    document.getElementById('answer').innerHTML = area;
}
function drawCircle() {
    var canvas = document.getElementById("myCanvas");
    var radius = document.getElementById("getRadius").value;
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 75, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
function clearArea(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
