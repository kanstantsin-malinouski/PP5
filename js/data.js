
export const cars = [
    {
        id: 1,
        brand: 'AUDI',
        model: 'RS6',
        type: 'sport',
        price: 1799,
        transmission: 'Automat',
        acceleration: '3,1 s',
        power: '710 KM / 950 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/audi-rs6/first_image.jpg', // Placeholder as requested
        available: true
    },
    {
        id: 2,
        brand: 'PORSCHE',
        model: '911 Carrera 4 GTS',
        type: 'sport',
        price: 2800,
        transmission: 'Automat',
        acceleration: '3,0 s',
        power: '541 KM / 610 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/porsche-911/first_image.jpeg',
        available: true
    },
    {
        id: 3,
        brand: 'BMW',
        model: 'M3 Competition',
        type: 'sport',
        price: 1199,
        transmission: 'Automat',
        acceleration: '3,5 s',
        power: '510 KM / 650 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/bmw-m3/first_image.jpg',
        available: true
    },
    {
        id: 4,
        brand: 'Ford',
        model: 'Mustang',
        type: 'sport',
        price: 849,
        transmission: 'Automat',
        acceleration: '4,3 s',
        power: '446 KM / 540 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/ford-mustang-gt/first_image.jpg',
        available: true
    },
    {
        id: 5,
        brand: 'Mercedes',
        model: 'G63 AMG',
        type: 'SUV',
        price: 2000,
        transmission: 'Automat',
        acceleration: '4,3 s',
        power: '585 KM / 850 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/mercedes-g63amg/first_image.webp',
        available: true
    },
    {
        id: 6,
        brand: 'Audi',
        model: 'S3',
        type: 'sport',
        price: 549,
        transmission: 'Automat',
        acceleration: '4,8 s',
        power: '310 KM / 400 Nm',
        fuel: 'Benzyna',
        image: 'assets/cars/audi-s3/first_image.jpg',
        available: true
    }
];

export function getCars() {
    // Simulating async fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars);
        }, 500); // 0.5s delay
    });
}
