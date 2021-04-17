import React, {useEffect, useState} from "react";
import Button from "components/Button";
import iconPlus from "assets/images/plus.png";
import * as S from "./styled";
import {
  selectPokemonCaptured,
  setMaxAmountPokemon,
  setPokemonCapturedDetails
} from "../../pages/Map/mapSlice";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal";
import ButtonImage from "../ButtonImage";
import {Formik} from "formik";
import InputText from "../InputText";
import * as yup from "yup";
import InputNumber from "../InputNumber";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const pokemon = useSelector(selectPokemonCaptured);
  const dispatch = useDispatch();

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .required(),
    hp: yup
      .string()
      .required()
  });

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleSetPokemonDetails = (pokemon) => dispatch(setPokemonCapturedDetails(pokemon));

  useEffect(() => {
    if (capturedPokemons.length < 6) {
      if (pokemon !== null) setCapturedPokemons([...capturedPokemons, pokemon]);
    } else {
      dispatch(setMaxAmountPokemon(true));
    }
  }, [pokemon]);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {
          capturedPokemons.length === 0 ? (
            <S.SideBarItem>?</S.SideBarItem>
          ) : (
            capturedPokemons.map((item, index) => {
              return (
                <S.SideBarItem key={index} onClick={() => handleSetPokemonDetails(item)}>
                  <S.PokemonImg src={item?.sprites?.front_default} alt="Pokemon captured"/>
                </S.SideBarItem>
              );
            })
          )
        }
      </S.SideBarList>

      <S.ModalWrapper>
        <Modal
          img={<ButtonImage/>}

          body={
            <Formik
              initialValues={{name: "", password: ""}}
              validationSchema={contactSchema}
              onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit}>
                  <InputText
                    type="text"
                    name="name"
                    label="NOME"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                  <InputNumber
                    name="hp"
                    label="HP"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hp}
                  />
                  {errors.hp && touched.hp && errors.hp}
                  <InputNumber
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          }
          actions={
            <></>
          }
          onClose={handleCloseModal}

          open={openModal}
        />
      </S.ModalWrapper>

      <Button icon={iconPlus} onClick={handleOpenModal}/>
    </S.SideBarWrapper>
  );
};

export default Sidebar;
