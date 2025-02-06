
import { type Express } from "express";
import { Server } from "http";

export function registerRoutes(app: Express): Server {
  const server = new Server(app);

  return server;
}
