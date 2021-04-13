import React, { memo } from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

import StartButtons from './startButtons.jsx'
import ToolBarForEditImage from './toolBarForEditImage.jsx'
import ToolBarForEditText from './toolBarForEditText.jsx'

const ToolBar = memo(() => {

    const toolbarType = useSelector(state => state.toolbarType)

    return (
        <ToolBarWrapper>
            {toolbarType
                ? toolbarType === 'image' ? <ToolBarForEditImage /> : <ToolBarForEditText />
                : <StartButtons />
            }
        </ToolBarWrapper>
    )
})

const ToolBarWrapper = styled.div`
    border-right: 1px solid #DEE3F0;
    width: 340px;
    flex-shrink: 0;
    display: flex;
`

export default ToolBar
