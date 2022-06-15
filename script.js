const selecionarItem = (el) => document.querySelector(el);
// A função acima ativa a funcionalidade do DOM "querySelector()"

const selecionarTodosItens = (el) => document.querySelectorAll(el);
// A função acima ativa a funcionalidade do DOM "querySelectorAll()"

const modalQt = 1;

pizzaJson.map((pizza, index) => {
  let pizzaItem = selecionarItem(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);
  // Neste comando,configurei para que houvesse um atributo chamado data-key e o index correspondente, para que eu saiba em qual item estou clicando.

  pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
  // Neste comando acima, utilizei para inserir a imagem nos cards

  pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
  // Neste comando acima, fiz a inserção do nome do produto

  pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;
  // Neste comando acima, fiz a inserção da descrição do produto

  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${pizza.price.toFixed(2)}`;
  // Neste comando acima, fiz a inserção do preçp do produto

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    // Neste comando acima, fiz com que o evento padrão ao ser clicado na tag 'A' do HTML, não fosse executado.

    let key = e.target.closest(".pizza-item").getAttribute("data-key");
    // Neste comando acima, fiz com que ao clicar em algum card de pizza, ele fosse identificado e conseguisse pegar o atributo para identificar a pizza clicada corretamente.

    selecionarItem(".pizzaWindowArea").style.opacity = 0.5;
    selecionarItem(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      selecionarItem(".pizzaWindowArea").style.opacity = 1;
    }, 200);
    // Neste bloco de código acima, fiz com que o modal que aparece quando clicamos em alguma pizza, seja aberto e juntamente dele, exista um efeito de transição leve ao abrir.
    //Utilizei o style.display = 'flex' pois este item mencionado, já existia! Apenas tornei que ele ficasse visível.

    selecionarItem(".pizzaBig img").src = pizzaJson[key].img;
    selecionarItem(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    selecionarItem(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    selecionarItem(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[
      key
    ].price.toFixed(2)}`;

    selecionarItem(".pizzaInfo--size.selected").classList.remove("selected");

    selecionarTodosItens(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    selecionarItem(".pizzaInfo--qt").innerHTML = modalQt;
  });
  // Neste comando acima, fiz com que o evento de clicar na tag HTML "a", não fosse executada.



  selecionarItem(".pizza-area").append(pizzaItem);
});

//Eventos relacionados ao modal

function closeModal() {
  selecionarItem(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    selecionarItem(".pizzaWindowArea").style.display = "none";
  }, 500);
}
