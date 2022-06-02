import React from "react";
import styled from "styled-components";

import { Summary } from "./Summary";

// const visitorData = {
//   imgSrc: "",
//   imgAlt: "",
//   title: "",
//   description: "",
//   buttonText: "",
//   buttonLink: "",
// };

const visitorData = {
  imgSrc: "mug_img.png",
  imgAlt: "mug image",
  title: "Get more visitor engagement.",
  description:
    "Proven solutions for immediate and long-term visitor engagement. Interactive reference tools distributed as low-cost souvenirs. We design and produce collateral materials that are proven to be more highly valued and kept longer. Use to promote mobile engagement, multiple impressions over many YEARS and referrals. Use HostWorksPromo to build your brand equity, engage guests and boost your brand, service and product recall.",
  buttonText: "Find out how",
  buttonLink:
    "https://www.hostworkspromo.com/si/365452884/gp1/graphic-package-1",
};

const impressionData = {
  imgSrc: "impression.png",
  imgAlt: "Eugene Oasis branded products.",
  title: "Make a lasting impression.",
  description:
    "Guest Amenities used for reference are more highly valued. The data provides value far in excess of the item itself. Custom amenities are used multiple times per day and can be kept for 2+ years. Three factors influence a Guest's decision to book your property. Pictures, Price and Reviews. These products are proven to add value to your guests' stay and influence positive reviews.",
  buttonText: "Get your design now",
  buttonLink:
    "https://www.hostworkspromo.com/si/365452884/gp1/graphic-package-1",
};

const referralsData = {
  imgSrc: "",
  imgAlt: "",
  title: "",
  description: "",
  buttonText: "",
  buttonLink: "",
};

export const ContentBlocks = (props) => {
  return (
    <Container>
      <Summary data={visitorData} />
      <Summary data={impressionData} swap />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
