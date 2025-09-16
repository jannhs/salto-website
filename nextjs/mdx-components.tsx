import type { MDXComponents } from "mdx/types";
import { Title, Accordion, Anchor } from "@mantine/core";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Title order={1} ta="center" mb="md">
        {children}
      </Title>
    ),
    ...components,
    Accordion,
    h2: ({ children }) => (
      <Title order={2} mb="sm" className="text-2xl font-bold text-gray-800">
        {children}
      </Title>
    ),
    h3: ({ children }) => (
      <Title order={3} className="text-xl font-semibold text-gray-800 mb-3">
        {children}
      </Title>
    ),

    p: ({ children }) => <p className="text-base text-gray-700 leading-relaxed mb-4">{children}</p>,
    a: ({ children, href }) => (
      <Anchor href={href} c="#2e6940" fw="600" target="_blank" rel="noopener noreferrer" underline="not-hover">
        {children}
      </Anchor>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside mb-4  text-gray-700">{children}</ul>,
    li: ({ children }) => <li className="mb-2  text-gray-700">{children}</li>,
  };
}
