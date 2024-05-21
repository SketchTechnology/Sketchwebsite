import React from 'react';

const CallButton = ({ phoneNumber }) => {
  const telUrl = `tel:${phoneNumber}`;

  return (
    <a href={telUrl}>
      <button className="call-button">
        <i className="fa fa-phone"></i> Call Us
      </button>
    </a>
  );
};

export default CallButton;
