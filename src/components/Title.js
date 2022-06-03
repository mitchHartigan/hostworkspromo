import React from "react";
import styled from "styled-components";

export const Title = (props) => {
  const { align, spanWidth, children } = props;

  return (
    <Container align={align}>
      <Text>{children}</Text>
      <Underline spanWidth={spanWidth} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
`;

const Text = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.xl};
  font-weight: 600;
`;

const Underline = styled.div`
  height: 4px;
  margin-top: 3px;
  width: ${(props) => props.spanWidth};
  background-color: ${({ theme }) => theme.color};
`;
