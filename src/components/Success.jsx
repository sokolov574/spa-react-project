import React from 'react';

export const Success = ({ count }) => {

  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <div className="success-block">
      <img src={process.env.PUBLIC_URL + "/assets/success.svg"} alt="Success" />
      <h3>Successfully!</h3>
      <p>All {count} users have been sent an invitation.</p>
      <button onClick={handleBackClick} className="send-invite-btn">
        Back
      </button>
    </div>
  );
};

