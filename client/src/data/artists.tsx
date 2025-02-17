export interface Artist {
	id: number;
	name: string;
	instagram: string;
	image: string;
	styles: string[];
	video: string;
	bio: string;
}

export const artists: Artist[] = [
	{
		id: 1,
		name: "Huevo",
		instagram: "https://www.instagram.com/huevo.tmno",
		image: "/huevo.jpg",
		styles: ["Traditional", "Neo-Traditional"],
		video: "/huevo.mp4",
		bio: "Especializado en diseños tradicionales con un toque moderno.",
	},
	{
		id: 2,
		name: "Emi",
		instagram: "https://www.instagram.com/emi_tatuero",
		image: "/emi.jpg",
		styles: ["Blackwork", "Dotwork"],
		video: "/emi.mp4",
		bio: "Creando patrones intrincados y diseños en blackwork.",
	},
	{
		id: 3,
		name: "Pity",
		instagram: "https://www.instagram.com/pitylocuras",
		image: "/pity.jpg",
		styles: ["Japanese", "Color"],
		video: "/pity.mp4",
		bio: "Maestro del color y arte inspirado en el estilo japonés.",
	},
	{
		id: 4,
		name: "Dalma",
		instagram: "https://www.instagram.com/d.almatattoo",
		image: "/dalma.jpg",
		styles: ["Fine Line", "Minimalist"],
		video: "/dalma.mp4",
		bio: "Especializada en diseños delicados y minimalistas.",
	},
];
