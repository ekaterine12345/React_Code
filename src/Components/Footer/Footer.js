import React from 'react'
import styled from 'styled-components';
import './Footer.css'

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footerBg};
  padding: 1em;
`;

const SocialIcons = styled.ul`
  height: 5em;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const SocialIconItem = styled.li`
  margin: 0;
`;

const SocialIconLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;


export default function Footer(props) {
  return (
    <FooterContainer>
    <SocialIcons className="social-icons">
      {props.socialNetworks.map((network, index) => (
        <SocialIconItem key={index}>
          <SocialIconLink href={network.link} target="_blank" rel="noopener noreferrer">
            <img src={network.icon} alt={network.name} />
            <p>{network.name}</p>
          </SocialIconLink>
        </SocialIconItem>
      ))}
    </SocialIcons>
  </FooterContainer>
  )
}
