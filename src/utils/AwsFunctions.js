import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    let params = {
        TableName: tableName
    }

    // Only print out data
    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

export const putData = (tableName, data) => {
    let params = {
        TableName: tableName
    }

    docClient.put(params, function (err, data) {
        if (err) console.log("Error:", err)
        else console.log("Put success:", data)
    })
}