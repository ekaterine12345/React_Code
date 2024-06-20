import React, { useState } from 'react'; // Make sure useState is imported
import facebook from './Components/images/facebook.svg'
import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import instagram from './Components/images/instagram.svg'
import linkedin from './Components/images/linkedin.svg'
import Xtwitter from './Components/images/x-twitter.svg'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const lightTheme = {
  body: '#ffffff',
  text: '#000000',
  headerBg: '#f1f1f1',
  footerBg: '#f1f1f1',
  contentBg: '#f9f9f9',
};

const darkTheme = {
  body: '#000000',
  text: '#ffffff',
  headerBg: '#333333',
  footerBg: '#333333',
  contentBg: '#3b3333',
};

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  margin: 2em 12em;
  background-color: ${(props) => props.theme.contentBg};
  padding: 2em;
  border-radius: 2em 5em;
  color: ${(props) => props.theme.text};
`;



function App() {

  const [theme, setTheme] = useState('light'); 
  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  
const socialNetworks = [
  { name: 'Facebook', icon: facebook, link: 'https://www.facebook.com/' }, 
  { name: 'Instagram', icon: instagram, link: 'https://www.instagram.com/' }, 
  { name: 'Linkedin', icon: linkedin, link: 'https://www.linkedin.com/' },
  { name: 'X-twitter', icon: Xtwitter, link: 'https://twitter.com/' },
  
];


  return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Container>
    <div className='container'>

      <Header home="Home" about="About" contact="Contact" profile="Profle"  themeToggler={themeToggler}> </Header>

      <ContentBox>
    
       <p>
       From humble beginnings in a garage to becoming a global tech leader, Apple's 
       story is one of innovation and design.  Founded by Steve Jobs and Steve 
       Wozniak, Apple  started with personal computers but  revolutionized the 
       industry with the user.
       </p>

      <p>
      Today, Apple is much more than just computers. They're synonymous with sleek 
      smartphones (iPhone), powerful tablets (iPad), and wearable technology 
      (Apple Watch). Their software,  like the intuitive iOS and macOS operating 
      systems, seamlessly integrates with their devices, creating a loyal user base.  
      </p>

      <p>
      Apple products are known for their intuitive design and focus on user 
      experience.  The  company  has cultivated a fervent following through a 
      carefully crafted ecosystem of devices and services like the App Store, 
      Apple Music, and iCloud.  
      </p>

      <p>
      Always pushing boundaries, Apple  continues to develop new technologies and 
      refine existing ones.  They're a major player in artificial intelligence and 
      virtual reality,  constantly seeking  to  unveil the next  cutting-edge  gadgets.  
      </p>

      <p>
      Apple's iconic "Think Different"  motto  embodies their  approach.  They  
      challenge the status quo  and  strive to create  products that  are  elegant, 
      powerful, and  unlike anything else on the market.  
      </p>

     
      </ContentBox>
      <Footer socialNetworks={socialNetworks}/>    
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
