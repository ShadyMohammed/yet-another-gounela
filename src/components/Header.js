import React, { useState } from 'react';
import { css } from 'styled-components/macro';
import { Link } from 'react-scroll';
import Button from './Button';
import Icon from './Icon';
import headerImg from '../designs/header.jpg';

const header = css`
  display: grid;
  grid-template-rows: [header-nav-row-start] 80px [header-nav-row-end] 20px [header-hero-row-start] 1fr [header-hero-row-end] 80px [header-row-end];
  grid-template-columns: [header-col-start] 5% [header-hero-col-start] 1fr [header-hero-col-end] 5% [header-col-end];
  height: 100vh;
  background-image: ${props => props.theme.headerBackground};
`;

const nav = css`
  grid-area: header-nav-row-start / header-col-start / header-nav-row-end /
    header-col-end;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding-right: 120px;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    justify-content: center;
  }
`;

const hero = css`
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  grid-area: header-hero-row-start / header-hero-col-start / header-hero-row-end /
    header-hero-col-end;

  display: grid;
  grid-template-rows: [hero-row-start] 20px [hero-sec-row-start] 1fr [hero-sec-row-end] 20px [hero-row-end];
  grid-template-columns: [hero-col-start] 1.25fr [hero-col-center] 1fr [hero-col-end];

  @media screen and (max-width: 950px) {
    grid-template-rows: 1fr;
    grid-template-columns: [hero-col-start] 1fr [hero-col-center] 1fr [hero-col-end];
  }
`;

const heroMain = css`
  grid-area: hero-row-start / hero-col-start / hero-row-end / hero-col-center;
  background: ${({ theme }) => theme.formBackground};
  display: grid;
  grid-template-rows: [heroMain-row-start] repeat(3, 1fr) [heroMain-row-end];
  grid-template-columns: [heroMain-social-col-start] 10% [heroMain-social-col-end heroMain-cta-col-start] 1fr [heroMain-cta-col-end] 10%;

  @media screen and (max-width: 950px) {
    grid-column: hero-col-start/ hero-col-end;
    grid-row: 1/2;
    background: linear-gradient(
        19deg,
        rgba(250, 172, 168, 0.6) 0%,
        rgba(221, 214, 243, 0.6) 100%
      ),
      url(${headerImg});
    background-size: cover;
  }
`;

const socialMedia = css`
  grid-area: heroMain-row-start / heroMain-social-col-start / heroMain-row-end /
    heroMain-social-col-end;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
  min-width: 100px;
`;

const headerCta = css`
  grid-area: heroMain-row-start / heroMain-cta-col-start / heroMain-row-end /
    heroMain-cta-col-end;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20%;
    font-size: 2.2rem;
    line-height: 2;
    text-align: center;

    @media screen and (max-width: 1300px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 950px) {
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ctaButton = css`
  display: inline-block;
  margin-bottom: 15%;
`;

const headerImage = css`
  grid-area: hero-row-start / hero-col-center / hero-row-end / hero-col-end;
  background: url(${headerImg});
  background-size: cover;
  background-position-y: -100px;
  display: flex;

  @media screen and (max-width: 1570px) {
    background-position-y: 0px;
  }

  @media screen and (max-width: 950px) {
    /* grid-area: hero-row-start / hero-col-start / hero-sec-row-end 1 /
      hero-col-center; */
    display: none;
  }
`;

const socialIcon = css`
  height: 30px;
  width: 30px;
  display: inline-block;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const socialMediaData = [
  { name: 'facebook', url: 'https://www.facebook.com/Gounelaofficial' },
  { name: 'instagram', url: 'https://www.instagram.com/gounelastore' }
];

const Header = () => {
  const [iconColors, setIconColors] = useState({
    facebook: '#000',
    instagram: '#000'
  });
  return (
    <header css={header}>
      <nav css={nav}>جونلة</nav>
      <section css={hero}>
        <div css={heroMain}>
          <div css={socialMedia}>
            {socialMediaData.map(i => (
              <a
                css={socialIcon}
                key={i.name}
                href={i.url}
                onMouseEnter={() =>
                  setIconColors({ ...iconColors, [i.name]: '#f9aeac' })
                }
                onMouseLeave={() =>
                  setIconColors({ ...iconColors, [i.name]: '#000' })
                }
              >
                <Icon name={i.name} color={iconColors[i.name]} />
              </a>
            ))}
          </div>
          <div css={headerCta}>
            <h1>دلوقتي تقدري تفصلي لبسك ويوصلك لحد البيت</h1>
            <Link to="form" smooth duration={500}>
              <Button css={ctaButton}>جربي دلوقتي!</Button>
            </Link>
          </div>
        </div>
        <div css={headerImage} />
      </section>
    </header>
  );
};

export default Header;
