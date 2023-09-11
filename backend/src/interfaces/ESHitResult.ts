export default interface ESHitResult {
    _index: string,
    _id: string,
    _score: number,
    _source: Record<string, object>;
}