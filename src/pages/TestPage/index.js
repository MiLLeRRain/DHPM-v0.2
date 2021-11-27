import React from "react";
import {fetchData, putData} from "../../utils/AwsFunctions";

function TestPage() {
    const fetchDataFormDynamoDB = async () => {
        await fetchData('dhpm_products')
    }

    const addDataToDynamoDB = async () => {
        const pushData = {
            "id": 7,
            "title": "PRODUCT 7",
            "loc": "p7",
            "description": "description 7",
            "detail": "Barbieren rausperte wunderbar weiterhin filzhutes vom war auf das. Vor ist gewerbe instand hei dorthin gut kleines. Mehrere lie welchem horchte gut nachher breiten bedeckt war ist. Reist leber recht habet tun steht genie see. Lernen du fremde setzte lehren regens treppe ku. Stuckchen bin schleiche nebendran schonsten stadtchen nun ausblasen. Konntet schalte spuckte du stunden mu einfach taghell."
        }

        await putData('dhpm_products', pushData)
    }

    return (
        <div>
            TEST PAGE HERE
            <button onClick={() => fetchDataFormDynamoDB()}> Fetch </button>
            <button onClick={() => addDataToDynamoDB()}> Put </button>
        </div>
    );
}

export default TestPage