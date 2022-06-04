import React from "react";
import styled from "styled-components";

import { Summary } from "./Summary";

const visitorData = {
  imgSrc: "mug_img.png",
  imgAlt: "mug image",
  title: "Get more visitor engagement.",
  description:
    "Proven solutions for visitor engagement. These items are proven to be more highly valued and kept longer. Use to promote mobile engagement, multiple impressions over many YEARS and referrals.",
  buttonText: "Find out how",
  buttonLink: "https://www.hostworkspromo.com/why-hostworks.htm",
};

const impressionData = {
  imgSrc: "impression.png",
  imgAlt: "Eugene Oasis branded products.",
  title: "Make a lasting impression.",
  description:
    "Guest Amenities used for reference are more highly valued. Drive traffic to local event calendars and engage visitors more deeply in what the community has to offer. The data provides value far in excess of the item itself. ",
  buttonText: "Get your design now",
  buttonLink:
    "https://www.hostworkspromo.com/ws/ws.dll/Showroom?DistID=228063&StoreID=218372#5452884",
};

const referralsData = {
  imgSrc: "referalls.png",
  imgAlt: "Eugene Oasis logo converting to 5 star reviews",
  title: "Get more visitor referrals.",
  description:
    "These products are passed along. Nearly two-thirds are given away after the original recipient is finished using the item. They are proven to add value to your guests stay and influence positive referals and reviews.",
  buttonText: "Browse our products",
  buttonLink:
    "https://www.hostworkspromo.com/si/365452884/gp1/graphic-package-1",
};

export const ContentBlocks = (props) => {
  return (
    <Container>
      <Summary data={visitorData} />
      <Summary data={impressionData} swap />
      <Summary data={referralsData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 3vh 0vw 3vh 0vw;
`;
