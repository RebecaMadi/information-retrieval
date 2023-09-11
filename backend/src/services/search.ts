import { searchModel } from "../models";
import CustomError from "../helpers/CustomError";
import ESHitResult from "../interfaces/ESHitResult";


export async function findByQuery(query: string) {
    if(query === "")
        throw new CustomError(400, "Campo inválido");

    return await searchModel.findByQuery("jusbrasil_info", query)
        .then((res) => {
            const { hits } = res.hits;
            if(!hits || hits.length === 0)
                throw new CustomError(404, "Nenhum resultado encontrado");

            const result = hits.map(({ _score, _source, _id }: ESHitResult) => {
                return { id: _id, score: _score, title: _source.title, body: _source.body}
            });

            return { result, status: 200 };
        });
}