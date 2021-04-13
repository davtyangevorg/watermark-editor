import React,{memo} from 'react'

import styled from 'styled-components'

import BackgroundImageSrc from '../../images/backgroundImage2.png'

const Canvas = memo(() => {
    return (
        <CanvasWrapper>
            <Image alt='image' src={BackgroundImageSrc} />
        </CanvasWrapper>
    )
})

const CanvasWrapper = styled.div`
    margin: auto;
`
const Image = styled.img`
    width: 1000px;
    max-width: 100%;
`

export default Canvas
