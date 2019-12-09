import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 7rem;
  justify-content: space-between;
  margin: 3rem 0;
`;

export const TextInput = styled.input`
font-size: inherit;
font-family: inherit;
height: 2rem;
padding-left: 5px;
`;


export const SubmitButton = styled.input`
background: ${({ theme }) => theme.colors.primary};
border: none;
font-size: inherit;
font-family: inherit;
color: #ffffff;
height: 2rem;
cursor: pointer;

&:hover {
    background: #333;
    
  }
`;
