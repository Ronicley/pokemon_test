import React, {useEffect, useState} from 'react';
import dictionaryPokemonTypes from './dictiorany';
import * as Style from './styled'

const Types = ({type}) => {
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    let arr = []
    type.forEach((item) => {
      arr.push(dictionaryPokemonTypes[`${item.type.name}`])
    })
    setPokemonType(arr)
  }, [type])

  return (
    <>
      {
        pokemonType.map((item) =>
          (
            <Style.Type color={item}>
              {item}
            </Style.Type>
          )
        )
      }
    </>
  )
};

export default Types;