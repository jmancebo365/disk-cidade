import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const FullSugestao = () => {

    const {id} = useParams();
    console.log(id);

    useEffect(() => {

    }, [])
    return(
        <div>
            <p style={{color:'white'}}>Exibir sugestão de index: {id}</p> 
        </div>
    )
}

export default FullSugestao;