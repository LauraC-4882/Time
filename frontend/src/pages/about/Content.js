// components/Content.js
import React from 'react';

const Content = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Content;
