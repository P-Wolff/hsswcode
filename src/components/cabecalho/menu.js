
window.addEventListener("scroll", function() {
    let cabecalho = document.querySelector('#cabecalho')
    cabecalho.classList.toggle('rolagem', window.scroll > 500)
})