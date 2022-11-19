import styled from "styled-components";
import img from '../../assets/images/bannerImage.png'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  display: flex;
  flex-direction: column;
  margin: 68px auto;
  width: 100%;
  max-width: 91%;
  min-height: 100vh;
`;

export const StyledBtnContainer = styled.div`

  max-width: 30%;
  margin:  0 auto;

`

export const Popup = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

`

export const StyledPopup = styled.div`
  
  width: 401px;
  height: 219px;
  background: #FFFFFF;
  position: fixed;
  top: 30%;
  left: 35%;
  padding: 30px;
  box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);

h3{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  width: 100%;
  color: #2B2C34;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 28px;

  img{
    margin-right: 15px;
  }
}
p{
  
font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding-bottom: 20px;
text-align: center;
span{
  color: #233BA9;
}
}



`
export const Banner = styled.div`

    width: 100%;
    height: 347px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background-image: url(${img});

    h1{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.01em;

      color: #FFFFFF;
    }
    p{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 150%;
      color: #FFFFFF;
    }

`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;




`
export const NameGroup = styled.div`

  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 192px;


  div{
    width: 100%;
    display: flex;
    flex-direction: column;

  }

`

export const ErrorText = styled.p`

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #F03738;


`
export const StyledLabel = styled.label`

      padding-bottom: 8px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 150%;
      color: #2B2C34;

`
export const StyledTextGroup = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
 

`

export const StyledInput = styled.input`
    border: 1px solid #D2D3D4;
    border-radius: 8px; 
    outline: none;
    max-width: 100%;
    padding: 17px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #4D5154;

   &::placeholder{
    opacity: 0.5;
    font-weight: 400;
   }
`

export const StyledText = styled.textarea`
    border: 1px solid #D2D3D4;
    border-radius: 8px; 
    outline: none;
    max-width: 100%;
    height: 221px;
    padding: 17px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #4D5154;

    &::placeholder{
    opacity: 0.5;
    font-weight: 400;
   }
`