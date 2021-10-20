import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const FullSugestao = () => {

    const {idSugestao} = useParams();

    useEffect(() => {

    }, [])

    return(
        <div>
            <p>Livro específico {idSugestao}</p>
        </div>
    )
}

export default FullSugestao;