$(document).ready(function() {
    $('header button').click(function() {
    
    })
    
$('form').on('submit', function(e) {
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();
    const addTarefa = $('<li>' +novaTarefa + '</li>');


    const tabelaRaiz = document.querySelector('ul');

    tabelaRaiz.addEventListener('click', function (e) {
    if (e.target.classList.contains('checked')) {        
        
    } else {
        e.target.classList.add('checked');
            }
});
    

        $(addTarefa).appendTo('ul');
        $('#nova-tarefa').val('')

})

})






