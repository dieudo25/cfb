import React from 'react';

const DynamicZone = ({ sections }) => (
    <>
        {sections.map((component) => 
          ((() => {
            switch(component.strapi_component) {
              case 'page.hero-image':
                return <p key={component.id}>{component.text}</p>
              default:
                return <h2 key={Math.random()}>default case - component not found</h2>
            }
          })())
        )}
    </>
);

export default DynamicZone;