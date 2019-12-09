import styled from 'styled-components';

export const Button = styled.button`
background: ${({ theme }) => theme.colors.primary};
border: none;
font-size: inherit;
font-family: inherit;
color: #ffffff;
height: 2rem;
margin-right: 2rem;
cursor: pointer;

&:hover {
    background: #333;
    
  }
`;



export const SecondaryButton = styled.button`
background: ${({ theme }) => theme.colors.secondary};
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
