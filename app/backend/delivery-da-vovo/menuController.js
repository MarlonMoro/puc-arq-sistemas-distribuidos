import { execute } from "./AvailableMenuUseCase.js"
import ValidationError from "./ValidationError.js";

const headers = {
    "custom-header": "teste",
    "Access-Control-Allow-Origin": "*"
}

const buildResponse = (error, body) => {

    if (error) {
        const responseError = error instanceof ValidationError ? {
            statusCode: error.status,
            headers: headers,
            body: JSON.stringify({
                message: `Error: ${error.message}`
            })
        } : {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({
                message: `Error: ${error.message}`
            })
        }
        return responseError;
    }

    const statusCode = body.dailyMenus?.length > 0 ? 200 : 204;

    return {
        statusCode: statusCode,
        headers: headers,
        body: JSON.stringify(body)
    }

}

export const handler = async (event) => {
    const startDate = event?.queryStringParameters?.begin;
    const endDate = event?.queryStringParameters?.end;

    try {
        const dailyMenus = await execute({ begin: startDate, end: endDate })
        return buildResponse(null, dailyMenus)
    } catch (error) {
        return buildResponse(error)
    }
}

