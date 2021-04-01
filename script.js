function helloWord(){
    var inputs = document.getElementsByTagName('input');
    var input = inputs [0];
    var nome  = input.value.trim();

    if (nome === '' ) {
        alert('O nome está vazio, por favor insira o nome.');
        return;
    }
    window.alert("Hello Word, " + nome);
    input.value='';
}