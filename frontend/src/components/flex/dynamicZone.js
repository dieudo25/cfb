import React from 'react';

import HeroImage from './sections/heroImage';
import C2AImage from './sections/c2aImage';
import RichTextButton from './sections/richTextButton';
import SliderCard from './../flex/sections/sliderCard';
import Header from './sections/header';

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
            default:
              return <h2 key={Math.random()}>Default case - component not found</h2>
          }
        })())
      )}
    </>
);

export default DynamicZone;