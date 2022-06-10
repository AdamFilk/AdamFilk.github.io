import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        My Name is Aung Chan Oo
      </SectionTitle>
      <SectionText>
        I'm a web developer and I build awesome websites, web applications and
        other web services. Learn more about me from my resume
      </SectionText>
      <Button
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/file/d/1XhCwrR_fmtCWzCEu4cI5rRZiPjMXCquX/view?usp=sharing")
        }
      >
        Get My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
