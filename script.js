function helloWord(){
    var inputs = document.getElementsByTagName('input');
    var input = inputs [0];
    var nome  = input.value;
    window.alert("Hello Word, " + nome);
    input.value='';
}