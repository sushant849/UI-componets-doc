import { useState, type ReactNode } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  Code,
} from "@chakra-ui/react";
import { FiCheck, FiCopy } from "react-icons/fi";

export interface ComponentPreviewProps {
  /** Section label above the preview */
  title?: string;
  /** Live demo (your ai-ui-kit component) */
  demo: ReactNode;
  /** Source snippet shown below the preview */
  code: string;
}

export default function ComponentPreview({
  title = "Preview",
  demo,
  code,
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box w="full">
      {title ? (
        <Heading size="sm" mb={3} fontWeight="semibold">
          {title}
        </Heading>
      ) : null}

      <Box
        borderWidth="1px"
        borderColor="border"
        borderRadius="l3"
        overflow="hidden"
        shadow="sm"
      >
        <Box px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }} bg="bg.subtle">
          {demo}
        </Box>

        <Box
          position="relative"
          borderTopWidth="1px"
          borderColor="border"
          bg="bg.muted"
        >
          <IconButton
            aria-label={copied ? "Copied" : "Copy code"}
            position="absolute"
            top={2}
            right={2}
            size="xs"
            variant="ghost"
            colorPalette="gray"
            onClick={handleCopy}
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </IconButton>

          <Code
            as="pre"
            display="block"
            whiteSpace="pre"
            overflowX="auto"
            p={4}
            pr={12}
            fontSize="sm"
            lineHeight="tall"
          >
            {code.trim()}
          </Code>
        </Box>
      </Box>

      <Text fontSize="xs" color="fg.muted" mt={2}>
        Copy the snippet and paste it into your app (same pattern as{" "}
        <a
          href="https://chakra-ui.com/docs/get-started/installation"
          target="_blank"
          rel="noreferrer"
        >
          Chakra UI installation docs
        </a>
        ).
      </Text>
    </Box>
  );
}
