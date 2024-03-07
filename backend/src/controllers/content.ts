import Content from "../models/content/content";
import { Request, Response } from "express";
import { IContent } from "../types/content-type";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const content = await Content.find();

  if (content.length === 0) {
    res.status(404).json({ message: "No content found" });
    return;
  }
  const contentToSend: IContent[] = content.map((item) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    img: item.img,
    imgTitle: item.imgTitle,
    imgThumb: item.imgThumb,
    imgVertical: item.imgVertical,
    trailer: item.trailer,
    movie: item.movie,
    duration: item.duration,
    year: item.year,
    limit: item.limit,
    genre: item.genre,
    isSeries: item.isSeries,
  }));

  res.status(200).send(contentToSend);
};

export const getSeries = async (req: Request, res: Response): Promise<void> => {
  const series = await Content.find({ isSeries: true });

  if (series.length === 0) {
    res.status(404).json({ message: "No series found" });
    return;
  }

  const seriesToSend: IContent[] = series.map((item) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    img: item.img,
    imgTitle: item.imgTitle,
    imgThumb: item.imgThumb,
    imgVertical: item.imgVertical,
    trailer: item.trailer,
    movie: item.movie,
    duration: item.duration,
    year: item.year,
    limit: item.limit,
    genre: item.genre,
    isSeries: item.isSeries,
  }));

  res.status(200).send(seriesToSend);
};

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  const movies = await Content.find({ isSeries: false });

  if (movies.length === 0) {
    res.status(404).json({ message: "No movies found" });
    return;
  }

  const moviesToSend: IContent[] = movies.map((item) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    img: item.img,
    imgTitle: item.imgTitle,
    imgThumb: item.imgThumb,
    imgVertical: item.imgVertical,
    trailer: item.trailer,
    movie: item.movie,
    duration: item.duration,
    year: item.year,
    limit: item.limit,
    genre: item.genre,
    isSeries: item.isSeries,
  }));

  res.status(200).send(moviesToSend);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const content = await Content.findById(id);

  if (!content) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).send(content);
};

export const getRandomContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.find();

    if (content.length === 0) {
      res.status(404).json({ message: "No content found" });
      return;
    }

    const randomIndex = Math.floor(Math.random() * content.length);

    const randomContent = content[randomIndex];

    res.status(200).json(randomContent);
  } catch (error) {
    console.error("Error fetching random content:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getContentBySearch = async (
  req: Request,
  res: Response
): Promise<void> => {
  const letter: string = req.query.q as string;  
  const regex = new RegExp(`^${letter}`, "i");
  const searchData = await Content.find({ title: { $regex: regex } });
  if (!searchData.length) {
    res.status(404).json({ error: "Content not found" });
    return;
  }
  res.json(searchData); 
}
