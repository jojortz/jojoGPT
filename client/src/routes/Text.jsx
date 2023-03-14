import styled from 'styled-components';
import TextBox from '../components/TextBox.jsx';

const TextContainer = styled.div`
width: 100%;
height: 80%;
`

const Text = () => {
  return (
    <TextContainer>
      <h1>jojoMessage</h1>
      <TextBox />
    </TextContainer>
  )
};

export default Text;