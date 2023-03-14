import styled from 'styled-components';

const AddressBarContainer = styled.div`
width: 100%;
height: 40px;
border-bottom: 1pt solid ${({ theme }) => theme.borderColor};
background-color: transparent;
padding: 10px;
`

const AddressBar = () => {
  return (
    <AddressBarContainer>
      To: Jojo
    </AddressBarContainer>
  )
};

export default AddressBar;