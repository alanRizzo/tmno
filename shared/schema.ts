import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bio: text("bio").notNull(),
  specialties: text("specialties").array().notNull(),
  imageUrl: text("image_url").notNull(),
});

export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  title: text("title").notNull(),
  artistId: integer("artist_id").references(() => artists.id),
  style: text("style").notNull(),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: timestamp("date").notNull(),
  artistId: integer("artist_id").references(() => artists.id),
  description: text("description").notNull(),
  style: text("style").notNull(),
  status: text("status").notNull().default("pending"),
});

export const insertArtistSchema = createInsertSchema(artists);
export const insertGallerySchema = createInsertSchema(gallery);
export const insertAppointmentSchema = createInsertSchema(appointments).omit({ 
  id: true,
  status: true 
}).extend({
  email: z.string().email(),
  phone: z.string().min(10),
  description: z.string().min(20),
});

export type Artist = typeof artists.$inferSelect;
export type Gallery = typeof gallery.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;
export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type InsertGallery = z.infer<typeof insertGallerySchema>;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
