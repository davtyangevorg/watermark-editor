import React from 'react'

import { useDispatch } from 'react-redux'

import styled from 'styled-components'

import { StartEditButton } from '../../styledComponents/Buttons.jsx'

import UploadImageSrc from '../../../images/upload.svg'

import { createToolbarTypeAndValue } from '../../../redux/main-reducer.js'

const StartButtons = () => {

    const dispatch = useDispatch()

    const handleClickButton = (event) => {
        if (event.type === 'click') {   
            dispatch(createToolbarTypeAndValue('text', 'BeeTV'))
        } else {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) dispatch(createToolbarTypeAndValue('image', reader.result))
            }
            reader.readAsDataURL(event.target.files[0])
        }
    }

    return (
        <StartButtonsWrapper>
            <ImageUploadInputLabel htmlFor='fileUpload'>
                UPLOAD YOUR LOGO<UploadImage alt='upload' src={UploadImageSrc} />
            </ImageUploadInputLabel>
            <ImageUploadInput onChange={handleClickButton} type='file' id='fileUpload' />
            <TextBetweenLines>or</TextBetweenLines>
            <StartEditButton
                onClick={handleClickButton}
                width='110px'
                padding='12px 20px'
                borderRadius='5px'
            >
                Type text
            </StartEditButton>
        </StartButtonsWrapper>
    )
}

export default StartButtons

const ImageUploadInput = styled.input`
    display: none;
`
const StartButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    margin: auto;
`
const UploadImage = styled.img`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
`
const TextBetweenLines = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #545F7E;
    position: relative;
    &::after{
        display: block;
        content: '';
        position: absolute;
        height: 1px;
        width: 85px;
        left: 15px;
        top: 50%;
        background: transparent linear-gradient(270deg, #C1C9E0 0%, #C1C9E000 100%) 0% 0% no-repeat padding-box;
    }
    &::before{
        display: block;
        content: '';
        position: absolute;
        height: 1px;
        width: 85px;
        background: transparent linear-gradient(170deg, #C1C9E0 0%, #C1C9E000 100%) 0% 0% no-repeat padding-box;
        right: 15px;
        top: 50%;
    }
`
const ImageUploadInputLabel = styled.label`
    position: relative;
    cursor: pointer;
    border: 0;
    font-size: 14px;
    font-weight: 600;
    color:#4F8BFF;
    background-color: #DEEAFF;
    padding:13px 30px 13px 45px;
    border-radius: 30px;
    margin: 30px auto;
    transition: all .1s;
    &:hover{
        color: white;
        box-shadow: 0px 3px 9px #387DFF80;
        background: transparent linear-gradient(180deg, #5690FF 0%, #387DFF 100%) 0% 0% no-repeat padding-box;
    }
`
