import styled from 'styled-components';

export const FormStyle = styled.form`
	display: flex;
	flex-direction: column;
	justify-item: center;
	align-items: center;
`;

export const LabelStyle = styled.label`
	display: flex;
	flex-direction: column;
	justify-item: center;
	align-items: center;
`;

export const InputStyled = styled.input`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #B3ADAD;
  background: white;
  border-radius: 43px;
  height: 61px;
  margin: 16px;
  text-align: center;
  line-height: 61px;
  width: 85%;
  
  @media(min-width: 800px){
    width: 35%;
  }
`;

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
  
  @media(min-width: 800px){
    width: 25%;
  }
`;