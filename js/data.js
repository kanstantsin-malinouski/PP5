
export const cars = [
    {
        id: 1,
        brand: 'AUDI',
        model: 'RS6',
        type: 'sport',
        price: 1799,
        transmission: 'Automat',
        acceleration: '3,1 s',
        power: '710 KM',
        torque: '950 Nm',
        engine: '4.0 V8 TFSI',
        fuel: 'Benzyna',
        drive: '4x4 (Quattro)',
        seats: 5,
        image: 'assets/cars/audi-rs6/first_image.jpg',
        images: [
            'assets/cars/audi-rs6/first_image.jpg',
            'assets/cars/audi-rs6/second_image.jpg',
            'assets/cars/audi-rs6/third_image.jpg',
            'assets/cars/audi-rs6/fourth_image.jpg',
            'assets/cars/audi-rs6/fifth_image.jpg'
        ],
        available: true,
        description: 'Audi RS6 C8 to ikona sportowych kombi. Silnik V8 o mocy 710 KM zapewnia niesamowite osiągi, a napęd Quattro gwarantuje pewność prowadzenia w każdych warunkach. Idealny wybór dla osób szukających połączenia luksusu z ekstremalną mocą.',
        pricing: {
            day: 1799,
            day3: 4399,
            week: 6799,
            month: 18999,
            deposit: 5000
        }
    },
    {
        id: 2,
        brand: 'PORSCHE',
        model: '911 Carrera 4',
        type: 'sport',
        price: 2800,
        transmission: 'Automat',
        acceleration: '3,0 s',
        power: '541 KM',
        torque: '610 Nm',
        engine: '3.0 Boxer Turbo',
        fuel: 'Benzyna',
        drive: '4x4',
        seats: 2,
        image: 'assets/cars/porsche-911/first_image.jpeg',
        images: [
            'assets/cars/porsche-911/first_image.jpeg',
            'assets/cars/porsche-911/second_image.jpeg',
            'assets/cars/porsche-911/third_image.jpeg',
            'assets/cars/porsche-911/fourth_image.jpeg',
            'assets/cars/porsche-911/fifth_image.jpeg'
        ],
        available: true,
        description: 'Porsche 911 Carrera 4 GTS to definicja samochodu sportowego. Precyzja prowadzenia, błyskawiczna skrzynia PDK i legendarny design sprawiają, że każda minuta za kierownicą to czysta adrenalina.',
        pricing: {
            day: 2800,
            day3: 7500,
            week: 15000,
            month: 45000,
            deposit: 10000
        }
    },
    {
        id: 3,
        brand: 'BMW',
        model: 'M3 Competition',
        type: 'sport',
        price: 1199,
        transmission: 'Automat',
        acceleration: '3,5 s',
        power: '510 KM',
        torque: '650 Nm',
        engine: '3.0 R6 Biturbo',
        fuel: 'Benzyna',
        drive: 'xDrive',
        seats: 5,
        image: 'assets/cars/bmw-m3/first_image.jpg',
        images: [
            'assets/cars/bmw-m3/first_image.jpg',
            'assets/cars/bmw-m3/second_image.jpg',
            'assets/cars/bmw-m3/third_image.jpg',
            'assets/cars/bmw-m3/fourth_image.jpg',
            'assets/cars/bmw-m3/fifth_image.jpg'
        ],
        available: true,
        description: 'BMW M3 Competition z napędem xDrive to maszyna stworzona do dawania radości z jazdy. Agresywna stylistyka i niesamowita elastyczność silnika R6 tworzą duet idealny.',
        pricing: {
            day: 1199,
            day3: 3200,
            week: 6000,
            month: 15000,
            deposit: 5000
        }
    },
    {
        id: 4,
        brand: 'Ford',
        model: 'Mustang',
        type: 'sport',
        price: 849,
        transmission: 'Automat',
        acceleration: '4,3 s',
        power: '446 KM',
        torque: '540 Nm',
        engine: '5.0 V8 Coyote',
        fuel: 'Benzyna',
        drive: 'RWD',
        seats: 4,
        image: 'assets/cars/ford-mustang-gt/first_image.jpg',
        images: [
            'assets/cars/ford-mustang-gt/first_image.jpg',
            'assets/cars/ford-mustang-gt/second_image.jpg',
            'assets/cars/ford-mustang-gt/third_image.jpg',
            'assets/cars/ford-mustang-gt/fourth_image.jpg',
            'assets/cars/ford-mustang-gt/fifth_image.jpg'
        ],
        available: true,
        description: 'Amerykańska legenda w najnowszym wydaniu. Mustang z silnikiem V8 to nie tylko dźwięk, to styl życia. Poczuj wolność na każdej trasie.',
        pricing: {
            day: 849,
            day3: 2200,
            week: 4500,
            month: 12000,
            deposit: 3000
        }
    },
    {
        id: 5,
        brand: 'Mercedes',
        model: 'G63 AMG',
        type: 'SUV',
        price: 2000,
        transmission: 'Automat',
        acceleration: '4,5 s',
        power: '585 KM',
        torque: '850 Nm',
        engine: '4.0 V8 BiTurbo',
        fuel: 'Benzyna',
        drive: '4Matic',
        seats: 5,
        image: 'assets/cars/mercedes-g63amg/first_image.webp',
        images: [
            'assets/cars/mercedes-g63amg/first_image.webp',
            'assets/cars/mercedes-g63amg/second_image.avif',
            'assets/cars/mercedes-g63amg/third_image.avif',
            'assets/cars/mercedes-g63amg/fouth_image.avif',
            'assets/cars/mercedes-g63amg/fifth_image.avif'
        ],
        available: true,
        description: 'Mercedes-Benz Klasa G 63 AMG to potęga i prestiż w jednym. Niezrównane możliwości terenowe połączone z luksusowym wykończeniem wnętrza.',
        pricing: {
            day: 2000,
            day3: 5500,
            week: 11000,
            month: 30000,
            deposit: 7000
        }
    },
    {
        id: 6,
        brand: 'Audi',
        model: 'S3',
        type: 'sport',
        price: 549,
        transmission: 'Automat',
        acceleration: '4,8 s',
        power: '310 KM',
        torque: '400 Nm',
        engine: '2.0 TFSI',
        fuel: 'Benzyna',
        drive: 'Quattro',
        seats: 5,
        image: 'assets/cars/audi-s3/first_image.jpg',
        images: [
            'assets/cars/audi-s3/first_image.jpg',
            'assets/cars/audi-s3/second_image.jpg',
            'assets/cars/audi-s3/third_image.jpg',
            'assets/cars/audi-s3/fourth_image.jpg',
            'assets/cars/audi-s3/fifth_image.jpg'
        ],
        available: true,
        description: 'Audi S3 to idealny "daily driver" o sportowym zacięciu. Kompaktowe wymiary, napęd na cztery koła i świetna dynamika czynią go królem miejskiej dżungli.',
        pricing: {
            day: 549,
            day3: 1500,
            week: 2800,
            month: 8000,
            deposit: 2000
        }
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
