import styled from 'styled-components';

export const ButtonStyled = styled.button`
  margin: 16px;
  height: 61px;
  width: 50%;
  border: 0;
  background: #5EC23D;
  border-radius: 43px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;

	&:hover {
		backgorund: #578747;
	}
   @media(min-width: 800px){
    width: 25%;
  }
  `;
