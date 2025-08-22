var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const slides = document.querySelectorAll(".slide");
const slides1 = document.querySelectorAll(".slide1");
const slides2 = document.querySelectorAll(".slide2");
const slides3 = document.querySelectorAll(".slide3");
let currentSlide = 0;
let currentSlide1 = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;
let captionTimeout;

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

function showSlide1(index) {
    slides1.forEach((slide1, i) => {
        const slideWidth1 = slide1.clientWidth;
        slide1.style.transform = `translateX(-${index * slideWidth1}px)`;
    });
}

function nextSlide1() {
    currentSlide1 = (currentSlide1 + 1) % slides1.length;
    showSlide1(currentSlide1);
}

function prevSlide1() {
    currentSlide1 = (currentSlide1 - 1 + slides1.length) % slides1.length;
    showSlide1(currentSlide1);
}

function showSlide2(index) {
    slides2.forEach((slide2, i) => {
        const slideWidth2 = slide2.clientWidth;
        slide2.style.transform = `translateX(-${index * slideWidth2}px)`;
    });
}

function nextSlide2() {
    currentSlide2 = (currentSlide2 + 1) % slides2.length;
    showSlide2(currentSlide2);
}

function prevSlide2() {
    currentSlide2 = (currentSlide2 - 1 + slides2.length) % slides2.length;
    showSlide2(currentSlide2);
}

function showSlide3(index) {
    slides3.forEach((slide3, i) => {
        const slideWidth3 = slide3.clientWidth;
        slide3.style.transform = `translateX(-${index * slideWidth3}px)`;
    });
}

function nextSlide3() {
    currentSlide3 = (currentSlide3 + 1) % slides3.length;
    showSlide3(currentSlide3);
}

function prevSlide3() {
    currentSlide3 = (currentSlide3 - 1 + slides3.length) % slides3.length;
    showSlide3(currentSlide3);
}

function initializeSlider1() {
    if (slides1.length > 0) {
        showSlide1(0); // Show first slide
    }
}

showSlide(currentSlide);
showSlide1(currentSlide1);
showSlide2(currentSlide2);
showSlide3(currentSlide3);

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

function setupCaptionHovers() {
    const slides = document.querySelectorAll('.slide1');
    
    slides.forEach(slide => {
        const caption = slide.querySelector('.caption');
        
        if (caption) {
            // Show caption on hover
            slide.addEventListener('mouseenter', () => {
                // Clear any existing timeout
                if (captionTimeout) {
                    clearTimeout(captionTimeout);
                }
                
                // Show caption
                caption.classList.add('show');
            });
            
            // Hide caption after delay when mouse leaves
            slide.addEventListener('mouseleave', () => {
                // Set timeout to hide after 2 seconds
                captionTimeout = setTimeout(() => {
                    caption.classList.remove('show');
                }, 2000);
            });
            
            // If user hovers over caption itself, keep it visible
            caption.addEventListener('mouseenter', () => {
                if (captionTimeout) {
                    clearTimeout(captionTimeout);
                }
            });
            
            caption.addEventListener('mouseleave', () => {
                captionTimeout = setTimeout(() => {
                    caption.classList.remove('show');
                }, 2000);
            });
        }
    });
}

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

    // Initialize slider and caption hovers when tab1 is shown
    if (tabId === 'tab1') {
        setTimeout(() => {
            initializeSlider1();
            setupCaptionHovers(); // Add this line
        }, 100);
    }
}

// Show the default tab on page load

showTab('tab1');



