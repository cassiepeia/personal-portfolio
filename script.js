// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        offset: 120,
        duration: 1000,
        once: false,
        mirror: true,
        easing: 'ease-in-out'
    });

    // Force header links to be visible
    const headerLinks = document.querySelectorAll('.nav-container .links a');
    headerLinks.forEach(link => {
        link.style.display = 'inline-block';
        link.style.visibility = 'visible';
    });
    
    // Ensure contact section header is centered
    const contactHeader = document.querySelector('#contact .section__header');
    if (contactHeader) {
        contactHeader.style.textAlign = 'center';
        contactHeader.style.width = '100%';
        contactHeader.style.display = 'block';
    }
});
    
    // Initialize sliders
    initSliders();
    
    // Initialize modals
    initModals();
    
    // Initialize popup
    initPopup();
    
    // Download CV functionality
    initDownloadCV();
    
    // Smooth scroll for navigation
    initSmoothScroll();
    
    // Add active class to navigation links on scroll
    initActiveNav();
;

// ===== MOBILE MENU =====
function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
    document.body.style.overflow = dropdown.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('dropdown');
    const hamburg = document.querySelector('.hamburg');
    
    if (dropdown.classList.contains('active') && 
        !dropdown.contains(e.target) && 
        !hamburg.contains(e.target)) {
        closeMenu();
    }
});

// ===== CERTIFICATION SLIDERS =====
function initSliders() {
    const certificates = [
        {
            title: "Salesforce Supported Virtual Internship 2025",
            issuer: "Smartbridge",
            link: "https://drive.google.com/file/d/1iJeSbxdDAN4P55g38HxMan6xNNidkhwd/view"
        },
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            link: "http://drive.google.com/file/d/1og8AdHvBVQw1t6x3ftFqZkAHuttknViw/view"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            link: "https://drive.google.com/file/d/13akHKuyuN3o-58NCINjwB63YMLYmWVVj/view"
        },
        {
            title: "Cyber Threat Management",
            issuer: "Cisco Networking Academy",
            link: "https://drive.google.com/file/d/1VMG2UeWI6WV8_sVrOeH3E5HghbYETI85/view"
        },
        {
            title: "AWS Academy Cloud Architecting",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/1n95hU4hqIWGCC7OBGSdcssREgwHlfUZb/view"
        },
        {
            title: "AWS Academy Cloud Developing",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/1w4sluWw2tMZODXxnfAMYgHi5ha3o0u9C/view"
        },
        {
            title: "AWS Academy Cloud Foundations",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/13fNv7G2SBOU5_sBBQc_GFmFnNkqFDZZJ/view"
        },
        {
            title: "AWS Academy Cloud Operations",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/1c2hTTsZIEfsUnsaZ_nrwxlEyRVwaTEjJ/view"
        },
        {
            title: "HTML Certification",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CT-JYSG6GQH"
        },
        {
            title: "SQL Intermediate",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CC-A4SFMW7B"
        },
        {
            title: "Introduction to SQL",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CC-ICLEHCDP"
        },
        {
            title: "PHP Certification",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CT-ZDJBLBGG"
        },
        {
            title: "Introduction to JavaScript",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CC-RW7HGR3Q"
        },
        {
            title: "CSS Certification",
            issuer: "Sololearn",
            link: "https://www.sololearn.com/certificates/CT-4UFGXPZK"
        },
        {
            title: "Design Craft: Mastering UI/UX",
            issuer: "University of Nueva Caceres",
            link: "https://drive.google.com/file/d/15-cHTZkY82yG-DFa6KBquHTz29fKj_y-/view"
        },
        {
            title: "Business Analysis Foundations",
            issuer: "LinkedIn Learning",
            link: "https://drive.google.com/file/d/1IdfSfQFMRNNcpkycNY9vK0tybXCEAT9_/view"
        },
        {
            title: "Ethics in the Age of Generative AI",
            issuer: "LinkedIn Learning",
            link: "https://drive.google.com/file/d/1S9Q4hoeu_pvnh57o8s23HcCgny_ZDJwG/view"
        },
        {
            title: "Generative AI: The Evolution",
            issuer: "LinkedIn Learning",
            link: "https://drive.google.com/file/d/1Pnlcs3wLZ2N5-gAR92bQlRGWxfAZRzCl/view"
        },
        {
            title: "Introduction to Artificial Intelligence",
            issuer: "LinkedIn Learning",
            link: "https://drive.google.com/file/d/1E5OalSML1qygo59JhejJqkHZAsdGFsFC/view"
        },
        {
            title: "Learning Microsoft 365 Copilot",
            issuer: "LinkedIn Learning",
            link: "https://drive.google.com/file/d/164FcQpsrDOST83okcMle4KSBTyfNFLVO/view"
        }
    ];

    const badges = [
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            link: "https://drive.google.com/file/d/1jh2p8_CXbkNDAEGUA-Ug2ZT6QD63MfHW/view"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            link: "https://drive.google.com/file/d/1EgPqf1D8PnyMF0Am_8KxG59Hht2U22oD/view"
        },
        {
            title: "Cyber Threat Management",
            issuer: "Cisco Networking Academy",
            link: "https://drive.google.com/file/d/12WRhHE-VPEdLLhp-OLMlCtU3tio-6LD1/view"
        },
        {
            title: "AWS Academy Cloud Architecting",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/1Z8QIUTJjhPu_ayRUp2XtSbRwyOdUQQyB/view"
        },
        {
            title: "AWS Academy Cloud Foundations",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/1yhQFj9W4Ozy2J-u8WGaHtn3yJUxZHPke/view"
        },
        {
            title: "AWS Academy Cloud Operations",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/12_neskmz-gYFph9whGciDThnYxb9lw35/view"
        },
        {
            title: "AWS Academy Cloud Developing",
            issuer: "AWS Academy",
            link: "https://drive.google.com/file/d/10iuoTbJL6Cgou4FdxXVXe7cqZxAAVJYf/view"
        }
    ];

    // Populate certificate slider
    const certSlider = document.getElementById('certSlider');
    if (certSlider) {
        certSlider.innerHTML = '';
        certificates.forEach((cert, index) => {
            const slide = createCertSlide(cert, index === 0);
            certSlider.appendChild(slide);
        });
    }

    // Populate badge slider
    const badgeSlider = document.getElementById('badgeSlider');
    if (badgeSlider) {
        badgeSlider.innerHTML = '';
        badges.forEach((badge, index) => {
            const slide = createCertSlide(badge, index === 0);
            badgeSlider.appendChild(slide);
        });
    }
}

function createCertSlide(item, isActive) {
    const slide = document.createElement('div');
    slide.className = `certs__item ${isActive ? 'active' : ''}`;
    slide.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.issuer}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">View Credential</a>
    `;
    return slide;
}

// Slider navigation functions
function nextSlide(sliderId) {
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const items = container.querySelectorAll('.certs__item');
    if (items.length === 0) return;
    
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add('active');
}

function prevSlide(sliderId) {
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const items = container.querySelectorAll('.certs__item');
    if (items.length === 0) return;
    
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    items[activeIndex].classList.add('active');
}

// ===== MODAL FUNCTIONS =====
function initModals() {
    // Innowave Modal
    const innowaveModal = document.getElementById('innowaveModal');
    const deanslisterModal = document.getElementById('deanslisterModal');
    
    // You can add buttons to open modals if needed
    
    // Close buttons
    document.querySelectorAll('.cert-modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.cert-modal');
            closeModal(modal);
        });
    });
    
    // Click outside to close
    document.querySelectorAll('.cert-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Navigation arrows
    document.querySelectorAll('.cert-prev').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.cert-modal');
            changeSlide(modal, -1);
        });
    });
    
    document.querySelectorAll('.cert-next').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.cert-modal');
            changeSlide(modal, 1);
        });
    });
    
    // Dots
    document.querySelectorAll('.cert-dot').forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const modal = this.closest('.cert-modal');
            const slides = modal.querySelectorAll('.cert-slide');
            const dots = modal.querySelectorAll('.cert-dot');
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeModal = document.querySelector('.cert-modal[style*="display: block"]');
        if (!activeModal) return;
        
        if (e.key === 'Escape') {
            closeModal(activeModal);
        } else if (e.key === 'ArrowLeft') {
            changeSlide(activeModal, -1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(activeModal, 1);
        }
    });
}

function openModal(modal) {
    if (!modal) return;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset to first slide
    const slides = modal.querySelectorAll('.cert-slide');
    const dots = modal.querySelectorAll('.cert-dot');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === 0);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === 0);
    });
}

function closeModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlide(modal, direction) {
    const slides = modal.querySelectorAll('.cert-slide');
    const dots = modal.querySelectorAll('.cert-dot');
    
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    let newIndex = (currentIndex + direction + slides.length) % slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

// ===== IMAGE POPUP =====
function initPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupImage = document.getElementById('popupImage');
    const closePopup = document.getElementById('closePopup');
    
    if (!popupOverlay || !popupImage || !closePopup) return;
    
    // Open popup on work card click
    document.querySelectorAll('.works__card').forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                popupImage.src = img.src;
                popupImage.alt = img.alt;
                popupOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close popup
    closePopup.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            popupOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== DOWNLOAD CV =====
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadBtn');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function() {
        const cvUrl = 'Cassiopeia Obelidor CV.pdf'; // Update with your CV path
        
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Cassiopeia_Obelidor_CV.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Show success message
        showNotification('CV download started!');
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== ACTIVE NAVIGATION =====
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-container .links a, .dropdown .links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== NOTIFICATION =====
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--gradient-1);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-container .links a.active {
        color: var(--primary-light);
    }
    
    .nav-container .links a.active::before {
        width: 100%;
    }
`;
document.head.appendChild(style);