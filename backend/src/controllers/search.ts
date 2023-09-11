import { Request, Response } from "express";
import  searchService  from "../services";


export async function findByQuery(req: Request, res: Response) {
    const { q } = req.query;

    if(typeof q !== "string")
        return res.status(400).json("Busca inválida");

    return await searchService.findByQuery(q)
        .then(({ status, result }) => res.status(status).json(result))
        .catch(({ status, message }) => res.status(status).json(message));
}