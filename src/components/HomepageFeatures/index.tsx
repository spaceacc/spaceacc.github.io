import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Space/ACC embraces open-source principles, inviting global 
        collaboration and empowering developers to contribute to the 
        advancement of space technology freely.
      </>
    ),
  },
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        At Space/ACC, we thrive on real-world community, fostering a 
        dynamic network of enthusiasts, professionals, and innovators 
        united by a passion for space exploration and acceleration.
      </>
    ),
  },
  {
    title: 'Innovation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Space/ACC is dedicated to driving innovation in space technology, 
        pushing boundaries, and pioneering groundbreaking solutions through 
        cutting-edge research and development initiatives.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.AboutSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <p>
                Space/ACC is a global community united by a shared vision: we must 
                accelerate our multiplanetary future. We want to democratize access 
                to space exploration through open-source, decentralized tools. Together, 
                we believe that by harnessing the collective power of the global 
                community, we can pave the way into the final frontier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
