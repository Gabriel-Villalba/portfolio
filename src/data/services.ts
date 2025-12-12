export type ServiceIcon = 'globe' | 'package' | 'mail' | 'rocket';

// 2) Interfaz correcta:
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon; // 👈 ahora TypeScript valida las claves
}

// 3) Array de servicios (queda igual, pero ahora tipado perfecto):
export const services: Service[] = [
  {
    id: '1',
    title: 'Página institucional simple',
    description:
      'Sitio web profesional para presentar tu empresa o emprendimiento con información clara y diseño limpio.',
    icon: 'globe'
  },
  {
    id: '2',
    title: 'Catálogo de productos sin carrito',
    description:
      'Muestra tus productos de forma atractiva con imágenes, descripciones y precios. Ideal para WhatsApp Business.',
    icon: 'package'
  },
  {
    id: '3',
    title: 'Página de contacto',
    description:
      'Facilita la comunicación con tus clientes mediante formularios y datos de contacto organizados.',
    icon: 'mail'
  },
  {
    id: '4',
    title: 'Landing page simple',
    description:
      'Página enfocada en conversión para promocionar un producto, servicio o evento específico.',
    icon: 'rocket'
  }
];
