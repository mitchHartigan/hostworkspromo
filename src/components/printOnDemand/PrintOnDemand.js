import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { ProductCard } from "./ProductCard";

import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "../FadeIn";

const businessCardData = {
  imgSrc: "oasis_business_card.png",
  imgAlt: "Eugene Oasis Business Card",
  name: "Business Card, Rounded, 2 Sided",
  linkTarget:
    "https://hostworkspromo.orders.com/business-card-round-corners-2-sided",
};

const bookmarkData = {
  imgSrc: "oasis_bookmarks.png",
  imgAlt: "Eugene Oasis Bookmarks",
  name: "Bookmarks, 2.25 x 8.25, 2 Sided",
  linkTarget: "https://hostworkspromo.orders.com/bookmark-225-x-825-2-sided",
};

const memoPadData = {
  imgSrc: "oasis_memo_pad.png",
  imgAlt: "Eugene Oasis memo pad product",
  name: "Memo Pad, 4.25 x 5.5",
  linkTarget: "https://hostworkspromo.orders.com/memo-pad-425x55",
};

const playingCardData = {
  imgSrc: "oasis_playing_cards.png",
  imgAlt: "Eugene Oasis playing cards",
  name: "Playing Cards",
  linkTarget: "https://hostworkspromo.orders.com/playing-cards",
};

export const PrintOnDemand = () => {
  const [visible, setVisible] = useState();

  return (
    <Container>
      <VisibilitySensor
        onChange={(visibile) => {
          if (visibile) setVisible(true);
        }}
      >
        <FadeIn delay="0" visible={visible}>
          <Title align="center" spanWidth="207px">
            Print on Demand
          </Title>
        </FadeIn>
      </VisibilitySensor>
      <FadeIn delay="200" visible={visible}>
        <Text>Low order minimums and fast turnarounds.</Text>
      </FadeIn>
      <FadeIn delay="400" visible={visible}>
        <ProductCardContainer>
          <ProductCard {...businessCardData} />
          <ProductCard {...bookmarkData} />
          <ProductCard {...memoPadData} />
          <ProductCard {...playingCardData} />
        </ProductCardContainer>
      </FadeIn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 12vh 0vw 15vh 0vw;

  @media (max-width: 900px) {
    margin: 40px 0px 70px 0px;
  }
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  margin-bottom: 5vh;
`;
