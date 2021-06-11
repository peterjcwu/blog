// root-wrapper.js
import React from "react";
import { Layout } from "./src/components/layout";
import { MDXProvider } from "@mdx-js/react";
import { RainbowText } from "./src/components/rainbow-text";

const MDXComponents = {
  RainbowText,
};

export const rootWrapper = ({ element }) => {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>{element}</MDXProvider>
    </Layout>
  );
};