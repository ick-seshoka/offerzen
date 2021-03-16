import styled from "styled-components";
import checkboxInactiveIcon from "@assets/icons/checkbox-inactive.svg";
import checkboxActiveIcon from "@assets/icons/checkbox-active.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.grayChateau};
  text-transform: capitalize;
`;

export const Checkbox = styled.button`
  background: transparent;
  border: none;
  color: transparent;
  padding: 0;
  outline: none;
  width: 1.375em;
  height: 1.375em;
  padding-left: ${({ theme: { padding } }) => padding.small};
  cursor: pointer;
`;

export const InactiveCheckbox = styled.img.attrs({
  src: checkboxInactiveIcon,
})``;

export const ActiveCheckbox = styled.img.attrs({
  src: checkboxActiveIcon,
})``;
