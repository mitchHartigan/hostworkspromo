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

export const ContentBlocks = (props) => {
  return (
    <Container>
      <Summary data={visitorData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
