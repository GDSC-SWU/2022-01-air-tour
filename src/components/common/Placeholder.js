import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1440}
    height={409}
    viewBox="0 0 1440 409"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="305" height="290" />
    <rect x="261" y="315" rx="5" ry="5" width="45" height="20" />
    <rect x="0" y="389" rx="5" ry="5" width="70" height="20" />
    <rect x="-1" y="361" rx="5" ry="5" width="80" height="20" />
    <rect x="0" y="339" rx="5" ry="5" width="120" height="20" />
    <rect x="-1" y="315" rx="5" ry="5" width="180" height="20" />
  </ContentLoader>
);

export default MyLoader;
