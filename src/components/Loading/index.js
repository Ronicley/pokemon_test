import React from "react";
import ReactLoading from "react-loading";

// eslint-disable-next-line react/prop-types
const Loading = ({type = "spin", color = "#ffffff", width = 100, height = 200}) => {
  return <ReactLoading type={type} color={color} height={height} width={width}/>;
};

export default Loading;