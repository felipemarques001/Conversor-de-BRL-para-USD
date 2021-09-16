let button = document.getElementById('button');
let url = `https://economia.awesomeapi.com.br/usd-brl`;
let footer = document.getElementById('footer');
button.addEventListener('click', () =>{
    fetch(url)
        .then((response) => {
            return response.json();
        })
            .then((data) => {
                let valor = document.getElementById('reais').value;
                footer.innerHTML = `<section id="brl">
                <p>BRL ${valor}</p> 
                <i class="fas fa-money-bill-wave-alt"></i>
            </section>
            <i id="equal" class="fas fa-equals"></i>
            <section id="usd">
                <p>USD ${Math.round(data[0].high * valor)},00</p>
                <i class="fas fa-hand-holding-usd"></i>
            </section>`
            })
})