/**
 * Testimonials Configuration
 *
 * This file manages testimonials displayed on the About page.
 *
 * To enable/disable testimonials:
 * - Set TESTIMONIALS_ENABLED to true/false
 *
 * To add a new testimonial:
 * 1. Add a new object to the testimonials array
 * 2. Fill in name, location, rating (1-5), and text
 * 3. Provide both Bosnian (bs) and English (en) versions
 */

export const TESTIMONIALS_ENABLED = false; // Set to true to show testimonials

export interface Testimonial {
  name: string;
  location: {
    bs: string;
    en: string;
  };
  rating: number; // 1-5 stars
  text: {
    bs: string;
    en: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    name: "Marko Petrović",
    location: {
      bs: "Zenica",
      en: "Zenica",
    },
    rating: 5,
    text: {
      bs: "Smetovi su pravi dragulj! Nevjerojatan pogled, čist zrak i odlične staze za planinarenje. Svakako ću se vratiti sa familijom.",
      en: "Smetovi is a true gem! Incredible views, clean air and excellent hiking trails. Will definitely return with my family.",
    },
  },
  {
    name: "Ana Milanović",
    location: {
      bs: "Sarajevo",
      en: "Sarajevo",
    },
    rating: 5,
    text: {
      bs: "Organizovali su fantastičnu voženu turu. Vodič je bio vrlo informisan i iskusan. Preporučujem svima koji vole prirodu!",
      en: "They organized a fantastic guided tour. The guide was very knowledgeable and experienced. I recommend it to everyone who loves nature!",
    },
  },
  {
    name: "Stefan Jovanović",
    location: {
      bs: "Tuzla",
      en: "Tuzla",
    },
    rating: 4,
    text: {
      bs: "Odličo mjesto za bijeg od gradske vreve. Posebno mi se sviđa što se organizuju aktivnosti za čišćenje planine. Bravo za trud!",
      en: "Excellent place to escape from city noise. I especially like that they organize mountain cleaning activities. Bravo for the effort!",
    },
  },
  {
    name: "Milica Stanković",
    location: {
      bs: "Banja Luka",
      en: "Banja Luka",
    },
    rating: 5,
    text: {
      bs: "Sa djecom smo učesrtvovali u edukativnoj radionici o lokalnoj fauni. Djeca su bila oduševljena, a i mi odrasli smo puno naučili!",
      en: "We participated with our children in an educational workshop about local fauna. The kids were thrilled, and we adults learned a lot too!",
    },
  },
  {
    name: "Dejan Nikolić",
    location: {
      bs: "Travnik",
      en: "Travnik",
    },
    rating: 5,
    text: {
      bs: "Kao fotograf, mogu reći da Smetovi nude spektakularne kadrove. Svaki godišnje doba ima svoju čar i ljepotu.",
      en: "As a photographer, I can say that Smetovi offers spectacular shots. Every season has its own charm and beauty.",
    },
  },
  {
    name: "Emina Hadžić",
    location: {
      bs: "Mostar",
      en: "Mostar",
    },
    rating: 4,
    text: {
      bs: "Prva posjeta Smetovima, ali definitivno ne i poslednja! Planinski dom je udoban, a personal bardzo prijatelan.",
      en: "First visit to Smetovi, but definitely not the last! The mountain lodge is comfortable and the staff is very friendly.",
    },
  },
];
