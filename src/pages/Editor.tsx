import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
`

const StyledTextArea = styled.textarea`
  flex: 1;
  height: 100%;
  border-right: 1px solid silver;
  border-top: 1px solid silver;
`

const StyledPreview = styled.div`
  flex: 1;
  height: 100%;
  border-top: 1px solid silver;
`

const Editor = () => {
  const [text, setText] = useState<string>('')

  return (
    <Layout>
      <StyledContainer>
        <StyledTextArea
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder="テキスト入力エリア"
        />
        <StyledPreview>プレビューエリア</StyledPreview>
      </StyledContainer>
    </Layout>
  )
}

export default Editor