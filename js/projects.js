const projects = [
        {
          id: 1,
          title: "Stella Solutions Instagram Post",
          description: "Instagram post for Stella Solutions",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGeza57pg0/mrQzHX6QQDajyFz6ATZcGw/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Instagram Post"],
          },
        },
        {
          id: 2,
          title: "Coming Soon Instagram Post",
          description: "Coming soon announcement post",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGezW1a_v0/0RgATBKDT0sf1W0JIs50hg/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Instagram Post"],
          },
        },
        {
          id: 3,
          title: "Modern Fashion Product",
          description: "Modern fashion product announcement post",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGezti-ar8/n_se9eJBPka59SVwwt1kOQ/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Instagram Post"],
          },
        },
        {
          id: 4,
          title: "T-Shirt Mockup Design 1",
          description: "T-Shirt mockup design",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGft8vfHj8/S9g3INcNfrSTCYXarfkYwg/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["T-Shirt Design"],
          },
        },
        {
          id: 5,
          title: "T-Shirt Mockup Design 2",
          description: "T-Shirt mockup design variation",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGftwXX24k/DxQZRpuu2QF28dwCzu53GA/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["T-Shirt Design"],
          },
        },
        {
          id: 6,
          title: "Menu Infographic",
          description: "Infographic design for menu",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGfXNxC7lQ/ykvstvaTAhJHQV5g2GaoEA/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Infographic"],
          },
        },
        {
          id: 7,
          title: "Stella Solutions Brochure",
          description: "Trifold brochure for Stella Solutions",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGezdLJ7aM/2KY7XDO42ohON27Ny9_bxg/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Brochure"],
          },
        },
        {
          id: 8,
          title: "Furaha Travel and Tour Brochure",
          description: "A4 brochure for Furaha Travel and Tour",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGezMlJwSc/0gKBN-SQ8L8o3nVqzUkHyg/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Brochure"],
          },
        },
        {
          id: 9,
          title: "Synergy Logo",
          description: "Logo design for Synergy",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGft_fDTR4/2gajDDQJ4BBZmrabul0dXg/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Logo"],
          },
        },
        {
          id: 10,
          title: "Fusionist Logo",
          description: "Logo design for Fusionist",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGft-B45Q4/uzx-4W6yIZZS0-449l6Orw/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Logo"],
          },
        },
        {
          id: 11,
          title: "The Creative Hub Logo",
          description: "Logo design for The Creative Hub",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGft-rzzDM/vbP3-AvNguxgcBAYzEzo3A/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 week",
            deliverables: ["Logo"],
          },
        },
        {
          id: 12,
          title: "Project Management Plan - Rossette",
          description: "Project management plan presentation",
          category: "virtual-assistance",
          embedUrl: "https://www.canva.com/design/DAGfX83iwp8/dqvSxKL7NIpeTR37sREw0w/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 month",
            deliverables: ["Presentation"],
          },
        },
        {
          id: 13,
          title: "Travel Itinerary",
          description: "Travel itinerary presentation",
          category: "virtual-assistance",
          embedUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSofcngmO4YIfjFxSiWctAMbN6GBXYppG-fNgXQ32A_tyRDKrbjwvkfDX2q-0zLksIUpfhRI2SaxVGV/embed?start=true&loop=true&delayms=3000",
          details: {
            tools: ["Google Slides"],
            duration: "1 week",
            deliverables: ["Presentation"],
          },
        },
        {
          id: 14,
          title: "Social Media Marketing Plan",
          description: "Social media marketing plan presentation",
          category: "digital-marketing",
          embedUrl: "https://www.canva.com/design/DAGfXK4U_DA/XxTCM4o7TViA12DFCbePrQ/view?embed",
          details: {
            tools: ["Canva"],
            duration: "1 month",
            deliverables: ["Presentation"],
          },
        },
        {
          id: 15,
          title: "Brand Guidelines",
          description: "Synergy Labs brand guidelines",
          category: "graphic-design",
          embedUrl: "https://www.canva.com/design/DAGfV9Xpkww/2N6IP8-Q5ikWfvm5u_E1gw/view?embed",
          details: {
            tools: ["Canva"],
            duration: "2 weeks",
            deliverables: ["Brand Guidelines"],
          },
        },
      ];

const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

// Populate carousel with projects
function populateCarousel() {
    carouselTrack.innerHTML = ''; // Clear existing content
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        if (index === currentIndex) projectCard.classList.add('active');
        projectCard.innerHTML = `
            <div class="project-iframe-container">
                <iframe src="${project.embedUrl}" title="${project.title}" scrolling="yes"></iframe>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <span class="project-category">${project.category}</span>
            </div>
        `;
        carouselTrack.appendChild(projectCard);
    });
}

function updateCarousel() {
    const slideWidth = document.querySelector('.project-card').offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function openProject(index) {
    const project = projects[index];
    window.open(project.embedUrl, '_blank');
}

// Initialize carousel
populateCarousel();