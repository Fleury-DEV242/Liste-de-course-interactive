const input = document.querySelector(".input-article");
const button = document.querySelector(".btn-add");
const numberArticle = document.querySelector(".article-number");
const listArticle = document.querySelector(".list-article");

numberArticle.textContent = 0;

const addArticle = (e) => {
  if (input.value == "") {
    alert("Veuillez entrez le nom de l'article pour ajouter");
    e.preventDefault();
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
  <input id="check" type="checkbox" />
  <p class="article">${(textContent = input.value)}</p>
  `;
    li.style.textTransform = "Capitalize";
    input.value = "";

    listArticle.appendChild(li);
    numberArticle.textContent = listArticle.childElementCount;
    console.log(listArticle.childElementCount);
  }
};

button.addEventListener("click", addArticle);
