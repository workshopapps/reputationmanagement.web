import { BodyWrapper, PageBody, Header, HeaderLHS, HeaderRHS, ContentContainer, DescriptionContainer, DescriptionHeaderText, DescriptionHeaderCon, AboutBizHeader, EditBtn, BusinessInfoContainer, BusinessInfo } from './Profile.styled'

import verified from './assets/verified.svg'
import edit from './assets/edit.svg'
import arrowLeft from './assets/arrowLeft.svg'
import notificationBell from './assets/notificationBell.svg'
import avatar from './assets/avatar.png'

// components
import Sidenav from '../../components/LawyerDashboard/Sidenav'


function App() {
  return (

    <BodyWrapper>
    
        <Sidenav />
        

        <div style={{display : 'flex', justifyContent:'right', width: '100vw'}}>

        <PageBody>
        <Header>
            <HeaderLHS>
            <span>Dashboard</span>
            <img src={arrowLeft} alt="" />
            <span>My Profile</span>
            </HeaderLHS>
            <HeaderRHS>
            <img src={notificationBell} alt="" />
            <div>
                <img src={avatar} alt="" />
                <span>Hi, Raya</span>
            </div>
            </HeaderRHS>
        </Header>

        <ContentContainer>
            <DescriptionContainer>
            <div>
                <DescriptionHeaderCon>
                <DescriptionHeaderText>
                    <h1>Raya Enterprise</h1>
                    <img src={verified} alt='verified' />
                </DescriptionHeaderText>
                <EditBtn>
                    <img src={edit} alt="" />
                    <span>Edit profile</span>
                </EditBtn>
                </DescriptionHeaderCon>
                <AboutBizHeader>About Business</AboutBizHeader>
                <p>
                Raya enterprirsie is world famous brand in production of gadgets. Raya enterprirsie is world famous brand in production of gadgets Raya enterprirsie is world famous brand in production of gadgetsRaya enterprirsie is world famous brand in production of gadgetsRaya enterprirsie is world famous brand in production of gadgets Raya enterprirsie is world famous brand in production of gadgets
                </p>
            </div>
            
            </DescriptionContainer>

            <BusinessInfoContainer>
            <h3>Business Information</h3>
            <BusinessInfo>
                <div>
                <h6>Business Name</h6>
                <p>Raya Enterprise</p>
                </div>
                <div>
                <h6>Business Address</h6>
                <p>Nta Road,Mbougba Port-harcourt River State</p>
                </div>
                <div>
                <h6>Business Email</h6>
                <p>raya@enterprise.ng</p>
                </div>
                <div>
                <h6>Business Contact</h6>
                <p>+2348012345678</p>
                </div>
                <div>
                <h6>Business Website</h6>
                <p>www.rayaent.ng</p>
                </div>
                <div>
                <h6>Business Type</h6>
                <p>Fashion Business</p>
                </div>
            </BusinessInfo>
            
            </BusinessInfoContainer>

        </ContentContainer>
        </PageBody> 
        </div>


    </BodyWrapper>


  );
}

export default App;