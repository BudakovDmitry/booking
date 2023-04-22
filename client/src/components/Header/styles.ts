import styled from 'styled-components'

export const HeaderContainer = styled.header`
    min-height: 50px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`


export const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderLogo = styled.img`
    max-width: 50px;
    display: block;
    margin-right: 20px;
`

export const HeaderLogoText = styled.h2`
    font-weight: 700;
    font-size: 38px;
    color: #ed6c02;
`