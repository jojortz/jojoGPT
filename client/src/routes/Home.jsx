import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from '../components/Button.js'

const ButtonContainer = styled.div`
width 100%;
display: flex;
justify-content: center;
align-items: center;
`

const HomeCard = styled.div`
width: 90%;
height: fit-content;
`

const Home = () => {
  const navigate = useNavigate();
  return (
      <HomeCard>
        <h2>About</h2>
        <p>jojoGPT is an app I built to explore AI and see what kind of bot I could generate using my messaging as training data</p>
        <div></div>
        <ButtonContainer>
          <Button
            onClick={e => {
              e.preventDefault();
              navigate('text');
            }}>Text Me</Button>
        </ButtonContainer>
      </HomeCard>
  )
};

export default Home;