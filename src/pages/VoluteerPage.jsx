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

S.SmallLogo = styled.img` 
    // position: fixed;
    height: 12vh;
   
`;

S.SmallLogoContainer = styled.div`
`;

S.Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 1vh;
    padding-right: 4vh;
`;

S.NavItem = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 1.2em;
    color: #0003FF;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
    }
`;

S.Top = styled.div`
    height: 12vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3vh;
`;

S.Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

S.Title = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: 2em;
    color: #0003FF;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 1%;
`;

S.Text = styled.div`
    display: flex;
    flex-direction: column;

    font-family: Poppins;
    font-size: 1.2em;
    color: #000000;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

S.TextParagraph = styled.p`
    font-weight: 300;
`;

S.TextParagraphBold = styled.p`
    font-weight: 600;
`;

S.Contact = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5em;
    color: #0003FF;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 1%;
`;

const VolunteerPage = () => {
    
    return (
        <S.page>
            <S.Top>
                <S.SmallLogoContainer as="a" href="/">
                    <S.SmallLogo 
                        src="https://user-images.githubusercontent.com/46095809/77265982-7640bf80-6c5b-11ea-8286-c3d85e85f33f.png" 
                    />
                </S.SmallLogoContainer>
                <S.Nav>
                    <S.NavItem as="a" href="/home">Home</S.NavItem>
                    <S.NavItem as="a" href="/about">About Us</S.NavItem>
                    <S.NavItem as="a" href="/volunteer">Volunteer</S.NavItem>
                </S.Nav>
            </S.Top>

            <S.Content>
                <S.Title>
                    Volunteer
                </S.Title>
                <S.Text>
                    <S.TextParagraphBold>
                        Want to help out? 
                    </S.TextParagraphBold>
                    <S.TextParagraph>
                        Please send us an email, and we will reach out with more information!
                    </S.TextParagraph>
                </S.Text>
                <S.Contact as="a" href="mailto:hnkamloops@gmail.com">
                    hnkamloops@gmail.com
                </S.Contact>
            </S.Content>
            
        </S.page>
    );
    
    
};

export default VolunteerPage;