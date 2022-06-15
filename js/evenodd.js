function even_odd(){
    var num =   document.getElementById('number').value;

    if ( num % 2){
        document.getElementById('ans').innerHTML = `
        <p style='font-size: 60px; text-shadow: 1px 3px #000, 0 0 25px #000, 0 2px 15px yellow;'>
            ${num}
        </p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color: black;'> is an </p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color:blue;'> Odd</p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color: black;'> number </p>
        `;
    }
    else{
        document.getElementById('ans').innerHTML = `
        <p style='font-size: 60px; text-shadow: 1px 3px #000, 0 0 25px #000, 0 2px 15px yellow;'>
            ${num}
        </p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color: black;'> is an </p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color:green;'> Even</p>
        <p style='color: transparent; text-shadow:none;'>_</p>
        <p style='color: black;'> number </p>
        `;
    }
}
