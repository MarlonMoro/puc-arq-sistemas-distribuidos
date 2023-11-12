import { execute } from "./AvailableMenuUseCase.js";

import { handler } from "./menuController.js";

const main = async (event) => {

    const body = {
        queryStringParameters: {
            begin: "teste"
        }
    }
    handler(body)
    //const availableMenus = await execute({ begin: '2023-02-11', end: '2023-02-21' })
    //console.log(availableMenus)
    console.log('finalizou handler')
}

(async () => {
    console.log('iniciando')
    main('teste')
    console.log('acabou')
})()