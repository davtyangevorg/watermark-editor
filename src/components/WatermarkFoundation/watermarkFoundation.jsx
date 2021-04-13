import React, { memo } from 'react'

import styled from 'styled-components'

import { StandartButton, CancelButton } from '../styledComponents/Buttons.jsx'

import Toolbar from './ToolBar/toolBar.jsx'
import Canvas from './canvas.jsx'

const WatermarkFoundation = memo(({ setShowModal }) => {
    return (
        <WatermarkWrapper>
            <WatermarkHeader>Add Your Watermark</WatermarkHeader>
            <WatermarkInner>
                <Toolbar />
                <Canvas />
            </WatermarkInner>
            <WatermarkFooter>
                <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
                <StandartButton padding='13px 30px'>Done</StandartButton>
            </WatermarkFooter>
        </WatermarkWrapper>
    )
})
const WatermarkWrapper = styled.div`
    width: 1400px;
    max-width: 80%;
    margin: auto;
`

const WatermarkHeader = styled.div`
    font-size: 20px;
    font-weight: 600;
    color:#252E48;
    padding: 23px 0 15px 0;
    background-color:#EEF5FF;
    border-radius: 9px 9px 0px 0px;
    border-bottom: 1px solid #DEE3F0;
`
const WatermarkInner = styled.div`
    background-color: white;
    display: flex;
`

const WatermarkFooter = styled.div`
    background-color:#EEF5FF;
    padding: 36px 0;    
    border-radius: 0px 0px 9px 9px;
    border-top: 1px solid #DEE3F0;
`

export default WatermarkFoundation
