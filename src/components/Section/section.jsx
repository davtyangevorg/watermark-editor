import React, { useState } from 'react'

import styled from 'styled-components'

import { StandartButton } from '../styledComponents/Buttons.jsx'

import WatermarkFoundatin from '../WatermarkFoundation/watermarkFoundation.jsx'
import Modal from '../Features/modal.jsx'

const Section = () => {

    const [isShowModal, setShowModal] = useState(true)

    return (
        <SectionWrapper>
            <StandartButton
                onClick={() => setShowModal(true)}
                padding='13px 30px'
            >   
                Add Your Watermark
            </StandartButton>
            <Modal
                isShowModal={isShowModal}
            >
                <WatermarkFoundatin setShowModal={setShowModal} />
            </Modal>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    text-align: center;
    padding-top: 100px;
`



export default Section
