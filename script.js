/* =========================================
   KYKY'S ANIMAL SHELTER
   JAVASCRIPT
   ========================================= */


/* =========================================
   SEARCH & FILTER
   ========================================= */

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter");
const animalCards = document.querySelectorAll(".animal-card");
const noResults = document.getElementById("noResults");

let currentFilter = "all";


function filterAnimals() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    animalCards.forEach(card => {

        const animalName = card.dataset.name.toLowerCase();
        const animalType = card.dataset.type;

        const matchesSearch =
            animalName.includes(searchTerm);

        const matchesFilter =
            currentFilter === "all" ||
            animalType === currentFilter;

        if (matchesSearch && matchesFilter) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });


    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}


/* Search */

searchInput.addEventListener("input", filterAnimals);


/* Category buttons */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterAnimals();
    });

});


/* =========================================
   ADOPTION MODAL
   ========================================= */

const modal = document.getElementById("adoptionModal");
const petName = document.getElementById("petName");
const adoptionForm = document.getElementById("adoptionForm");
const successMessage = document.getElementById("successMessage");


function openModal(name) {

    petName.textContent = name;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    adoptionForm.style.display = "flex";
    successMessage.style.display = "none";

    setTimeout(() => {
        document.getElementById("applicantName").focus();
    }, 200);
}


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* Close when clicking outside modal */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeModal();
    }

});


/* Close with Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   ADOPTION FORM
   ========================================= */

adoptionForm.addEventListener("submit", (event) => {

    event.preventDefault();

    adoptionForm.style.display = "none";

    successMessage.style.display = "block";

});


/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(69, 115, 89, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   INITIALIZE
   ========================================= */

filterAnimals();