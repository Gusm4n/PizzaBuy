const selecionarItem = (el)=>document.querySelector(el);
// A função acima ativa a funcionalidade do DOM "querySelector()"

const selecionarTodosItens = (el)=>document.querySelector(el);
// A função acima ativa a funcionalidade do DOM "querySelectorAll()"

pizzaJson.map((pizza, index)=> {
    let pizzaItem = selecionarItem('.models .pizza-item').cloneNode(true)


    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img
    // Neste comando acima, utilizei para inserir a imagem nos cards

    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    // Neste comando acima, fiz a inserção do nome do produto

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description
    // Neste comando acima, fiz a inserção da descrição do produto

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`
    // Neste comando acima, fiz a inserção do preçp do produto



    selecionarItem('.pizza-area').append(pizzaItem)
})