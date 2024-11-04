
import vatgiaAppLarge from '~/assets/vatgia-large.jpg';
import vatgiaAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import vatgiaApp from '~/assets/vatgia.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './vatgia.module.css';

const title = 'Vatgia';
const description = 'This e-commerce platform is written by React/Next. Its component-based architecture, which provided flexibility and better maintainability';
const roles = ['UX Design', 'React', 'Next.js', 'Socket.io'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Vatgia = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="http://www.vatgia.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${vatgiaApp} 800w, ${vatgiaAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={vatgiaAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
