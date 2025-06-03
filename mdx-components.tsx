import type { MDXComponents } from "mdx/types";
import { Title } from "@mantine/core";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Title order={1} ta="center" mb="md">
        {children}
      </Title>
    ),
    ...components,
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
      <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside mb-4  text-gray-700">{children}</ul>,
    li: ({ children }) => <li className="mb-2  text-gray-700">{children}</li>,
  };
}
