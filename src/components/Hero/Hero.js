import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am <br />
          Bleron Hamiti
        </SectionTitle>
        <SectionText>
        A passionate Full Stack Software Developer with knowledge in with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
    
        
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;