
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
        brand: 'Ford',
        model: 'Mustang',
        type: 'sport',
        price: 550,
        transmission: 'Manual',
        acceleration: '4,6 s',
        power: '450 KM',
        fuel: 'Benzyna',
        image: 'https://images.unsplash.com/photo-1584345604169-79f8d5575514?auto=format&fit=crop&q=80',
        available: true
    },
    {
        id: 4,
        brand: 'Volkswagen',
        model: 'Golf',
        type: 'hatchback',
        price: 180,
        transmission: 'Manual',
        acceleration: '8,5 s',
        power: '150 KM',
        fuel: 'Benzyna',
        image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80',
        available: true
    },
    {
        id: 5,
        brand: 'Audi',
        model: 'A6',
        type: 'sedan',
        price: 350,
        transmission: 'Automat',
        acceleration: '6,0 s',
        power: '245 KM',
        fuel: 'Diesel',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
        available: true
    },
    {
        id: 6,
        brand: 'Mercedes',
        model: 'G-Class',
        type: 'suv',
        price: 900,
        transmission: 'Automat',
        acceleration: '4,5 s',
        power: '585 KM',
        fuel: 'Benzyna',
        image: 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80',
        available: false
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
