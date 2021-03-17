import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.grayChateau};
  padding: ${({ theme: { padding } }) => padding.medium};
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const PulsingHeart = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 30px 40px;
`;

export const Content = styled.div`
  top: 32px;
  left: 32px;
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--heartRed);
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

  &:after,
  &:before {
    content: " ";
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background: var(--heartRed);
  }
  &:before {
    left: -12px;
    border-radius: 50% 0 0 50%;
  }
  &:after {
    top: -12px;
    border-radius: 50% 50% 0 0;
  }

  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
