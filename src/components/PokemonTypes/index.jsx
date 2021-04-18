import React, { useEffect, useState } from "react";
import dictionaryPokemonTypes from "./dictiorany";
import * as Style from "./styled";
import PropTypes from "prop-types";

const Types = ({ type }) => {
    const [pokemonType, setPokemonType] = useState([]);

    useEffect(() => {
        let arr = [];

        type.forEach((item) => {
            arr.push(dictionaryPokemonTypes[`${item.type.name}`]);
        });

        setPokemonType(arr);
    }, [type]);

    return (
        <Style.Box>
            {pokemonType &&
                pokemonType.map((item, index) => (
                    <Style.Type key={index} color={item?.color}>
                        {item?.name}
                    </Style.Type>
                ))}
        </Style.Box>
    );
};

Types.propTypes = {
    type: PropTypes.array
};

export default Types;
