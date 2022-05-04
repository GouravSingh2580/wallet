/**
 *
 * WelcomeText
 *
 */

import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

function WelcomeText() {
  return (
    <div>
      <H1>Welcome to NIET Wallet</H1>
      <img
        src={
          "https://cdn.dribbble.com/users/2574702/screenshots/6702374/metamask.gif"
        }
        alt="loading..."
        width="300"
        height="240"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

WelcomeText.propTypes = {};

export default WelcomeText;
