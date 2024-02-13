import Content from "../models/content";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const content = await Content.find();

  if (content.length === 0) {
    res.status(404).json({ message: "No content found" });
    return;
  }

  res.status(200).send(content);
};

export const getSeries = async (req: Request, res: Response): Promise<void> => {
  const series = await Content.find({ isSeries: true });

  if (series.length === 0) {
    res.status(404).json({ message: "No series found" });
    return;
  }

  res.status(200).send(series);
};

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  const movies = await Content.find({ isSeries: false });

  if (movies.length === 0) {
    res.status(404).json({ message: "No movies found" });
    return;
  }

  res.status(200).send(movies);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const content = await Content.findById(id);

  if (!content) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).send(content);
};
