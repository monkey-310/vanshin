import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprDarkLarge from '~/assets/ruebarue-large.jpg';
import imageSprDarkPlaceholder from '~/assets/ruebarue-placeholder.jpg';
import imageSprDark from '~/assets/ruebarue.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './ruebarue.module.css';

const title = 'Guest communication platform';
const description =
  'I worked as the frontend developer on this platform. We took the platform in a bold new direction, focusing on becoming the best tool for guests.';
const stacks = [
  'HTML / CSS , TailwindCSS , MUI',
  'JavaScript / TypeScript',
  'React / Next.js',
  'Figma Design, Pixel Perfect',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Ruebarue = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.ruebarue.com/"
          roles={stacks}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprDark} 1280w, ${imageSprDarkLarge} 2560w`
                  : `${imageSprDark} 1280w, ${imageSprDarkLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDarkPlaceholder
                  : imageSprDarkPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Guest communication platform."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
