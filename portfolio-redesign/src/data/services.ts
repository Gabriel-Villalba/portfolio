export type ServiceIcon = 'globe' | 'package' | 'rocket' | 'brain' | 'mail';

// 2) Interfaz correcta
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon; // 👈 ahora TypeScript valida los strings
}

// 3) Mapa de iconos para renderizar
/*export const iconMap = {
  globe: FaGlobe,
  package: FaBox,
  rocket: FaRocket,
  brain: FaBrain,
  mail: FaEnvelope
};*/

// 3) Array de servicios (queda igual, pero ahora tipado perfecto):
export const services: Service[] = [
   {
    id: '1',
    title: 'Herramientas de IA para profesionales',
    description:
      'Usá PROYECTS y GPTs adaptados a tu negocio para hacer tus tareas más rápidas y simples. Menos esfuerzo, más resultados, mas productividad.',
    icon: 'brain'
  },
  {
    id: '2',
    title: 'Página institucional simple',
    description:
      'Sitio web profesional para presentar tu empresa o emprendimiento con información clara y diseño limpio.',
    icon: 'globe'
  },
  {
    id: '3',
    title: 'Catálogo de productos',
    description:
      'Muestra tus productos de forma atractiva con imágenes, descripciones y precios. Ideal para WhatsApp Business.',
    icon: 'package'
  },
 
  {
    id: '4',
    title: 'Landing page simple',
    description:
      'Página enfocada en conversión para promocionar un producto, servicio o evento específico.',
    icon: 'rocket'
  }
];
