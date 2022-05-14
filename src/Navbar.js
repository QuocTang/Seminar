
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 110px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Print = styled.button`

`

const Navbar = () => {

  

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
            </Left>
                <Center>
                    <Logo>RFID Solution Việt Nam</Logo>
                    <Logo>Audit Report</Logo>
                </Center>
            <Right>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar