import React, { useState } from 'react';
import { css } from 'styled-components/macro';
import { Link } from 'react-scroll';
import Button from './Button';
import Icon from './Icon';

const header = css`
  display: grid;
  grid-template-rows: [nav-start] 80px [nav-end] 20px [hero-row-start] 1fr [hero-row-end] 80px [end];
  grid-template-columns: [start] 80px [hero-col-start] 1fr [hero-col-end] 80px [end];
  height: 100vh;
  background-image: ${props => props.theme.headerBackground};
`;

const hero = css`
  background: linear-gradient(to left, #f1f1f1 0%, #f9f9f9 50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  grid-area: hero-row-start / hero-col-start / hero-row-end / hero-col-end;

  display: grid;
  grid-template-rows: [row-start] 20px [main-start] 1fr [main-end] 20px [row-end];
  grid-template-columns:
    [social-start] 100px [social-end] 25px
    [header-cta-start] repeat(3, 1fr) [header-cta-end] 25px
    [header-image-start] repeat(4, 1fr) [header-image-end] 25px [end];
`;

const nav = css`
  grid-area: nav-start / start / nav-end / end;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding-right: 120px;
`;

const socialMedia = css`
  grid-area: row-start / social-start / row-end / social-end;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
`;

const headerCta = css`
  grid-area: main-start / header-cta-start / main-end / header-cta-end;
  justify-self: center;
  align-self: center;
`;

const headerImage = css`
  grid-area: row-start / header-image-start / row-end / header-image-end;
  background: #fff;

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
          <h1>دلوقتي تقدري تفصلي لبسك من البيت</h1>
          <Link to="form" smooth duration={500}>
            <Button>جربي دلوقتي!</Button>
          </Link>
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
