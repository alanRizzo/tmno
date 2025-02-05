import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export function registerRoutes(app: Express): Server {
  app.get("/api/artists", async (_req, res) => {
    const artists = await storage.getArtists();
    res.json(artists);
  });

  app.get("/api/artists/:id", async (req, res) => {
    const artist = await storage.getArtist(Number(req.params.id));
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.json(artist);
  });

  app.get("/api/gallery", async (_req, res) => {
    const gallery = await storage.getGallery();
    res.json(gallery);
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const appointment = insertAppointmentSchema.parse(req.body);
      const created = await storage.createAppointment(appointment);
      res.status(201).json(created);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: fromZodError(error).message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
