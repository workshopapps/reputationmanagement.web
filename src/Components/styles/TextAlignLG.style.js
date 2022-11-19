import styled from "styled-components";

const TextAlignLG = styled.div`
  
@media only screen and (min-width: 992px){
text-align: ${({align})=>align};
}
  
`;

export default TextAlignLG;
