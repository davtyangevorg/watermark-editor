import React, { memo } from 'react'

import styled from 'styled-components'

import { animated, useSpring } from 'react-spring'

const Modal = memo(({ isShowModal, ...props }) => {

    const ModalContentFade = useSpring({
        transform: isShowModal ? ' scale(1)' : ' scale(0)',//translate(-50%,-50%)
    })

    return (
        <>
            {isShowModal
                && <Background>
                    <animated.div style={ModalContentFade}>
                        {props.children}
                    </animated.div>
                </Background>
            }
        </>
    )
})

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(36,45,71,.5);
    padding: 100px 20px; 
`

export default Modal
