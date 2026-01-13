
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
    },
    {
        id: 7,
        brand: 'Mazda',
        model: 'MX-5 Miata',
        type: 'sport',
        price: 399,
        transmission: 'Manual',
        acceleration: '6,5 s',
        power: '184 KM',
        torque: '205 Nm',
        engine: '2.0 SkyActiv-G',
        fuel: 'Benzyna',
        drive: 'RWD',
        seats: 2,
        image: 'assets/cars/mazda-mx5-miata/first_image.avif',
        images: [
            'assets/cars/mazda-mx5-miata/first_image.avif',
            'assets/cars/mazda-mx5-miata/second_image.avif',
            'assets/cars/mazda-mx5-miata/third_image.avif',
            'assets/cars/mazda-mx5-miata/fourth_image.avif',
            'assets/cars/mazda-mx5-miata/fifth_image.avif'
        ],
        available: true,
        description: 'Mazda MX-5 to kwintesencja czystej radości z jazdy. Lekki roadster z manualną skrzynią biegów pozwala poczuć prawdziwą więź z drogą. Idealna na weekendowe wypady.',
        pricing: {
            day: 399,
            day3: 1100,
            week: 2000,
            month: 5500,
            deposit: 1500
        }
    },
    {
        id: 8,
        brand: 'Honda',
        model: 'Civic Type R',
        type: 'sport',
        price: 699,
        transmission: 'Manual',
        acceleration: '5,7 s',
        power: '320 KM',
        torque: '420 Nm',
        engine: '2.0 VTEC Turbo',
        fuel: 'Benzyna',
        drive: 'FWD',
        seats: 5,
        image: 'assets/cars/honda-civic/first_image.avif',
        images: [
            'assets/cars/honda-civic/first_image.avif',
            'assets/cars/honda-civic/second_image.avif',
            'assets/cars/honda-civic/third_image.avif',
            'assets/cars/honda-civic/fourth_image.avif',
            'assets/cars/honda-civic/fifth_image.avif'
        ],
        available: true,
        description: 'Honda Civic Type R to hot hatch w najczystszej formie. Manualna skrzynia 6-biegowa, agresywny design i precyzyjne prowadzenie sprawiają, że to auto dla prawdziwych entuzjastów.',
        pricing: {
            day: 699,
            day3: 1900,
            week: 3600,
            month: 9500,
            deposit: 2500
        }
    },
    {
        id: 9,
        brand: 'Toyota',
        model: 'GR86',
        type: 'sport',
        price: 499,
        transmission: 'Manual',
        acceleration: '6,3 s',
        power: '234 KM',
        torque: '250 Nm',
        engine: '2.4 Boxer',
        fuel: 'Benzyna',
        drive: 'RWD',
        seats: 4,
        image: 'assets/cars/gr86/first_image.avif',
        images: [
            'assets/cars/gr86/first_image.avif',
            'assets/cars/gr86/second_image.avif',
            'assets/cars/gr86/third_image.avif',
            'assets/cars/gr86/fourth_image.avif',
            'assets/cars/gr86/fifth_image.avif'
        ],
        available: true,
        description: 'Toyota GR86 to nowoczesna interpretacja klasycznego sportowego coupe. Nisko osadzony silnik boxer, napęd na tył i manualna skrzynia to recepta na doskonałą zabawę na krętych drogach.',
        pricing: {
            day: 499,
            day3: 1350,
            week: 2500,
            month: 6800,
            deposit: 2000
        }
    }
];

export function getCars() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars);
        }, 500);
    });
}
