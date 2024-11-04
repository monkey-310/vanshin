import nternowTexture2Large from '~/assets/nternow2-large.jpg';
import nternowTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import nternowTexture2 from '~/assets/nternow2.jpg';
import nternowTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import nternowTextureLarge from '~/assets/nternow-large.jpg';
import nternowTexture from '~/assets/nternow.jpg';
import vatgiaTextureLarge from '~/assets/vatgia-large.jpg';
import vatgiaTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import vatgiaTexture from '~/assets/vatgia.jpg';
import sprTextureLarge from '~/assets/ruebarue-large.jpg';
import sprTexturePlaceholder from '~/assets/ruebarue-placeholder.jpg';
import sprTexture from '~/assets/ruebarue.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Portfolio of ${config.name} — a software developer working on web & mobile apps with a focus on motion, experience design, development and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="NterNow"
        description="Design and development for an innovative self-touring solution app for real estate built in React Native"
        buttonText="View website"
        buttonLink="https://www.nternow.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${nternowTexture} 375w, ${nternowTextureLarge} 750w`,
              placeholder: nternowTexturePlaceholder,
            },
            {
              srcSet: `${nternowTexture2} 375w, ${nternowTexture2Large} 750w`,
              placeholder: nternowTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="RueBaRue"
        description="Development of UIs for the guest communication platform"
        buttonText="View project"
        buttonLink="/projects/ruebarue"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Vatgia"
        description="This e-commerce website offers a diverse selection of products, including electronics, technology, automobiles, and vehicles. machinery, cosmetics, fashion, food, entertainment services, entertainment, tourism, and so on."
        buttonText="View project"
        buttonLink="/projects/vatgia"
        model={{
          type: 'laptop',
          alt: 'Vatgia e-commerce website',
          textures: [
            {
              srcSet: `${vatgiaTexture} 800w, ${vatgiaTextureLarge} 1920w`,
              placeholder: vatgiaTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
