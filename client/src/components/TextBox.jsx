import styled from 'styled-components';
import AddressBar from './AddressBar.jsx'
import MessageBox from './MessageBox.jsx'
import ComposeBar from './ComposeBar.jsx'

const TextBoxContainer = styled.div`
width: 100%;
height: 100%;
border: 1pt solid ${({ theme }) => theme.borderColor};
border-radius: 15px;
display: flex;
flex-flow: column;
`

const TextBox = () => {
  return (
    <TextBoxContainer>
      <AddressBar/>
      <MessageBox/>
      <ComposeBar/>
    </TextBoxContainer>
  )
};

export default TextBox;