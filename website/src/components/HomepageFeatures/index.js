import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn React.js',
    Svg: require('@site/static/img/logo-react.svg').default,
    description: (
      <>
        React.js quickstart and just sufficient coverage of core concepts for Next.js
      </>
    ),
  },
  {
    title: 'Learn Next.js',
    Svg: require('@site/static/img/logo-next.svg').default,
    description: (
      <>
        Next.js quickstart and deep dives into core concepts (hands-on examples)
      </>
    ),
  },
  {
    title: 'Advanced Projects',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Explore advanced projects using templates, services, e2e tests.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
