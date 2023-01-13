function changeColor () {
    let hexNumbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexCode = '';

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hexNumbers.length)
        hexCode += hexNumbers[random_index];
    }
    document.getElementById('hex-code').innerHTML = '#' + hexCode;
    document.getElementsByTagName('body')[0].style.background = '#' + hexCode;

    


}