
import { formatCurrency } from '../utils.js';

class CarCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // We expect data to be passed via a property
        this.render();
    }

    set carData(data) {
        this._car = data;
        this.render();
    }

    render() {
        if (!this._car) return;

        const { brand, model, price, transmission, acceleration, power, fuel, image, available } = this._car;

        // Using local images for icons
        const iconSpeed = `<img src="assets/icons/speed_icon.svg" class="spec-icon-img" alt="Speed">`;
        const iconTransmission = `<img src="assets/icons/transmission_icon.svg" class="spec-icon-img" alt="Transmission">`;
        const iconPower = `<img src="assets/icons/power_icon.svg" class="spec-icon-img" alt="Power">`;
        const iconFuel = `<img src="assets/icons/fuel_icon.svg" class="spec-icon-img" alt="Fuel">`;

        this.innerHTML = `
            <div class="car-card">
                <div class="car-image text-center" style="${image ? `background-image: url('${image}')` : 'background-color: #eee; display: flex; align-items: center; justify-content: center;'}">
                    ${!image ? '<span style="color:#aaa;">No Image</span>' : ''}
                    ${!available ? '<span class="status-badge unavailable">Niedostępny</span>' : ''}
                </div>
                <div class="car-info text-center">
                    <h3 class="car-title">${brand} ${model}</h3>
                    
                    <div class="car-price-block">
                        <div class="price-main">${formatCurrency(price).replace('PLN', 'zł')}</div>
                        <div class="price-sub">cena brutto/doba z kaucją</div>
                    </div>

                    <div class="car-specs-grid">
                        <div class="spec-item">
                            <span class="icon-wrap">${iconSpeed}</span>
                            <span>${acceleration || 'N/A'} do 100 km/h</span>
                        </div>
                        <div class="spec-item">
                            <span class="icon-wrap">${iconTransmission}</span>
                            <span>${transmission}</span>
                        </div>
                        <div class="spec-item">
                            <span class="icon-wrap">${iconPower}</span>
                            <span>${power || 'N/A'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="icon-wrap">${iconFuel}</span>
                            <span>${fuel || 'N/A'}</span>
                        </div>
                    </div>

                    <div class="car-footer-action">
                        <button class="btn btn-primary btn-pill full-width rent-btn" ${!available ? 'disabled' : ''} data-id="${this._car.id}">
                            ${available ? 'Szczegóły' : 'Zajęty'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('car-card', CarCard);
