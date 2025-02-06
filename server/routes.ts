
import { type Express } from "express";
import { Server } from "http";

export function registerRoutes(app: Express): Server {
  const server = new Server(app);

  // API routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  return server;
}
