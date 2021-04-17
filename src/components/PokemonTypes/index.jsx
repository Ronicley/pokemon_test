import React, { useEffect, useState } from "react";
import dictionaryPokemonTypes from "./dictiorany";
import * as Style from "./styled";

// eslint-disable-next-line react/prop-types
const Types = ({ type }) => {
    const [pokemonType, setPokemonType] = useState([]);

    useEffect(() => {
        let arr = [];
        // eslint-disable-next-line react/prop-types
        type.forEach((item) => {
            arr.push(dictionaryPokemonTypes[`${item.type.name}`]);
        });
        setPokemonType(arr);
    }, [type]);

    return (
        <Style.Box>
            {pokemonType &&
                pokemonType.map((item, index) => (
                    <Style.Type key={index} color={item.color}>
                        {item.name}
                    </Style.Type>
                ))}
        </Style.Box>
    );
};

export default Types;
