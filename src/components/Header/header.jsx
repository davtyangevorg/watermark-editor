import React, { memo } from 'react'

import styled from 'styled-components'

import HeaderLogoImage from '../../images/renderforest-logo.png'

const Header = memo(() => {

    return (
        <HeaderWrapper>
            <LogoImage />
        </HeaderWrapper>
    )
})

const HeaderWrapper = styled.div`
    background-color: #387DFF;
    padding: 10px 20px 
`

const LogoImage = styled.img.attrs(props => ({
    src: HeaderLogoImage,
    alt: 'logo'
}))`
    height: 50px;
`


export default Header