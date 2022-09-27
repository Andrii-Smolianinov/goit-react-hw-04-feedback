import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 6px 3px 2px 	#B0C4DE;
`;