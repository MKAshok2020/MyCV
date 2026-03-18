import React from 'react'

const openPDFLink  = ({ fileUrl, fileName }) => {
  return (
    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
      <i className="fa fa-download"></i> Download My CV 
    </a>
  );
};

export default openPDFLink
