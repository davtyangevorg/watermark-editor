import styled from 'styled-components'

export const StandartButton = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 25px;
    padding:${props => props.padding};
    outline: none;
    box-shadow: 0px 3px 9px #387DFF80;
    color: #FFFFFF;
    background: transparent linear-gradient(180deg, #5690FF 0%, #387DFF 100%) 0% 0% no-repeat padding-box;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    &:hover{
        background-image: linear-gradient(-179deg,#6EA0FF 5%,#518DFF 97%)
    }
`
export const StartEditButton = styled.button`
    position: relative;
    cursor: pointer;
    border: 0;
    font-size: 14px;
    font-weight: 600;
    color:#4F8BFF;
    background-color: #DEEAFF;
    padding:${props => props.padding};
    border-radius: ${props => props.borderRadius};
    width: ${props => props.width};
    margin: 30px auto;
    transition: all .1s;
    &:hover{
        color: white;
        box-shadow: 0px 3px 9px #387DFF80;
        background: transparent linear-gradient(180deg, #5690FF 0%, #387DFF 100%) 0% 0% no-repeat padding-box;
    }
`

export const CancelButton = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 25px;
    padding:${props => props.padding};
    outline: none;
    margin-right: 25px;
    background-color: #EEF5FF;
    font-size: 14px;
    font-weight: 600;
    color:#4F8BFF;
    padding: 13px 30px;
    transition: background-color .1s;
    &:hover{
        background-color: #DEEAFF;
    }
`
