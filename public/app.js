const btnLoad = document.getElementById("btnLoad");
const booksList = document.getElementById("booksList");
const bookDetails = document.getElementById("bookDetails");

btnLoad.addEventListener("click", async () => {
  booksList.innerHTML = "";
  bookDetails.textContent = "Loading...";

  const res = await fetch("/api/books");
  const json = await res.json();

  const books = json.data || [];
  bookDetails.textContent = "Click a book to see details.";

  books.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = `${b.title} ${Number(b.priceAUD).toFixed(2)} AUD`;

    li.addEventListener("click", () => loadBook(b.id));
    booksList.appendChild(li);
  });
});

async function loadBook(id) {
  bookDetails.textContent = "Loading...";
  const res = await fetch(`/api/books/${id}`);
  const json = await res.json();

  if (!json.data) {
    bookDetails.textContent = "Book not found.";
    return;
  }

  const b = json.data;
  bookDetails.innerHTML = `
    <div><b>Title:</b> ${b.title}</div>
    <div><b>Author:</b> ${b.author}</div>
    <div><b>Year:</b> ${b.year}</div>
    <div><b>Genre:</b> ${b.genre}</div>
    <div style="margin-top:8px;"><b>Summary:</b> ${b.summary}</div>
    <div style="margin-top:8px;"><b>Price (AUD):</b> ${Number(b.priceAUD).toFixed(2)}</div>
  `;
}
