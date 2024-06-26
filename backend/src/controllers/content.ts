import Content from "../models/content/content";
import { Request, Response } from "express";
import { IContent } from "../types/content-type";
import { Extensions } from "../Extensions";

//@route POST /api/v1/content/getAll
//@access private
export const getAll = async (req: Request, res: Response): Promise<void> => {
  const content = await Content.find();

  if (content.length === 0) {
    res.status(404).json({ message: "No content found" });
  }
  const contentToSend: IContent[] = content.map((item) =>
    Extensions.AsIContent(item)
  );

  res.status(200).send(contentToSend);
};

//@route POST /api/v1/content/getSeries
//@access private
export const getSeries = async (req: Request, res: Response): Promise<void> => {
  const series = await Content.find({ isSeries: true });

  if (series.length === 0) {
    res.status(404).json({ message: "No series found" });
  }

  const seriesToSend: IContent[] = series.map((item) =>
    Extensions.AsIContent(item)
  );

  res.status(200).send(seriesToSend);
};

//@route POST /api/v1/content/getMovies
//@access private
export const getMovies = async (req: Request, res: Response): Promise<void> => {
  const movies = await Content.find({ isSeries: false });

  if (movies.length === 0) {
    res.status(404).json({ message: "No movies found" });
  }

  const moviesToSend: IContent[] = movies.map((item) =>
    Extensions.AsIContent(item)
  );

  res.status(200).send(moviesToSend);
};

//@route POST /api/v1/content/getById/:id
//@access private
export const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const content = await Content.findById(id);

  if (!content) {
    res.status(404).json({ message: "Not found" });
  } else {
    const contentToSend: IContent = Extensions.AsIContent(content);
    res.status(200).send(contentToSend);
  }
};

//@route POST /api/v1/content/getRandom
//@access private
export const getRandomContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const content = await Content.find();

  if (content.length === 0) {
    res.status(404).json({ message: "No content found" });
    return;
  }

  const randomIndex = Math.floor(Math.random() * content.length);

  const randomContent = Extensions.AsIContent(content[randomIndex]);

  res.status(200).send(randomContent);
};

//@route POST /api/v1/content/search
//@access private
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
};
