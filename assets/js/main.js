/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }                                                           
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

// Update untuk award section
sr.reveal('.award__card', { interval: 200, origin: 'bottom' });

/*===== MODAL FUNCTION =====*/
const projectDetails = {
    peggy: {
        title: "Peggy Bot",
        subtitle: "AI Chatbot for Pegadaian Services",
        description: "Peggy Bot is an AI-based chatbot developed using the Smojo.ai platform to help users access Pegadaian services more easily. The chatbot provides interactive assistance for pawn simulations, loan information, gold purchasing, and general company information through a conversational interface.",
        features: [
            "Interactive chatbot interface for Pegadaian services",
            "Pawn simulation feature for estimating loan values",
            "Loan and installment information assistance",
            "Gold purchasing information and recommendations",
            "Automated customer support for general inquiries"
        ],
        technologies: ["smojo.ai", "html", "css"],
        link: "https://app.smojo.org/sahabatpegadaian/peggy-bot"
    },
    stoic: {
        title: "Stoic Bot",
        subtitle: "Reflective & Motivational Guidance",
        description: "Stoic Bot is an AI-based chatbot developed using the Smojo.ai platform to provide reflective guidance and motivational insights inspired by Stoic philosophy. The chatbot helps users explore Stoicism through interactive conversations, philosopher references, and curated educational resources.",
        features: [
            "Interactive chatbot for Stoic-based conversations",
            "Collection of Stoic philosophy references and materials",
            "Educational content about Stoicism and its principles",
            "Information about famous Stoic philosophers",
            "AI-powered reflective guidance and motivation",
        ],
        technologies: ["smojo.ai", "html", "css", "GPT integration"],
        link: "https://app.smojo.org/amaliassoph/stoic-GPT"
    },
    book: {
        title: "Book Recommendation App",
        subtitle: "Implementation of K-Nearest Neighbor (KNN) Algorithm",
        description: "Book Recommendation App is a web-based recommendation system developed using Streamlit and the K-Nearest Neighbor (KNN) algorithm. The application helps users discover highly rated books based on publishers, authors, and language preferences through an interactive and data-driven interface.",
        features: [
            "Book recommendations based on publishers, authors or language preferences",
            "Top-rated book filtering using average ratings",
            "Interactive user interface built with Streamlit",
            "Data processing and analysis using Pandas"
        ],
        technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
        link: "#"
    },
    stega: {
        title: "Archive Stega",
        subtitle: "Hiding Archive Files Within Images",
        description: "This application is capable of hiding archive files within images. The image quality resulting from the insertion process does not undergo significant changes, making it relatively safe from third parties.",
        features: [
            "Implementation of LSB (Least Significant Bit) steganography",
            "Embedding archive files into PNG and JPG images",
            "Archive extraction from steganographic images",
            "Base64 encoding for binary file conversion",
            "Image capacity validation before embedding process",
            "Desktop GUI application built with Tkinter",
            "Image quality preservation after data embedding"
        ],
        technologies: ["Python", "Tkinter", "Pillow", "Base64"],
        link: "#"
    },
    zakat: {
        title: "Zakat Web",
        subtitle: "Zakat Management Information System",
        description: "Zakat Web is a web-based information system developed to assist zakat management activities, including zakat collection, distribution, and reporting. The system provides an administrative dashboard for managing muzakki, mustahik, financial records, and zakat distribution data in an organized and accessible way.",
        features: [
            "Dashboard for monitoring zakat collection data",
            "Muzakki and mustahik data management",
            "Zakat collection and distribution management",
            "Financial and zakat reporting system"
        ],
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        link: "#"
    },
    mosque: {
        title: "Mosque Finance",
        subtitle: "Mosque Financial Management System",
        description: "Mosque Finance is a web-based financial management system developed to help mosque administrators manage income, expenses, and financial reports more transparently and efficiently. The system provides a dashboard for monitoring financial activities, managing mosque administrators, and generating financial reports.",
        features: [
            "Income and expense transaction management",
            "Financial dashboard with summary statistics",
            "Weekly income and expense monitoring",
            "Financial report generation and download",
            "Data visualization using charts and graphs"
        ],
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        link: "#"
    },
};

function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalHeader = document.getElementById('modal-header');
    const modalBody = document.getElementById('modal-body');
    const project = projectDetails[projectId];
    
    if (project) {
        // Isi header
        modalHeader.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <p>${project.subtitle}</p>
            </div>
        `;
        
        // Isi body (yang bisa di-scroll)
        modalBody.innerHTML = `
            <h3>📖 About Project</h3>
            <p>${project.description}</p>
            
            <h3>✨ Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3>🛠️ Technologies Used</h3>
            <div class="modal-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <a href="${project.link}" class="modal-link" target="_blank">
                View Project Details <i class='bx bx-right-arrow-alt'></i>
            </a>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Reset scroll position ke atas setiap modal dibuka
        modalBody.scrollTop = 0;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

/*===== IMAGE MODAL FUNCTION FOR CERTIFICATE =====*/
function openImageModal(imageSrc, title) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageCaption = document.getElementById('imageCaption');
    
    modalImage.src = imageSrc;
    imageCaption.innerHTML = title;
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const imageModal = document.getElementById('imageModal');
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close image modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const imageModal = document.getElementById('imageModal');
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === imageModal) {
        closeImageModal();
    }
}

// Close image modal with Escape key
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal');
    const imageModal = document.getElementById('imageModal');
    
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
    
    if (event.key === 'Escape' && imageModal.style.display === 'block') {
        closeImageModal();
    }
});

/*===== FEATURED PROJECTS DATA =====*/
const featuredProjects = {
    project1: {
        title: "IT Support Module - Support Services System",
        subtitle: "Complete IT support ticketing system with approval workflow",
        description: "During my internship as a Web Developer, I successfully developed and completed the IT Support module within a Support Services system. This module handles IT support requests with a complete workflow including ticketing, approval, execution tracking, and reporting. The system has passed validation and is ready for production use.",
        features: [
            "Ticketing system for handling IT support requests",
            "Approval workflow to manage request validation",
            "Reporting system for tracking performance and execution",
            "Status monitoring (reached / not reached targets)",
            "History tracking and Post Implementation Review (PIR)",
            "End-to-end workflow implementation (request → approval → execution)",
            "Dynamic interactions using JavaScript & AJAX"
        ],
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
        images: [
            "assets/img/itsupport1.png",
            "assets/img/itsupport2.png",
            "assets/img/itsupport3.png"
        ],
        note: "Due to confidentiality, only limited screenshots can be shared."
    },
    project2: {
        title: "Finished Goods Management System",
        subtitle: "Product Tracking & Distribution System",
        description: "A web-based finished goods management system developed to manage product data, monitor stock availability, and support distribution processes. The system helps streamline finished goods tracking and provides organized inventory management for warehouse operations.",
        features: [
            "Finished goods inventory management",
            "Product stock monitoring and tracking",
            "Warehouse product data management",
            "Distribution and outgoing goods management",
            "Dashboard for inventory overview",
            "Responsive web-based management interface",
            "Product data reporting and monitoring"
        ],
        technologies:  ["Laravel", "PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
        images: [
            "assets/img/finished-goods1.png",
            "assets/img/finished-goods2.png",
            "assets/img/finished-goods3.png"
        ],
        note: "Developed as an internal system for managing finished goods inventory and distribution workflows."
    },
    project3: {
        title: "Product Inventory Management System",
        subtitle: "Inventory, Distribution, and Supply Management System",
        description: "A web-based inventory management system developed to manage product inventory, distributors, delivery processes, and supply planning. The system supports stock monitoring, product purchasing, goods receipts, and distribution workflows to improve inventory management efficiency.",
        features: [
            "Product inventory and stock management",
            "Distributor and distributor address management",
            "Product item and pricing management",
            "Supply planning and forecasting features",
            "Goods receipt and product purchase management",
            "Delivery request and delivery order management",
            "Stock count monitoring and inventory tracking"
        ],
        technologies:  ["Laravel", "PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
        images: [
            "assets/img/product1.png",
            "assets/img/product2.png",
            "assets/img/product3.png"
        ],
        note: "Developed as an internal system for inventory control, supply planning, and product distribution management."
    }
};

/*===== FEATURED MODAL FUNCTIONS =====*/
function openFeaturedModal(projectId) {
    const modal = document.getElementById('featuredModal');
    const modalHeader = document.getElementById('featuredModalHeader');
    const modalBody = document.getElementById('featuredModalBody');
    const project = featuredProjects[projectId];
    
    if (project) {
        // Header
        modalHeader.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.subtitle}</p>
        `;
        
        // Body with gallery and details
        modalBody.innerHTML = `
            <div class="gallery-container">
                <h3 class="gallery-title">📸 Project Gallery</h3>
                <div class="gallery-grid">
                    ${project.images.map(img => `
                        <img src="${img}" alt="Project Screenshot" class="gallery-img" onclick="openImageModal('${img}', '${project.title} - Screenshot')">
                    `).join('')}
                </div>
                ${project.note ? `<p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;"><i class='bx bx-info-circle'></i> ${project.note}</p>` : ''}
            </div>
            
            <h3>📖 About Project</h3>
            <p>${project.description}</p>
            
            <h3>✨ Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3>🛠️ Technologies Used</h3>
            <div class="modal-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modalBody.scrollTop = 0;
    }
}

function closeFeaturedModal() {
    const modal = document.getElementById('featuredModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}