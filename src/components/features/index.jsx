import React, {useEffect, useState} from 'react';
import * as Style from './styled'
import Types from "../PokemonTypes";

const Features = ({weight, height, hp, name, abilities, types}) => {
  const [pokemonTypes, setPokemonTypes] = useState('');


  useEffect(() => {
    let finalString = ''
    abilities.forEach((element) => {
      finalString += element.ability.name+", "
    })

    setPokemonTypes(finalString)
  }, [abilities])


  return (
    <Style.Container>
      <Style.PokemonName>
        {name}
      </Style.PokemonName>
      <Style.Row>
        <Style.Column>
          <Style.Label>
            HP
          </Style.Label>
          {hp}/{hp}
        </Style.Column>
        <Style.Divider/>
        <Style.Column>
          <Style.Label>
            ALTURA
          </Style.Label>
          {height}
        </Style.Column>
        <Style.Divider/>
        <Style.Column>
          <Style.Label>
            PESO
          </Style.Label>
          {weight}
        </Style.Column>
      </Style.Row>
      <Style.Column>
        <Style.Row>
          <Style.SectionTitle>
            TIPO
          </Style.SectionTitle>
        </Style.Row>
        <Style.Row>
        <Types type={types}/>
        </Style.Row>
      </Style.Column>

      <Style.Column>
        <Style.Row>
          <Style.SectionAbility>
            HABILIDADES
          </Style.SectionAbility>
        </Style.Row>
        <Style.Row>
          <Style.PokemonTypeText>
            {pokemonTypes.slice(0, -2)}
          </Style.PokemonTypeText>
        </Style.Row>
      </Style.Column>
    </Style.Container>
  )
}

export default Features