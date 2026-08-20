// Sélectionner toutes les cartes de projet
const projectCards = document.querySelectorAll('.card');

// Créer un observateur qui détecte quand un élément entre dans l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si l'élément est visible à l'écran
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        }
    });
}, {
    threshold: 0.1 // Déclenche quand 10% de l'élément est visible
});

// Appliquer l'observateur à chaque carte
projectCards.forEach((card) => {
    observer.observe(card);
});

// Animation de défilement fluide pour le menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});