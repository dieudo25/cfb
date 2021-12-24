import React from 'react';

import HeroImage from './sections/heroImage';
import C2AImage from './sections/c2aImage';
import RichTextButton from './sections/richTextButton';
import SliderCard from './../flex/sections/sliderCard';
import Header from './sections/header';
import Grid from './sections/grid';
import Paragraph from './sections/paragraph';
import RichText2Image from './sections/richText2Image';

const DynamicZone = ({ sections }) => (
    <>
      {sections.map((component) => 
        ((() => {
          switch(component.strapi_component) {
            case 'page.hero-image':
              return <HeroImage key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.call2action':
              return <C2AImage key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.richtext-button':
              return <RichTextButton key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.slider':
              return <SliderCard key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.header':
              return <Header key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.grid':
              return <Grid key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.paragraph':
              return <Paragraph key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.rich-text2-image':
              return <RichText2Image key={ `${component.strapi_component}_${component.id}` } data={component}/>
            default:
              return <h2 key={Math.random()}>Default case - component not found</h2>
          }
        })())
      )}
    </>
);

export default DynamicZone;