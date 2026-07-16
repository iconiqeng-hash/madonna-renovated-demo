const BASE = '/images'

export const logo = `${BASE}/logo.svg`

export const navigation = [
  { label: 'HOME', href: '/' },
  {
    label: 'SERVICES',
    href: '/#services',
    dropdown: [
      { label: 'Hairstyling', href: '/#services' },
      { label: 'Makeup', href: '/#services' },
      { label: 'Hair Color', href: '/#services' },
      { label: 'Nails', href: '/#services' },
      { label: 'Mens', href: '/#services' },
      { label: 'Spa & Skin', href: '/#services' },
    ],
  },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'CONTACT US', href: '/#contact' },
]

export const heroSlides = [
  {
    image: `${BASE}/hero/slide-1.jpg`,
    watermark: 'MADONNA',
    title: 'Where Beauty Becomes an Art',
    subtitle: 'Step into Delhi NCR\u2019s finest salon studio for transformative hair, skin & makeup experiences.',
  },
  {
    image: `${BASE}/hero/slide-2.jpg`,
    watermark: 'MADONNA',
    title: 'Crafted for the Discerning',
    subtitle: 'Expert stylists, premium brands, and a studio designed for your finest moments.',
  },
  {
    image: `${BASE}/hero/slide-3.jpg`,
    watermark: 'MADONNA',
    title: 'Luxury, Redefined Daily',
    subtitle: 'From bridal glam to everyday elegance \u2014 every visit is a signature experience.',
  },
]

export const serviceCategories = [
  {
    title: 'Makeup',
    subtitle: 'Bridal & Party',
    image: `${BASE}/services/makeup.png`,
  },
  {
    title: 'Hairstyling',
    subtitle: 'Colors & Haircuts',
    image: `${BASE}/services/hairstyling.png`,
  },
  {
    title: 'Others',
    subtitle: 'Mani, Pedicure & Body Work',
    image: `${BASE}/services/others.png`,
  },
]

export const genderServices = [
  {
    title: "Men's",
    subtitle: 'Grooming & Colour',
    image: `${BASE}/services/mens.png`,
    align: 'right',
  },
  {
    title: "Women's",
    subtitle: 'Hairstyling & Coloring',
    image: `${BASE}/services/womens.png`,
    align: 'left',
  },
]

export const aboutImages = [
  `${BASE}/about/interior-1.jpg`,
  `${BASE}/about/interior-2.jpg`,
]

export const aboutExtendedImages = [
  `${BASE}/about/stylist-1.png`,
  `${BASE}/about/stylist-2.png`,
]

export const testimonials = [
  {
    name: 'Niharika Saxena',
    rating: 5,
    text: 'I have visited multiple times. And they truly focus on customer delight. Very professional and experienced stylists and very good behaviour. Highly recommended.',
    time: '3 weeks ago',
    initial: 'N',
  },
  {
    name: 'Shubham Bhatt',
    rating: 5,
    text: 'Fantastic experience! A special thanks to Washi for the amazing haircut and styling. Couldn\'t be happier with the result. Highly recommended!',
    time: '1 month ago',
    initial: 'S',
  },
  {
    name: 'PrankitC',
    rating: 5,
    text: 'Amazing staff, took out a moment to discuss various possibilities for my haircut. Everything is neat and hygiene is maintained. Would definitely recommend everyone.',
    time: '2 months ago',
    initial: 'P',
  },
  {
    name: 'Shreeya Tandon',
    rating: 5,
    text: 'An exceptional salon experience in Malviya Nagar! I got my haircut and hair smoothening done, and the results exceeded my expectations. Their professionalism and dedication truly set them apart.',
    time: '2 months ago',
    initial: 'S',
  },
  {
    name: 'Saloni Puri',
    rating: 5,
    text: 'My first experience at Madonna salon Malviya nagar and I was really happy I tried. The staff is extremely helpful. Great prices and good service. A must try if you are in the area.',
    time: '3 months ago',
    initial: 'S',
  },
]

export const brandPartners = [
  { name: "L'Oréal Professionnel", logo: `${BASE}/brands/loreal.png` },
  { name: 'Casmara', logo: `${BASE}/brands/casmara.png` },
  { name: 'O3+', logo: `${BASE}/brands/o3plus.png` },
  { name: 'Rica', logo: `${BASE}/brands/rica.png` },
  { name: 'GK Hair', logo: `${BASE}/brands/gkhair.png` },
  { name: 'Ozone', logo: `${BASE}/brands/ozone.png` },
]

export const locations = [
  {
    name: 'Malviya Nagar',
    address: '14/185-186, Shivalik Rd, Malviya Nagar 110017',
  },
  {
    name: 'Lodhi Colony',
    address: 'Sno. 54 & 55, Khanna Market Rd, Lodhi Colony 110003',
  },
  {
    name: 'Faridabad',
    address: 'B-693, near HDFC Bank, Greenfield Colony Block B, Sector 43, Faridabad, Haryana 121010',
  },
]

export const contactInfo = {
  phones: ['+91 9810193809', '+91 999 959 9241', '+91 981 019 3809', '+91 981 019 3808'],
  emails: ['contact@madonnasalon.in', 'support@madonnasalon.in'],
  hours: '10:00 AM – 09:00 PM',
}

export const galleryImages = [
  `${BASE}/gallery/gallery-1.jpg`,
  `${BASE}/gallery/gallery-2.jpg`,
  `${BASE}/gallery/gallery-3.jpg`,
  `${BASE}/gallery/gallery-4.jpg`,
  `${BASE}/gallery/gallery-5.jpg`,
  `${BASE}/gallery/gallery-6.jpg`,
]

export const promoBackground = `${BASE}/promo/promo-bg.jpg`

export const recentPosts = [
  {
    title: 'Transform Your Look with Global Color Change at Madonna Salon',
    date: 'Sept 10, 2024',
    image: `${BASE}/posts/post-1.jpg`,
  },
  {
    title: 'The Pros and Cons of Airbrush Makeup!',
    date: 'Oct 16, 2022',
    image: `${BASE}/posts/post-2.jpg`,
  },
]

export const footerLinks = {
  useful: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/#about' },
    { label: 'Contact us', href: '/#contact' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
  services: [
    { label: 'Hairstyling', href: '/#services' },
    { label: 'Makeup', href: '/#services' },
    { label: 'Hair Color', href: '/#services' },
    { label: 'Nails', href: '/#services' },
    { label: 'Mens', href: '/#services' },
    { label: 'Others', href: '/#services' },
  ],
}

export const socialLinks = [
  { platform: 'Facebook', icon: 'facebook', href: '#' },
  { platform: 'Twitter', icon: 'twitter', href: '#' },
  { platform: 'Pinterest', icon: 'pinterest', href: '#' },
  { platform: 'LinkedIn', icon: 'linkedin', href: '#' },
  { platform: 'Instagram', icon: 'instagram', href: '#' },
]
