// ===================================
// SMOOTH SCROLLING & ACTIVE LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile navbar if open
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        }
    });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[class*="animate-"]').forEach(el => {
    observer.observe(el);
});

// ===================================
// SKILL CARDS HOVER EFFECT
// ===================================

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// PROGRESS BAR ANIMATION
// ===================================

const animateProgressBars = () => {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
};

// Trigger animation when skills section is in view
const skillsSection = document.querySelector('.skills-section');
let skillsAnimated = false;

if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateProgressBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// ===================================
// FORM HANDLING
// ===================================

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    
    // Simple form validation
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-danger');
        } else {
            input.classList.remove('border-danger');
        }
    });
    
    if (isValid) {
        // Show success message
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check-circle me-2"></i>Message Sent!';
        button.disabled = true;
        button.style.background = 'linear-gradient(135deg, #22c55e, #10b981)';
        
        // Clear form
        setTimeout(() => {
            form.reset();
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 2000);
    }
}

// ===================================
// PROJECT CARDS HOVER EFFECT
// ===================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        const image = this.querySelector('.project-image-wrapper');
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        const image = this.querySelector('.project-image-wrapper');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ===================================
// REFLECTION CARDS STAGGER ANIMATION
// ===================================

const reflectionCards = document.querySelectorAll('.reflection-card');
reflectionCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
});

// ===================================
// COUNTER ANIMATION
// ===================================

const animateCounters = () => {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
};

// ===================================
// PROFILE IMAGE INTERACTION
// ===================================

const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.2) drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
}

// ===================================
// BUTTON RIPPLE EFFECT
// ===================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Remove existing ripples
        const existingRipple = this.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        this.appendChild(ripple);
    });
});

// ===================================
// RESPONSIVE MENU CLOSE ON LINK CLICK
// ===================================

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// ===================================
// SMOOTH SCROLL OFFSET FOR FIXED NAVBAR
// ===================================

const handleAnchorLink = () => {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const offset = 80; // navbar height
                const top = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
};

window.addEventListener('load', handleAnchorLink);
window.addEventListener('hashchange', handleAnchorLink);

// ===================================
// LAZY LOAD IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===================================
// CONTACT ITEM HOVER EFFECT
// ===================================

document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// DYNAMICALLY SET YEAR IN FOOTER
// ===================================

const currentYear = new Date().getFullYear();
document.querySelectorAll('footer').forEach(footer => {
    const text = footer.innerHTML;
    footer.innerHTML = text.replace(/\d{4}/, currentYear);
});

// ===================================
// ADD LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const toggler = document.querySelector('.navbar-toggler');
            toggler.click();
        }
    }
});

// ===================================
// TOUCH SUPPORT FOR ANIMATIONS
// ===================================

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    // Swipe left to go to next section
    if (touchStartX - touchEndX > 50) {
        console.log('Swiped left');
    }
    
    // Swipe right to go to previous section
    if (touchEndX - touchStartX > 50) {
        console.log('Swiped right');
    }
});

// ===================================
// SCROLL ANIMATION INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
});

// ===================================
// PERFORMANCE: DEBOUNCE FUNCTION
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Scroll event handler
}, 100));

// ===================================
// TOOLTIP INITIALIZATION (if using Bootstrap tooltips)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    try {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    } catch (e) {
        // Tooltips not needed
    }
});

console.log('Portfolio script loaded successfully!');
