import styled from "styled-components";

import { interviewStatus } from "@enums";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(${({ count = 5 }) => count}, auto);
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 13em 12.375em 17.0625em 8.625em auto;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: ${({ theme: { padding } }) => padding.medium};
  align-items: center;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.strokeBlue};
  font-weight: ${({ unread }) => (unread ? "600" : "400")};

  &:last-child {
    border-bottom: none;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.jumbo};
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img`
  width: 1.875em;
  height: 1.875em;
  border-radius: 50%;
  margin-right: 0.75em;
`;

export const UnreadIcon = styled.span`
  display: inline-block;
  width: 0.625em;
  height: 0.625em;
  background-color: ${({ status, theme: { colors } }) =>
    status === interviewStatus.interviewing
      ? colors.jungleGreen
      : colors.unreadGray};
  border-radius: 50%;
  margin-right: 0.3125em;
`;

export const Date = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.grayChateau};
  margin-left: 0.3125em;
`;
