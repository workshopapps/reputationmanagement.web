import styled from "styled-components";

const BodyWrapper = styled.section`
    position: relative;
    font-family: 'Lato', sans-serif;
    
    display: grid !important;
    /* gap: 15rem; */
    grid-template-columns: 280px auto !important;
    position: relative;

    grid-template-areas:
		'sidebar nav'
		'sidebar main';

        @media (max-width: 1140px) {
		grid-template-areas:
			'nav nav'
			'main main';
	}
`
const WrapNav = styled.div`
    grid-area: nav;
    @media (min-width: 1440px) {
        & > *{
            display: none;
            width: 100%;
        }
        display: none;
        width: 100vw;

      

    }


`
const PageBody = styled.div`
    @media (max-width: 480px) {
        width: 100vw;
        h1{
            font-size: 18px;
        }
    }
    @media (min-width: 481px) {
        /* width: 80vw; */
    }
    /* width: 80vw; */
    box-sizing: border-box;
   *{
        padding: 0;
        margin: 0;
        color: #2B2C34;
   }

   h1{
        font-size: 2rem;
   }

   h1, h2, h3, h4, h5{
    color: #233BA9;
   }

   h6{
    color: #2B2C3499;
    font-weight: 600;
    line-height: 19px;
    font-size: 16px;
   }

   p{
    line-height: 24.64px;
   }
`
const WrapRHS = styled.div`
    grid-area: main;
    @media (min-width: 1020px) {
        padding-right: 4rem;
    }
`
const Header = styled.div`
    @media (max-width: 480px) {
        padding: 1em .5em ;
    }
    padding: 2em 2em 2em 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   
`
const HeaderLHS = styled.div`
    @media (max-width: 480px) {
        gap : .5em;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        gap: .75em;
    }

    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2em;
    font-size: 24px;
`
const HeaderRHS = styled.div`
     @media (max-width: 480px) {
        display   : none;
    }

    @media (max-width: 1440px) {
        gap: 1rem;
        display: none;

        div{
            img{
                width: 2rem;
            }
        }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5em;

    div{
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 3rem;
            border-radius: 100%;
            margin-right: .3em;
        }
    }
`
const ContentContainer = styled.div`
   
    @media (max-width: 480px) {
        padding: 2em .5em ;
    }
    background-color: #F2F3F3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 10px;

        min-height: 594px;
        padding: 2em 2em 2em 4em;
`
const DescriptionContainer = styled.div`
    @media (max-width: 768px) {
        
        p{
            margin-top: .5em !important;
            width: 100% !important;
        }   
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6em;

    p{
        margin-top: 1.7em;
        width: 60%;
    }
`
const DescriptionHeaderText = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1em;
`
const DescriptionHeaderCon = styled.div`
    @media (max-width: 480px) {
        gap: .3em;
        img{
            width: 1rem;
        }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    
`
const AboutBizHeader = styled.h6`
    @media (max-width: 768px) {
        display: block;
        margin-top: 1.5em;
    }
    display: none;
`
const EditBtn = styled.button`
    @media (max-width: 480px) {
        padding: .75em .5em;
        font-size: 12px;
        img{
            width: 1em;
        }
    }
    padding: .5em .75em;
    background: #F16F04;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2em;

    span{
        color: #fff;
    }

`
const BusinessInfoContainer = styled.div`
    @media (max-width: 480px) {

        h3{
            display: none;
        }
    }
    
    width: 100%;
    margin-bottom: 2.5em;
    h3{
        margin-bottom: 1.5em;
    }
` 
const BusinessInfo = styled.div`
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: .7em;
        &>*{
            margin-top: .5em;
            padding-top: .7em;
            border-top: 1px solid #2B2C344D;
        }

    }
    width: inherit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    gap: 1.7em;

    p{
        margin-top: .5em;
   }
`

export { BodyWrapper, WrapNav, WrapRHS, PageBody, Header, HeaderLHS, HeaderRHS, ContentContainer, DescriptionContainer, DescriptionHeaderCon, DescriptionHeaderText, AboutBizHeader, EditBtn, BusinessInfoContainer, BusinessInfo }

