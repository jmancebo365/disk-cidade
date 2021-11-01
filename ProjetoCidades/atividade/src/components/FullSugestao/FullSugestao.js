import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const FullSugestao = () => {

    const {id} = useParams();


    useEffect(() => {

    }, [])
    return(
        <div>
            <p style={{color:'white'}}>Exibir sugestão de index: {id}</p> 
        </div>
    )
}

export default FullSugestao;