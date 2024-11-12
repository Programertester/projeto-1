// Função para alternar o estado de favorito
const favoriteIcon = document.getElementById("favorite-icon");
let isFavorited = false;
favoriteIcon.addEventListener("click", () => {
    isFavorited = !isFavorited;
    favoriteIcon.textContent = isFavorited ? "💖" : "❤";
    alert(isFavorited ? "Adicionado aos favoritos!" : "Removido dos favoritos!");
});

// Função para simular login
const loginIcon = document.getElementById("login-icon");
loginIcon.addEventListener("click", () => {
    alert("Você clicou no ícone de login!");
});

// Função para adicionar itens ao carrinho
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
let itemCount = 0;
cartIcon.addEventListener("click", () => {
    itemCount++;
    cartCount.textContent = itemCount;
    alert("Item adicionado ao carrinho! Total: " + itemCount);
});

// Funções para mover os livros
let scrollAmount = 0;
const bookContainer = document.querySelector(".book-container");

function moveRight() {
    scrollAmount += 150;
    bookContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function moveLeft() {
    scrollAmount -= 150;
    bookContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}
