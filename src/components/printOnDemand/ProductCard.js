import React from "react";
import styled from "styled-components";

export const ProductCard = (props) => {
  const { imgSrc, imgAlt, name, linkTarget } = props;

  const cardWidth = 330;
  const cardHeight = 325;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      onClick={() => redirect(linkTarget)}
    >
      <Image src={imgSrc} alt={imgAlt} />
      <Text>{name}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardHeight}px;
  padding: 20px 20px 0px 20px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.42);
  margin: 0px 15px 0px 15px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.55);
    transform: translate(0px, -2px);
  }
  transition: transform 100ms ease;

  @media (max-width: 1450px) {
    margin: 20px 0px 20px 0px;
  }

  @media (max-width: 900px) {
    box-sizing: border-box;
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  font-weight: 500;
  text-align: center;
`;
