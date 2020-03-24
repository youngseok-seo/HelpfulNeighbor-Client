import React from "react";
import styled from 'styled-components';

const S = {};

S.page = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

S.Logo = styled.img` 
    // position: fixed;
    height: 50vh;
    width; auto;
   
`;

S.LogoContainer = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;
    
`;

S.Button = styled.button`
    
    height: auto;
    width: auto;
    padding: 2vw;

    font-family: Poppins;
    font-weight: 300;
    font-size: 1.5em;
    color: grey;
    text-align: center;
    background-color: white;
    border-color: #0003FF;
    border-width: thin;
    border-radius: 10px;
    outline: none;
    text-decoration: none;

    &:hover {
        color: #0003FF;
        transform: scale(1.05);
    }
`;

S.ButtonContainer = styled.div`

`;




const LandingPage = () => {
    
    return (
        <S.page>
            <S.LogoContainer>
                <S.Logo src="https://user-images.githubusercontent.com/46095809/77264774-51971880-6c58-11ea-854e-a432342d1075.png" />

            </S.LogoContainer>
            <S.ButtonContainer as="a" href="/home">
                <S.Button>Get Started</S.Button>           
            </S.ButtonContainer>
        </S.page>
    );
    
    
};

export default LandingPage;

