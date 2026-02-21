// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Hide loader after page load
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// ===== DATABASE (LocalStorage) =====
class Database {
    constructor() {
        this.init();
    }

    init() {
        // Initialize collections if they don't exist
        if (!localStorage.getItem('services')) {
            this.seedServices();
        }
        if (!localStorage.getItem('testimonials')) {
            this.seedTestimonials();
        }
        if (!localStorage.getItem('portfolio')) {
            this.seedPortfolio();
        }
        if (!localStorage.getItem('blog')) {
            this.seedBlog();
        }
        if (!localStorage.getItem('faqs')) {
            this.seedFAQs();
        }
        if (!localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', JSON.stringify([]));
        }
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]));
        }
        if (!localStorage.getItem('subscribers')) {
            localStorage.setItem('subscribers', JSON.stringify([]));
        }
    }

    seedServices() {
        const services = [
            {
                id: 1,
                title: 'Complete Web Development',
                description: 'Full-stack web development with modern technologies. HTML5, CSS3, JavaScript, React, Node.js, and more.',
                price: 99.99,
                category: 'web',
                icon: 'fa-code',
                features: [
                    'Responsive Design',
                    'Database Integration',
                    'User Authentication',
                    'Payment Gateway',
                    'SEO Optimization',
                    '1 Month Support'
                ],
                featured: true
            },
            {
                id: 2,
                title: 'E-commerce Website',
                description: 'Custom e-commerce solution with product management, cart, and secure checkout.',
                price: 239.99,
                category: 'ecommerce',
                icon: 'fa-shopping-cart',
                features: [
                    'Product Catalog',
                    'Shopping Cart',
                    'Payment Integration',
                    'Order Management',
                    'Inventory System',
                    'Customer Accounts'
                ],
                featured: true
            },
            {
                id: 3,
                title: 'Business Website',
                description: 'Professional business website to establish your online presence.',
                price: 109.99,
                category: 'business',
                icon: 'fa-briefcase',
                features: [
                    '5 Pages Design',
                    'Contact Form',
                    'Google Maps',
                    'Social Media Integration',
                    'Blog Setup',
                    'Analytics Setup'
                ],
                featured: false
            },
            {
                id: 4,
                title: 'Custom Web Application',
                description: 'Tailored web applications with complex functionality and custom features.',
                price: 509.99,
                category: 'custom',
                icon: 'fa-cogs',
                features: [
                    'Custom Functionality',
                    'Database Design',
                    'API Development',
                    'Admin Dashboard',
                    'User Management',
                    'Advanced Security'
                ],
                featured: true
            },
            {
                id: 5,
                title: 'Website Redesign',
                description: 'Modern redesign of your existing website with improved UX/UI.',
                price: 79.99,
                category: 'design',
                icon: 'fa-paint-brush',
                features: [
                    'UI/UX Analysis',
                    'Modern Design',
                    'Mobile Optimization',
                    'Speed Optimization',
                    'Content Migration',
                    'SEO Improvements'
                ],
                featured: false
            },
            {
                id: 6,
                title: 'API Development',
                description: 'RESTful API development for your web or mobile applications.',
                price: 599.99,
                category: 'api',
                icon: 'fa-plug',
                features: [
                    'RESTful Design',
                    'Authentication',
                    'Documentation',
                    'Rate Limiting',
                    'Testing Suite',
                    'Deployment Support'
                ],
                featured: false
            }
        ];
        localStorage.setItem('services', JSON.stringify(services));
    }

    seedTestimonials() {
        const testimonials = [
            {
                id: 1,
                clientName: 'John Smith',
                company: 'TechStart',
                rating: 5,
                text: 'Amazing work! The website exceeded my expectations. Fast delivery and great communication throughout the project.',
                avatar: 'JS'
            },
            {
                id: 2,
                clientName: 'Sarah Johnson',
                company: 'Fashion Hub',
                rating: 5,
                text: 'Professional, talented, and reliable. Created a stunning e-commerce site that increased our sales by 200%. Highly recommended!',
                avatar: 'SJ'
            },
            {
                id: 3,
                clientName: 'Michael Brown',
                company: 'Brown Consulting',
                rating: 5,
                text: 'Excellent work on our corporate website. The design is modern and the code is clean. Will definitely work again.',
                avatar: 'MB'
            },
            {
                id: 4,
                clientName: 'Emily Davis',
                company: 'Creative Agency',
                rating: 5,
                text: 'Best web developer on Fiverr! Understood exactly what we needed and delivered ahead of schedule.',
                avatar: 'ED'
            }
        ];
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    seedPortfolio() {
        const portfolio = [
            {
                id: 1,
                title: 'E-commerce Fashion Store',
                category: 'ecommerce',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
                description: 'Full-featured fashion e-commerce with payment integration',
                 liveLink: 'https://z-brands-ecommernce-store.netlify.app/' // Add this
            },
            
            {
                id: 2,
                title: 'Corporate Business Site',
                category: 'business',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
                description: 'Modern corporate website with CMS integration'
            },
            {
                id: 3,
                title: 'Real Estate Platform',
                category: 'webapp',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
                description: 'Property listing platform with search and filters'
            },
            {
                id: 4,
                title: 'Restaurant Website',
                category: 'business',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
                description: 'Online ordering system for restaurant'
            }
        ];
        
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }

    seedBlog() {
        const blog = [
            {
                id: 1,
                title: '10 Tips for a Successful Website',
                excerpt: 'Learn the key elements that make a website successful and convert visitors into customers.',
                date: '2025-03-15',
                author: 'Admin',
                image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600'
            },
            {
                id: 2,
                title: 'Why Your Business Needs a Mobile-Friendly Site',
                excerpt: 'With mobile traffic exceeding desktop, having a responsive design is crucial for success.',
                date: '2025-03-10',
                author: 'Admin',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600'
            },
            {
                id: 3,
                title: 'SEO Best Practices for 2025',
                excerpt: 'Stay ahead of the competition with these latest SEO techniques and strategies.',
                date: '2025-03-05',
                author: 'Admin',
                image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600'
            }
        ];
        localStorage.setItem('blog', JSON.stringify(blog));
    }

    seedFAQs() {
        const faqs = [
            {
                id: 1,
                question: 'How long does it take to complete a website?',
                answer: 'The timeline depends on the complexity of the project. A simple business website typically takes 1-2 weeks, while e-commerce sites may take 2-4 weeks.'
            },
            {
                id: 2,
                question: 'What technologies do you use?',
                answer: 'I use modern technologies including HTML5, CSS3, JavaScript, React, Node.js, Python Flask, and various databases depending on project requirements.'
            },
            {
                id: 3,
                question: 'Do you provide hosting and domain assistance?',
                answer: 'Yes, I can help you set up hosting and domain, and even handle the deployment of your website.'
            },
            {
                id: 4,
                question: 'What if I need changes after the project is done?',
                answer: 'I provide 30 days of free support after project completion. For additional changes, we can discuss maintenance packages.'
            },
            {
                id: 5,
                question: 'Do you offer SEO services?',
                answer: 'Yes, all my websites are built with SEO best practices in mind. I also offer dedicated SEO optimization as an add-on service.'
            }
        ];
        localStorage.setItem('faqs', JSON.stringify(faqs));
    }

    // CRUD Operations
    get(collection) {
        return JSON.parse(localStorage.getItem(collection)) || [];
    }

    getById(collection, id) {
        const items = this.get(collection);
        return items.find(item => item.id === id);
    }

    add(collection, item) {
        const items = this.get(collection);
        item.id = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
        item.createdAt = new Date().toISOString();
        items.push(item);
        localStorage.setItem(collection, JSON.stringify(items));
        return item;
    }

    update(collection, id, updates) {
        const items = this.get(collection);
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updates, updatedAt: new Date().toISOString() };
            localStorage.setItem(collection, JSON.stringify(items));
            return items[index];
        }
        return null;
    }

    delete(collection, id) {
        const items = this.get(collection);
        const filtered = items.filter(item => item.id !== id);
        localStorage.setItem(collection, JSON.stringify(filtered));
    }

    query(collection, predicate) {
        const items = this.get(collection);
        return items.filter(predicate);
    }
}

// Initialize database
const db = new Database();

// ===== UI RENDERING =====
function renderServices() {
    const services = db.get('services');
    const grid = document.getElementById('servicesGrid');
    
    grid.innerHTML = services.map(service => `
        <div class="service-card" data-aos="fade-up">
            ${service.featured ? '<span class="featured-badge">Featured</span>' : ''}
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(f => `
                    <li><i class="fas fa-check-circle"></i> ${f}</li>
                `).join('')}
            </ul>
            <div class="service-price">$${service.price} <span>starting at</span></div>
            <button class="btn btn-primary" style="width: 100%;" onclick="selectService(${service.id})">Select Package</button>
        </div>
    `).join('');
}

function renderPortfolio() {
    const portfolio = db.get('portfolio');
    const grid = document.getElementById('portfolioGrid');
    
    grid.innerHTML = portfolio.map(item => `
        <div class="portfolio-item" data-aos="zoom-in">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p style="margin-top: 10px; font-size: 0.9rem;">Category: ${item.category}</p>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const testimonials = db.get('testimonials');
    const grid = document.getElementById('testimonialsGrid');
    
    grid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card" data-aos="fade-up">
            <div class="client-info">
                <div class="client-avatar">${t.avatar}</div>
                <div class="client-name">
                    <h4>${t.clientName}</h4>
                    <p>${t.company}</p>
                </div>
            </div>
            <div class="rating">
                ${Array(t.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
        </div>
    `).join('');
}

function renderBlog() {
    const blog = db.get('blog');
    const grid = document.getElementById('blogGrid');
    
    grid.innerHTML = blog.map(post => `
        <div class="blog-card" data-aos="fade-up">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

function renderFAQs() {
    const faqs = db.get('faqs');
    const container = document.getElementById('faqContainer');
    
    container.innerHTML = faqs.map(faq => `
        <div class="faq-item" onclick="toggleFAQ(this)">
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

function populateServiceSelect() {
    const services = db.get('services');
    const select = document.getElementById('orderService');
    
    select.innerHTML = '<option value="">Choose a service</option>' + 
        services.map(s => `<option value="${s.id}" data-price="${s.price}">${s.title} - $${s.price}</option>`).join('');
}

// ===== EVENT HANDLERS =====
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleFAQ(element) {
    element.classList.toggle('active');
}

function selectService(serviceId) {
    const service = db.getById('services', serviceId);
    if (service) {
        openOrderModal();
        // Pre-select the service in dropdown
        setTimeout(() => {
            const select = document.getElementById('orderService');
            select.value = serviceId;
        }, 100);
    }
}

function openOrderModal() {
    document.getElementById('orderModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== FORM SUBMISSIONS with EmailJS =====
function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = {
        name: form.querySelector('[type="text"]').value,
        email: form.querySelector('[type="email"]').value,
        service: form.querySelector('select').value,
        message: form.querySelector('textarea').value,
        to_email: 'zobikhani961@gmail.com',
        reply_to: form.querySelector('[type="email"]').value,
        date: new Date().toLocaleString()
    };
    
    // Save to database
    db.add('contacts', formData);
    
    // Send email via EmailJS
    emailjs.send('service_1dew0fi', 'template_rkh83on', formData)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        }, function(error) {
            console.error('Failed to send email:', error);
            showToast('Error sending message. Please try again.', 'error');
        });
}

function submitOrder(event) {
    event.preventDefault();
    
    const form = event.target;
    const serviceSelect = form.querySelector('[name="service"]');
    const serviceOption = serviceSelect.options[serviceSelect.selectedIndex];
    const serviceName = serviceOption ? serviceOption.text.split(' - ')[0] : 'Not specified';
    const servicePrice = serviceOption ? serviceOption.text.split(' - $')[1] : 'N/A';
    
    const formData = {
        service_name: serviceName,
        service_price: servicePrice,
        service_id: form.querySelector('[name="service"]').value,
        name: form.querySelector('[name="name"]').value,
        email: form.querySelector('[name="email"]').value,
        phone: form.querySelector('[name="phone"]').value,
        project_details: form.querySelector('[name="details"]').value,
        budget: form.querySelector('[name="budget"]').value,
        timeline: form.querySelector('[name="timeline"]').value,
        to_email: 'zobikhani961@gmail.com',
        reply_to: form.querySelector('[name="email"]').value,
        date: new Date().toLocaleString(),
        status: 'pending'
    };
    
    // Save to database
    db.add('orders', formData);
    
    // Send email via EmailJS
    emailjs.send('service_1dew0fi', 'template_rkh83on', formData)
        .then(function(response) {
            console.log('Order email sent successfully!', response.status, response.text);
            showToast('Order submitted successfully! I\'ll contact you within 24 hours.', 'success');
            closeOrderModal();
            form.reset();
        }, function(error) {
            console.error('Failed to send order email:', error);
            showToast('Error submitting order. Please try again.', 'error');
        });
}

function subscribeNewsletter(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    const formData = {
        email: email,
        to_email: 'zobikhani961@gmail.com',
        reply_to: email,
        date: new Date().toLocaleString(),
        subject: 'New Newsletter Subscription',
        message: `New subscriber: ${email}`
    };
    
    // Save to database
    db.add('subscribers', { email, date: new Date().toISOString() });
    
    // Send email via EmailJS
    emailjs.send('service_1dew0fi', 'template_rkh83on', formData)
        .then(function(response) {
            console.log('Newsletter subscription email sent!', response.status, response.text);
            showToast('Successfully subscribed to newsletter!', 'success');
            event.target.reset();
        }, function(error) {
            console.error('Failed to send subscription email:', error);
            showToast('Error subscribing. Please try again.', 'error');
        });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toastIcon');
    const messageEl = document.getElementById('toastMessage');
    
    toast.className = `toast ${type}`;
    icon.className = `fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
    messageEl.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== FILTER FUNCTIONS =====
function filterServices(category) {
    scrollToSection('services');
    
    const services = db.get('services');
    const filtered = category === 'all' ? services : services.filter(s => s.category === category);
    
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = filtered.map(service => `
        <div class="service-card">
            ${service.featured ? '<span class="featured-badge">Featured</span>' : ''}
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(f => `
                    <li><i class="fas fa-check-circle"></i> ${f}</li>
                `).join('')}
            </ul>
            <div class="service-price">$${service.price} <span>starting at</span></div>
            <button class="btn btn-primary" style="width: 100%;" onclick="selectService(${service.id})">Select Package</button>
        </div>
    `).join('');
    
    showToast(`Showing ${category} services`, 'success');
}

// ===== ANALYTICS (Simulated) =====
function trackEvent(eventName, data = {}) {
    const events = JSON.parse(localStorage.getItem('analytics') || '[]');
    events.push({
        event: eventName,
        data: data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('analytics', JSON.stringify(events));
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderPortfolio();
    renderTestimonials();
    renderBlog();
    renderFAQs();
    populateServiceSelect();
    
    // Track page view
    trackEvent('page_view', { page: 'home' });
    
    // Add click tracking to all buttons
    document.querySelectorAll('button, .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('button_click', { text: this.textContent.trim() });
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
});

// Handle escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeOrderModal();
        document.getElementById('navLinks').classList.remove('active');
    }
});

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});