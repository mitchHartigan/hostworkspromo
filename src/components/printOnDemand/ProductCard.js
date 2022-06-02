import React from "react";
import styled from "styled-components";

export const ProductCard = (props) => {
  const { imgSrc, imgAlt, name } = props;

  const cardWidth = 350;
  const cardHeight = 325;

  return (
    <Container cardWidth={cardWidth} cardHeight={cardHeight}>
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
    box-shadow: 0px 0px 7px rgba(255, 90, 95, 1);
    transform: scale(1.01);
  }
`;

const Image = styled.img``;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  font-weight: 500;
  text-align: center;
`;