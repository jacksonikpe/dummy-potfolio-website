import React from "react";
import { Section } from "./LoaderStyle.js";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = ({ loading }) => {
  let color = "#F37A24";
  return (
    <Section>
      <ClimbingBoxLoader loading={loading} color={color} size={20} />
    </Section>
  );
};

export default Loader;
