import logokabinet from '../assets/logo-tiub.jpeg'
import PDH from '../assets/mockup-pdh.png'
import nexterra from '../assets/nexterra.png'
import kopiew from '../assets/kopiew.png'

export interface PortfolioItem {
  title: string;
  image: string;
  description: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Cabinet Logo",
    image: logokabinet,
    description: "As the designer for the Universitas Brawijaya Taekwondo Club, I was responsible for creating the official Cabinet Logo. I fully developed and designed this aggressive, roaring tiger vector asset using Adobe Illustrator, ensuring it meets professional vector-art standards for all applications."
  },
  {
    title: "Official PDH",
    image: PDH,
    description: "I designed the official PDH (Daily Service Uniform) for the Universitas Brawijaya Taekwondo Club, utilizing Adobe Illustrator to create a comprehensive technical mockup. My process involved developing multiple colorway variations and managing complex vector paths to ensure precision in the uniform's construction and branding placement."
  },
  {
    title: "nexTerra",
    image: nexterra,
    description: "nexTerra is an educational web platform I developed to raise awareness about endangered species through a modern and responsive user interface."
  },
  {
    title: "KoPiew",
    image: kopiew,
    description: "KoPiew is a lifestyle-oriented web platform I developed to help users discover the best and nearest 'kalcer' cafes in their area."
  }
];