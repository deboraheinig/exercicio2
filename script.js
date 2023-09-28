

const lista = document.querySelector("#lista");

for (let i = 0; i < 10; i++){
    const numero = Math.round(Math.random() * 50);

    const item = document.createElement('li');
    item.textContent = numero;

    lista.appendChild(item);
}
