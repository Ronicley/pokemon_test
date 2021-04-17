import React, { useState, useEffect } from "react";

import * as Style from "./styled";
import closeIcon from "../../assets/images/close.png";
import Button from "../Button";
import pokeball from "../../assets/images/pokeball.png";
import Features from "../features";
import { getRandomicPokemon } from "../../pages/Map/MapService";

// eslint-disable-next-line react/prop-types
const Modal = ({ open = false, onClose }) => {
    const [pokemon, setPokemon] = useState({});

    const getPokemon = async () => {
        let { data } = await getRandomicPokemon();
        setPokemon(data);
    };

    const handleCapturePokemon = () => {

    };

    useEffect(() => {
        if (open) {
            getPokemon().then();
        }
    }, [open]);

    return (
        open && (
            <Style.Container>
                <Style.ModalBody>
                    <Style.CloseButton onClick={onClose} src={closeIcon} />
                    <Style.ModalHeader>
                        {pokemon?.sprites && (
                            <img
                                src={pokemon?.sprites?.front_default}
                                width={200}
                                alt="Pokemon Sprite"
                            />
                        )}
                    </Style.ModalHeader>
                    <Style.ModalContent>
                        {pokemon.stats && (
                            <Features
                                height={pokemon.height}
                                hp={pokemon.stats[0].base_stat}
                                weight={pokemon.weight}
                                name={pokemon.name}
                                abilities={pokemon.abilities}
                                types={pokemon.types}
                            />
                        )}
                    </Style.ModalContent>
                    <Style.PokeballContaier>
                        <Button
                            icon={pokeball}
                            onClick={handleCapturePokemon}
                        />
                    </Style.PokeballContaier>
                </Style.ModalBody>
            </Style.Container>
        )
    );
};

export default Modal;
