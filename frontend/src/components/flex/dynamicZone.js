import React from 'react';

import HeroImage from './sections/heroImage';

const DynamicZone = ({ sections }) => (
    <>
    {console.log('sections', sections)}
        {sections.map((component) => 
          ((() => {
            console.log('component', component)
            switch(component.strapi_component) {
              case 'page.hero-image':
                return <HeroImage key={ `${component.strapi_component}_${component.id}` } data={component}/>
              default:
                return <h2 key={Math.random()}>default case - component not found</h2>
            }
          })())
        )}
    </>
);

export default DynamicZone;