body {
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    background: #F6F5F0;
    color: #000;
}

h1, h2, h3 {
    font-family: 'Archivo Black', sans-serif;
    font-size: 100px;
}

.site-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    text-decoration: none;
    color: black;
}

/* Gallery Grid */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    width: 100vw;
    height: auto;
}

.gallery-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
}

.lightbox.hidden {
    display: none;
}

.lightbox-content {
    display: flex;
    height: 100%;
}

.lightbox-content img {
    max-width: 80%;
    max-height: 100%;
    object-fit: contain;
}

.lightbox-sidebar {
    width: 20%;
    background: #F6F5F0;
    padding: 20px;
}

#lightbox-close {
    float: right;
    background: none;
    border: none;
    font-size: 18px;
}

/* About page */
.about-container {
    display: flex;
}

.about-image {
    width: 40%;
    object-fit: cover;
}

.about-text {
    width: 60%;
    padding: 20px;
}

/* Inquire */
.inquire-container {
    padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    h1 {
        font-size: 50px;
    }

    .about-container {
        flex-direction: column;
    }

    .about-image, .about-text {
        width: 100%;
    }
}
