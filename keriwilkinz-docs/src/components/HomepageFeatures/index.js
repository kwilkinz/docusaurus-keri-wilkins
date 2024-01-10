import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Featured Works",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Explore my project collection that is dedicated to creativity,
        innovation, and excellence. From impactful friendly UI designs to
        solutions, each project showcases my expertise and commitment to
        delivering exceptional results.
      </>
    ),
  },
  {
    title: "My Story",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Get to know me better! Discover my story behind my passion-driven
        journey.
      </>
    ),
  },
  {
    title: "Insight Hub",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Dive into my repository of articles, thought-provoking insights, and
        practical tips. This blog serves as a knowledge center where we share
        expertise, trends, and experiences, empowering you to stay informed and
        inspired in your endevours.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
