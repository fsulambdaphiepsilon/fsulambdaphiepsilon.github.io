var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        const slideWidth = slide.clientWidth;
        slide.style.transform = `translateX(-${index * slideWidth}px)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', function () {
        this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
    });
});

function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Activate the clicked tab
    const activeTab = document.querySelector(`.tab[onclick="showTab('${tabId}')"]`);
    activeTab.classList.add('active');
}

// Show the default tab on page load
showTab('tab1');