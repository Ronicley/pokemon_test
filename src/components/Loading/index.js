import React from "react";
import ReactLoading from "react-loading";

// eslint-disable-next-line react/prop-types
const Loading = ({type, color}) => {
  return <ReactLoading type={type} color={color} height={200} width={100}/>;
};

export default Loading;