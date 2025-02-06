interface Artist {
  name: string;
  instagram: string;
  image: string;
  styles: string[];
  bio: string;
}

export const artists: Artist[] = [
  {
    name: "Huevo",
    instagram: "https://www.instagram.com/huevo.tmno",
    image: "/huevo.jpg",
    styles: ["Traditional", "Neo-Traditional"],
    bio: "Especializado en diseños tradicionales con un toque moderno.",
  },
  {
    name: "Emi",
    instagram: "https://www.instagram.com/emi_tatuero",
    image: "/emi.jpg",
    styles: ["Blackwork", "Dotwork"],
    bio: "Creando patrones intrincados y diseños en blackwork.",
  },
  {
    name: "Pity",
    instagram: "https://www.instagram.com/pitylocuras",
    image: "/pity.jpg",
    styles: ["Japanese", "Color"],
    bio: "Maestro del color y arte inspirado en el estilo japonés.",
  },
  {
    name: "Dalma",
    instagram: "https://www.instagram.com/d.almatattoo",
    image: "/dalma.jpg",
    styles: ["Fine Line", "Minimalist"],
    bio: "Especializada en diseños delicados y minimalistas.",
  },
];