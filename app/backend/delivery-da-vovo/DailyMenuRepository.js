import { database, BatchGetItemCommand } from "./dbConnection.js";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import DailyMenu from "./DailyMenu.js";

class DailyMenuRepository {

    #dynamoDbClient
    #tableName
    constructor() {
        this.#dynamoDbClient = database
        this.#tableName = "daily_menu"
    }


    async findById([...ids]) {
        const params = {
            RequestItems: {
                [this.#tableName]: {
                    Keys: ids.map(id => {
                        return {
                            date: {
                                "S": id.toString()
                            }
                        }
                    })
                }
            }
        }
        const command = new BatchGetItemCommand(params)
        const dynamoItems = (await this.#dynamoDbClient.send(command)).Responses[this.#tableName].map(unmarshall)

        return dynamoItems.map(item => DailyMenu.from(item))
    }
}

export { DailyMenuRepository }