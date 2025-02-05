import {
  type Artist,
  type Gallery,
  type Appointment,
  type InsertArtist,
  type InsertGallery,
  type InsertAppointment,
} from "@shared/schema";

export interface IStorage {
  getArtists(): Promise<Artist[]>;
  getArtist(id: number): Promise<Artist | undefined>;
  getGallery(): Promise<Gallery[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
}

export class MemStorage implements IStorage {
  private artists: Map<number, Artist>;
  private gallery: Map<number, Gallery>;
  private appointments: Map<number, Appointment>;
  private currentIds: { artists: number; gallery: number; appointments: number };

  constructor() {
    this.artists = new Map();
    this.gallery = new Map();
    this.appointments = new Map();
    this.currentIds = { artists: 1, gallery: 1, appointments: 1 };

    // Seed initial data
    this.seedData();
  }

  private seedData() {
    const artists: InsertArtist[] = [
      {
        name: "Alex Rivers",
        bio: "Specializing in Japanese style tattoos with 10+ years of experience",
        specialties: ["Japanese", "Traditional"],
        imageUrl: "https://images.unsplash.com/photo-1648747067020-73f77da74e8f",
      },
      {
        name: "Sarah Chen",
        bio: "Known for intricate blackwork and geometric designs",
        specialties: ["Blackwork", "Geometric", "Minimalist"],
        imageUrl: "https://images.unsplash.com/photo-1648747067019-2d1f961d3481",
      },
    ];

    artists.forEach((artist) => {
      const id = this.currentIds.artists++;
      this.artists.set(id, { ...artist, id });
    });

    const galleryItems: InsertGallery[] = [
      {
        imageUrl: "https://images.unsplash.com/photo-1471666875520-c75081f42081",
        title: "Traditional Dragon",
        artistId: 1,
        style: "Japanese",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b",
        title: "Geometric Wolf",
        artistId: 2,
        style: "Geometric",
      },
    ];

    galleryItems.forEach((item) => {
      const id = this.currentIds.gallery++;
      this.gallery.set(id, { ...item, id });
    });
  }

  async getArtists(): Promise<Artist[]> {
    return Array.from(this.artists.values());
  }

  async getArtist(id: number): Promise<Artist | undefined> {
    return this.artists.get(id);
  }

  async getGallery(): Promise<Gallery[]> {
    return Array.from(this.gallery.values());
  }

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentIds.appointments++;
    const newAppointment: Appointment = {
      ...appointment,
      id,
      status: "pending",
    };
    this.appointments.set(id, newAppointment);
    return newAppointment;
  }
}

export const storage = new MemStorage();
