
import { cars } from './data.js';
import { formatCurrency } from './utils.js';
import { checkAuth } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    checkAuth(); // Initial header check

    const urlParams = new URLSearchParams(window.location.search);
    const carId = parseInt(urlParams.get('id'));

    if (!carId) {
        window.location.href = 'index.html';
        return;
    }

    const car = cars.find(c => c.id === carId);

    if (!car) {
        document.getElementById('carDetailsContent').innerHTML = `
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h2>Nie znaleziono wybranego pojazdu.</h2>
                <a href="index.html" class="btn btn-primary">Powrót do katalogu</a>
            </div>
        `;
        return;
    }

    renderCarDetails(car);
    handleFAQ();
});

function renderCarDetails(car) {
    const container = document.getElementById('carDetailsContent');

    // Icons
    const iconSpeed = 'assets/icons/speed_icon.svg';
    const iconTransmission = 'assets/icons/transmission_icon.svg';
    const iconPower = 'assets/icons/power_icon.svg';
    const iconFuel = 'assets/icons/fuel_icon.svg';
    const iconDrive = 'assets/icons/transmission_icon.svg'; // Using generic for drive if specific missing
    const iconSeats = 'assets/icons/user_icon.svg'; // Might need to ensure this exists or use text

    container.innerHTML = `
        <div id="lightbox" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-nav prev">&#10094;</button>
            <button class="lightbox-nav next">&#10095;</button>
            <div class="lightbox-content">
                <img id="lightboxImg" src="" alt="Full view">
            </div>
        </div>

        <section class="details-hero" style="background-image: url('${car.image}'); cursor: pointer;">
            <div class="container">
                <div class="hero-info">
                    <span class="hero-label">${car.type} | ${car.seats} osobowy</span>
                    <h1 class="hero-title">${car.brand}<br>${car.model}</h1>
                    
                    <div class="hero-specs-list">
                        <div class="hero-spec-item">
                            <img src="${iconPower}" alt="Engine">
                            <span>Silnik: ${car.engine} | Moc: ${car.power}</span>
                        </div>
                        <div class="hero-spec-item">
                            <img src="${iconSpeed}" alt="Acceleration">
                            <span>Przyspieszenie do 100 km/h: ${car.acceleration}</span>
                        </div>
                        <div class="hero-spec-item">
                            <img src="${iconTransmission}" alt="Transmission">
                            <span>Skrzynia: ${car.transmission}</span>
                        </div>
                        <div class="hero-spec-item">
                            <img src="${iconFuel}" alt="Fuel">
                            <span>Paliwo: ${car.fuel}</span>
                        </div>
                    </div>

                    <div class="hero-price">
                        <div class="price-tag">
                            Już od <span class="amount">${formatCurrency(car.pricing.day).replace('PLN', 'zł')}</span> / doba
                        </div>
                        <p style="color: rgba(255,255,255,0.5); margin-bottom: 2rem;">Przy wynajmie długoterminowym</p>
                        <a href="#booking" class="hero-cta">ZAREZERWUJ TERAZ</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="details-section section-dark">
            <div class="container">
                <div class="section-header">
                    <h2>Specyfikacja techniczna</h2>
                </div>
                <div class="specs-detail-grid">
                    <div class="spec-detail-card">
                        <img src="${iconPower}" class="spec-detail-icon">
                        <div class="spec-detail-label">Moc silnika</div>
                        <div class="spec-detail-value">${car.power}</div>
                    </div>
                    <div class="spec-detail-card">
                        <img src="${iconSpeed}" class="spec-detail-icon">
                        <div class="spec-detail-label">0-100 km/h</div>
                        <div class="spec-detail-value">${car.acceleration}</div>
                    </div>
                    <div class="spec-detail-card">
                        <img src="${iconTransmission}" class="spec-detail-icon">
                        <div class="spec-detail-label">Skrzynia biegów</div>
                        <div class="spec-detail-value">${car.transmission}</div>
                    </div>
                    <div class="spec-detail-card">
                        <img src="${iconDrive}" class="spec-detail-icon" style="transform: rotate(90deg);">
                        <div class="spec-detail-label">Napęd</div>
                        <div class="spec-detail-value">${car.drive}</div>
                    </div>
                </div>

                <div style="margin-top: 4rem;">
                    <h3>Opis pojazdu</h3>
                    <p class="description-content">${car.description}</p>
                </div>
            </div>
        </section>

        <section class="gallery-section">
            <div class="container">
                <div class="section-header">
                    <h2>Galeria zdjęć</h2>
                </div>
                <div class="gallery-grid">
                    ${car.images.map((img, index) => `
                        <div class="gallery-item" data-index="${index}">
                            <img src="${img}" alt="${car.brand} ${car.model} image ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="details-section">
            <div class="container">
                <h2>Cennik wynajmu</h2>
                <div class="pricing-container">
                    <table class="pricing-table">
                        <thead>
                            <tr>
                                <th>Okres</th>
                                <th>Cena z kaucją</th>
                                <th>Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Doba</td>
                                <td>
                                    <span class="price-value">${formatCurrency(car.pricing.day).replace('PLN', 'zł')}</span>
                                    <span class="price-subtext">(${formatCurrency(car.pricing.day).replace('PLN', 'zł')} / doba)</span>
                                </td>
                                <td>300 km</td>
                            </tr>
                            <tr>
                                <td>3 Doby</td>
                                <td>
                                    <span class="price-value">${formatCurrency(car.pricing.day3).replace('PLN', 'zł')}</span>
                                    <span class="price-subtext">(${formatCurrency(Math.round(car.pricing.day3 / 3)).replace('PLN', 'zł')} / doba)</span>
                                </td>
                                <td>800 km</td>
                            </tr>
                            <tr>
                                <td>Tydzień</td>
                                <td>
                                    <span class="price-value">${formatCurrency(car.pricing.week).replace('PLN', 'zł')}</span>
                                    <span class="price-subtext">(${formatCurrency(Math.round(car.pricing.week / 7)).replace('PLN', 'zł')} / doba)</span>
                                </td>
                                <td>1500 km</td>
                            </tr>
                            <tr>
                                <td>Miesiąc</td>
                                <td>
                                    <span class="price-value">${formatCurrency(car.pricing.month).replace('PLN', 'zł')}</span>
                                    <span class="price-subtext">(${formatCurrency(Math.round(car.pricing.month / 30)).replace('PLN', 'zł')} / doba)</span>
                                </td>
                                <td>3000 km</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style="margin-top: 2rem; color: rgba(255,255,255,0.6);">Kaucja zwrotna – ${formatCurrency(car.pricing.deposit).replace('PLN', 'zł')}</p>
            </div>
        </section>

        <section id="booking" class="booking-section">
            <div class="container">
                <div class="booking-grid">
                    <div style="color: white;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Zarezerwuj ten samochód</h2>
                        <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.8;">
                            Zostaw swoje dane, a nasz doradca skontaktuje się z Tobą w ciągu 15 minut, aby sfinalizować rezerwację.
                        </p>
                        <div class="contact-info-list" style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; gap: 1rem; align-items: center;">
                                <span style="font-size: 1.5rem;">📞</span>
                                <span>+48 123 456 789</span>
                            </div>
                            <div style="display: flex; gap: 1rem; align-items: center;">
                                <span style="font-size: 1.5rem;">✉️</span>
                                <span>rezerwacje@orentacja.pl</span>
                            </div>
                        </div>
                    </div>
                    <div class="booking-form-card">
                        <h3>Formularz rezerwacji</h3>
                        <form id="detailsBookingForm" class="standard-form">
                            <div class="form-group">
                                <label>Imię i Nazwisko</label>
                                <input type="text" placeholder="Jan Kowalski" required>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Telefon</label>
                                    <input type="tel" placeholder="+48 ..." required>
                                </div>
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <input type="email" placeholder="email@przyklad.com" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Wiadomość (opcjonalnie)</label>
                                <textarea style="width: 100%; padding: 1rem; border-radius: 12px; border: 1px solid #e2e8f0; font-family: inherit; height: 100px;" placeholder="Kiedy planujesz wynajem?"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary full-width" style="margin-top: 1.5rem; height: 60px; font-size: 1.1rem;">WYŚLIJ ZAPYTANIE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="faq-section" style="background-color: #111111; color: white; padding-top: 50px;">
            <div class="container">
                <h2 class="section-title text-center" style="margin-bottom: 40px; color: white;">Najczęściej Zadawane Pytania (FAQ)</h2>
                <div class="faq-accordion">
                    <div class="faq-item">
                        <button class="faq-question">Jakie dokumenty są potrzebne do wynajmu? <span class="faq-icon">+</span></button>
                        <div class="faq-answer">
                            <p>Do wynajmu samochodu wymagamy ważnego prawa jazdy (posiadanego od co najmniej 2 lat) oraz dowodu osobistego lub paszportu. W przypadku obcokrajowców może być wymagane międzynarodowe prawo jazdy.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Czy mogę wyjechać wypożyczonym samochodem za granicę? <span class="faq-icon">+</span></button>
                        <div class="faq-answer">
                            <p>Tak, wyjazd za granicę jest możliwy do większości krajów Unii Europejskiej po wcześniejszym zgłoszeniu i uzyskaniu pisemnej zgody. Może się to wiązać z dodatkową opłatą ubezpieczeniową.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Jak wysoka jest kaucja? <span class="faq-icon">+</span></button>
                        <div class="faq-answer">
                            <p>Wysokość kaucji zależy od klasy wybranego samochodu. Dla aut luksusowych i sportowych może być wyższa. Kaucja jest blokowana na karcie płatniczej.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Czy można wynająć auto bez karty kredytowej? <span class="faq-icon">+</span></button>
                        <div class="faq-answer">
                            <p>Dla większości grup pojazdów akceptujemy karty debetowe. Jednak przy wynajmie aut klasy Premium i Sport wymagana może być karta kredytowa do zabezpieczenia kaucji.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Co w przypadku kolizji lub awarii? <span class="faq-icon">+</span></button>
                        <div class="faq-answer">
                            <p>Zapewniamy całodobową pomoc Assistance. W przypadku awarii lub kolizji należy niezwłocznie skontaktować się z naszą infolinią pod numerem podanym w umowie wynajmu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Add form submit listener
    const form = document.getElementById('detailsBookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Dziękujemy! Twoje zapytanie dotyczące auta ' + car.brand + ' ' + car.model + ' zostało wysłane. Skontaktujemy się z Tobą wkrótce.');
            form.reset();
        });
    }

    // Fix: Prevent hero lightbox from opening when clicking CTA
    const ctaBtn = document.querySelector('.hero-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Gallery interaction
    const galleryItems = document.querySelectorAll('.gallery-item');
    const heroSection = document.querySelector('.details-hero');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            heroSection.style.backgroundImage = `url('${imgSrc}')`;

            // Optional: add active state to thumbnail
            galleryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');

    let currentImgIndex = 0;

    const openLightbox = (index) => {
        currentImgIndex = index;
        lightboxImg.src = car.images[currentImgIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const showNext = (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % car.images.length;
        lightboxImg.src = car.images[currentImgIndex];
    };

    const showPrev = (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + car.images.length) % car.images.length;
        lightboxImg.src = car.images[currentImgIndex];
    };

    // Open when clicking hero
    heroSection.addEventListener('click', () => {
        // Find current image in hero background
        const bg = heroSection.style.backgroundImage;
        if (!bg) {
            openLightbox(0);
            return;
        }

        // Extract the URL from url("...")
        let currentUrl = bg.match(/url\(['"]?(.*?)['"]?\)/)[1];

        // Find index of this URL in car.images
        // We need to handle relative vs absolute paths
        const index = car.images.findIndex(img => {
            const absoluteImg = new URL(img, window.location.href).href;
            const absoluteCurrent = new URL(currentUrl, window.location.href).href;
            return absoluteImg === absoluteCurrent;
        });

        openLightbox(index !== -1 ? index : 0);
    });

    // Open when clicking gallery hints
    galleryItems.forEach((item, idx) => {
        // Add a small zoom icon hint
        const zoomHint = document.createElement('div');
        zoomHint.className = 'zoom-hint';
        zoomHint.innerHTML = '🔍';
        item.appendChild(zoomHint);

        zoomHint.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(idx);
        });

        // Also open on double click of the thumbnail
        item.addEventListener('dblclick', () => openLightbox(idx));
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext(e);
        if (e.key === 'ArrowLeft') showPrev(e);
    });
}

function handleFAQ() {
    // We need to wait a tiny bit for the DOM to be fully injected
    setTimeout(() => {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentNode;
                const isActive = item.classList.contains('active');

                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    }, 100);
}
