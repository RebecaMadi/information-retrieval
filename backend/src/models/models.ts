import esClient from "./client";

export async function findByQuery(index: string, query: string) {
    return await esClient.search({
        index: index,
        _source: ["title", "body"],
        query: {
            simple_query_string: {
                fields: [ "title", "body" ],
                query: query
            }
        }
    })
        .then((result) => result)
        .catch((err) => err);
}