window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
    }, 7000);
    const to = new Date('2023-05-12T00:00:00');
    interval = setInterval(update, 1000, to)
}

let interval = null;
document.querySelector('button').addEventListener('click', () => {
    let to = document.querySelector('input').value;
    if (!to) {
        alert('Defina uma data no formato m-d-aaaa hh:m:s')
        return false
    }
    to = new Date(to);
    interval = setInterval(update, 1000, to)
})
function update(to) {
    to = new Date(to);
    let from = new Date();
    diff = to - from;
    if (diff > 0) {
        let days = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24)),
            hours = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24),
            min = setTwoDigit(Math.floor(diff / 1000 / 60) % 60),
            sec = setTwoDigit(Math.floor(diff / 1000) % 60)
        document.querySelector('#days').innerText = days
        document.querySelector('#hours').innerText = hours
        document.querySelector('#min').innerText = min
        document.querySelector('#sec').innerText = sec
    } else {
        clearInterval(interval);
        document.querySelector('body').classList.add('alert')
        document.getElementById('botao').removeAttribute('disabled');

    }


}

function setTwoDigit(argument) {
    return argument > 9 ? argument : '0' + argument;
}

