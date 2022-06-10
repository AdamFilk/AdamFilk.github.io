import React from "react";
import {
  DiFirebase,
  DiMysql,
  DiNodejs,
  DiLaravel,
  DiReact,
  DiZend,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are the variaty of technologies I use for web development.
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <FaVuejs size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br /> Vue.js, React.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiFirebase size="3rem" />
          <DiLaravel size="3rem" />
          <DiNodejs size="3rem" />
          <DiMysql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel,MySQL,
            <br />
            Node.js/Express,MongoDb,Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br /> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
