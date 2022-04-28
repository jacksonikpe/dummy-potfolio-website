import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer and a self-taught front-end developer. I look
        forward to working with you to buid awesome projects.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
