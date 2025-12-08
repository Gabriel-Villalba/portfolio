import favStoreImg from '../assets/favStore.jpeg';
import ahorcadoImg from '../assets/ahorcado.jpeg';

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  website: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'FavStore',
    type: 'Catálogo sin carrito',
    description: 'Sitio web para emprendimiento de parrillas portátiles. Muestra productos con imágenes, descripciones detalladas y precios, facilitando la consulta directa por WhatsApp.',
    image: favStoreImg,
    tags: ['React','TypeScript', 'TailwindCSS', 'Responsive'],
    website: 'https://www.favstore.com.ar'
  },
   {
    id: '2',
    title: 'Ahorcado',
    type: 'Juego online',
    description: 'Juego desarrollado como pasatiempo personal. Implementa la lógica clásica del ahorcado, permitiendo a los usuarios adivinar palabras letra por letra mientras se rastrean los intentos y el progreso.',
    image: ahorcadoImg,
    tags: ['React', 'TailwindCSS','TypeScript', 'Responsive'],
    website: 'https://cfc-ahorcado.vercel.app'
  }
];
