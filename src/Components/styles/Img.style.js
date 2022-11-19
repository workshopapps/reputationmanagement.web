import styled from "styled-components";

const Img = styled.img`


vertical-align: middle;


& #shooting_star {
    margin-left: 16px;
    margin-top: 12px;
    position: absolute !important
}
& .connector-mobile {
    display: none;
  }
& .position-absolute {
    position: absolute!important;
}
& .d-none {
    display: none!important;
}
& .img-fluid {
    max-width: 100%;
    height: auto;
}
@media only screen and (min-width: 992px){
   & .d-lg-none {
        display: none!important;
    }
}
  
`;

export default Img;
