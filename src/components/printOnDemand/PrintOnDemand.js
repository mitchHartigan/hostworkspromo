import React from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { ProductCard } from "./ProductCard";

const businessCardData = {
  imgSrc: "oasis_business_card.png",
  imgAlt: "Eugene Oasis Business Card",
  name: "Business Card, Rounded, 2 Sided",
};

const bookmarkData = {
  imgSrc: "oasis_bookmarks.png",
  imgAlt: "Eugene Oasis Bookmarks",
  name: "Bookmarks, 2.25 x 8.25, 2 Sided",
};

const memoPadData = {
  imgSrc: "oasis_memo_pad.png",
  imgAlt: "Eugene Oasis memo pad product",
  name: "Memo Pad, 4.25 x 5.5",
};

const playingCardData = {
  imgSrc: "oasis_playing_cards.png",
  imgAlt: "Eugene Oasis playing cards",
  name: "Playing Cards",
};

export const PrintOnDemand = () => {
  return (
    <Container>
      <Title align="center" spanWidth="207px">
        Print on Demand
      </Title>
      <Text>Low order minimums and fast turnarounds.</Text>
      <ProductCardContainer>
        <ProductCard {...businessCardData} />
        <ProductCard {...bookmarkData} />
        <ProductCard {...memoPadData} />
        <ProductCard {...playingCardData} />
      </ProductCardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5vh 0vw 10vh 0vw;
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  margin-bottom: 5vh;
`;
