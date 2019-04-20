import React, { useState } from 'react';
import { css } from 'styled-components/macro';
import { Link } from 'react-scroll';
import Button from './Button';
import Icon from './Icon';

const header = css`
  display: grid;
  grid-template-rows: [header-nav-row-start] 80px [header-nav-row-end] 20px [header-hero-row-start] 1fr [header-hero-row-end] 80px [header-row-end];
  grid-template-columns: [header-col-start] 80px [header-hero-col-start] 1fr [header-hero-col-end] 80px [header-col-end];
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
`;

const hero = css`
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  grid-area: header-hero-row-start / header-hero-col-start / header-hero-row-end /
    header-hero-col-end;

  display: grid;
  grid-template-rows: [hero-row-start] 20px [hero-sec-row-start] 1fr [hero-sec-row-end] 20px [hero-row-end];
  grid-template-columns: [hero-col-start] 1fr [hero-col-center] 1fr [hero-col-end];
`;

const heroMain = css`
  grid-area: hero-row-start / hero-col-start / hero-row-end / hero-col-center;
  background: ${({ theme }) => theme.formBackground};
  display: grid;
  grid-template-rows: [heroMain-row-start] repeat(3, 1fr) [heroMain-row-end];
  grid-template-columns: [heroMain-social-col-start] 100px [heroMain-social-col-end] 25px [heroMain-cta-col-start] 1fr [heroMain-cta-col-end];
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
`;

const headerCta = css`
  grid-area: heroMain-row-start / heroMain-cta-col-start / heroMain-row-end /
    heroMain-cta-col-end;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 10em;
    line-height: 1.5;
  }
`;

const headerImage = css`
  grid-area: hero-row-start / hero-col-center / hero-row-end / hero-col-end;
  background: #fff;
  display: flex;

  .imageWrapper {
    padding: 50px;
    width: 100%;
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
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
  { name: 'facebook', url: 'https://stefanie.com' },
  { name: 'instagram', url: 'http://wyman.name' }
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
              <Button>جربي دلوقتي!</Button>
            </Link>
          </div>
        </div>
        <div css={headerImage}>
          <div className="imageWrapper">
            <img src="http://lorempixel.com/640/480/fashion" alt="Gounela" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
