import {ErrorRequestHandler} from "express"

const errorMidleware : ErrorRequestHandler = async (err, _req, res, _next) => {
    const {status, message} = err;
    return status ? res.status(status).json({error : message}) : res.status(500).json({error : 'Internal Server Error'});
};

export default errorMidleware;