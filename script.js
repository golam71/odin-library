const myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		myLibrary.push(this);
	}
	info() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
	}
}

const book1 = new Book("The Book of Optics", "Ibn al-Haytham", 400, true);
const book2 = new Book(
	"The Canon of Medicine",
	"Avicenna (Ibn Sina)",
	600,
	false,
);
const book3 = new Book("On the Heavens", "Al-Farabi", 300, false);
const book4 = new Book("Astronomical Tables", "Al-Zarqali", 500, true);
const book5 = new Book(
	"The Astronomical Works",
	"Nasir al-Din al-Tusi",
	450,
	false,
);

function addBookToLibrary(book) {
	const container = document.createElement("div");
	container.className = "container";

	const title = document.createElement("p");
	title.className = "title";
	title.innerText = book.title;

	const author = document.createElement("p");
	author.className = "author";
	author.innerText = book.author;

	const pages = document.createElement("p");
	pages.className = "pages";
	pages.innerText = `${book.pages} pages`;

	if (book.read) {
		container.classList.add("read");
	}

	container.appendChild(title);
	container.appendChild(author);
	container.appendChild(pages);
	// container.appendChild(read);

	document.getElementById("root").appendChild(container);

	// Reattach the event listener for the new container
	container.addEventListener("click", () => {
		console.log(container);
		container.classList.toggle("read");
	});
}

const root = document.getElementById("root");

for (const book of myLibrary) {
	addBookToLibrary(book);
}

// form part
const dialog = document.getElementsByTagName("dialog")[0];
const body = document.getElementsByTagName("body")[0];

document.getElementById("add-button").addEventListener("click", () => {
	dialog.showModal();
	dialog.classList.add("show");
	dialog.classList.remove("hide");
	body.classList.add("blur");
});

document.getElementById("submit").addEventListener("click", () => {
	const name = document.getElementById("name").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").checked;

	const book = new Book(name, author, pages, read);
	addBookToLibrary(book);
	dialog.classList.remove("show");
	dialog.classList.add("hide");
	body.classList.remove("blur");

	setTimeout(() => {
		dialog.close();
	}, 400);
});
