const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxDetails = document.getElementById('lightbox-details');
const lightboxClose = document.getElementById('lightbox-close');
const yearFilter = document.getElementById('year-filter');
const allWorksBtn = document.getElementById('all-works-btn');

let worksData = [];

fetch('data/works.json')
  .then(res => res.json())
  .then(data => {
    worksData = data;

    // populate year dropdown
    const years = [...new Set(data.map(item => item.year))].sort((a,b)=>b-a);
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    // default: most recent year
    renderGallery(worksData, years[0]);
  });

yearFilter.addEventListener('change', () => {
  renderGallery(worksData, yearFilter.value);
});

allWorksBtn.addEventListener('click', () => {
  renderGallery(worksData);
});

function renderGallery(items, year=null){
  gallery.innerHTML = '';
  items
    .filter(item => !year || item.year == year)
    .forEach(item => {
      const img = document.createElement('img');
      img.src = `assets/images/${item.filename}`;
      img.alt = item.alt_text || '';
      img.addEventListener('click', () => {
        lightboxImg.src = `assets/images/${item.filename}`;
        lightboxDetails.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.media}</p>
          <p>${item.dimensions}</p>
        `;
        lightbox.style.display = 'flex';
      });
      gallery.appendChild(img);
    });
}

// function to close lightbox
function closeLightbox() {
  lightbox.classList.add('hidden');
}

// close via X button
lightboxClose.addEventListener('click', closeLightbox);

// close by clicking outside content
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {   // only clicks directly on overlay
    closeLightbox();
  }
});



