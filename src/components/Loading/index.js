import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

const Loading = ({type = "spin", color = "#ffffff", width = 100, height = 200}) => {
  return <ReactLoading type={type} color={color} height={height} width={width}/>;
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Loading;