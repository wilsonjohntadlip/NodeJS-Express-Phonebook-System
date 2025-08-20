import { constants } from '../constants.js'; 

const errorHandler = ( err, req, res, next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                Title: "Validation failed", 
                message: err.message, 
                stackTrace: err.stack 
            });
        break;
        case constants.UNAUTHORIZED:
            res.json({ 
                Title: "Unauthorized", 
                message: err.message, 
                stackTrace: err.stack 
            });
        break;
        case constants.FORBIDDEN:
            res.json({ 
                Title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack 
            });
        break;
        case constants.NOT_FOUND:
            res.json({ 
                Title: "Not Found", 
                message: err.message, 
                stackTrace: err.stack 
            });
        break;
        case constants.SERVER_ERROR:
            res.json({ 
                Title: "Server error", 
                message: err.message, 
                stackTrace: err.stack 
            });
        default:
            console.log("No error, all good!");
        break;
    }

        
};

export default errorHandler;