import styled from "styled-components";

export default styled.button`
   cursor: pointer;
   border: none;
   background-color: ${({ theme }) => theme.buttonBg};
   color: #fff;
   padding: 10px;
   border-radius: 5px;
   font-size: 1.5rem;
`