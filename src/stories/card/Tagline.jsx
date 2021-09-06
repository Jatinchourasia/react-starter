import React from "react";
import styled from "styled-components";

const Tagline = (props) => {
  const { icons } = props;
  return (
    <StyledComponent.listWrapper>
      {icons.map((icon) => {
        return (
          <li>
            <img src={icon.url} alt="" />
            {icon.text}
          </li>
        );
      })}
    </StyledComponent.listWrapper>
  );
};

export default Tagline;

const StyledComponent = {
  listWrapper: styled.ul`
    list-style: none;
    padding-left: 0;
    li {
      display: flex;
      padding: 0;
      margin-bottom: 0.5rem;
    }
    img {
      height: 1.2rem;
      margin-right: 7px;
    }
  `,
};
