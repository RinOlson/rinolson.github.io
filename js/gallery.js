const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxDetails = document.getElementById('lightbox-details');
const lightboxClose = document.getElementById('lightbox-close');
const yearFilter = document.getElementById('year-filter');

fetch('data/works.json')
  .then(response => response.json())
  .then(data => {
    const years = [...new Set(data.map(item => item.year))].sort((a, b) => b - a);
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    renderGallery(data, years[0]);

    yearFilter.addEventListener('change', () => {
      renderGallery(data, yearFilter.value);
    });

    document.getElementById('all-works-btn').addEventListener('click', () => {
      renderGallery(data);
    });

    function renderGallery(items, year) {
      gallery.innerHTML = '';
      items.filter(item => !year || item.year == year)
        .forEach(item => {
          const img = document.createElement('img');
          img.src = `assets/images/${item.filename}`;
          img.alt = item.alt_text || '';
          img.addEventListener('click', () => {
            lightboxImg.src = `assets/images/${item.filename}`;
            lightboxDetails.innerHTML = `
              <p><strong>${item.title}</strong></p>
              <p>${item.media}</p>
              <p>${item.dimensions}</p>
            `;
            lightbox.classList.remove('hidden');
          });
          gallery.appendChild(img);
        });
    }
  });

lightboxClose.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
