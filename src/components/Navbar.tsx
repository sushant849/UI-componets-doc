import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import type { JSX, ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

const Links = [
  { name: "Get Started", path: "/" },
  { name: "Components", path: "/components/button-test" },
];

interface NavLinkProps {
  children: ReactNode;
  onClick: () => void;
}

const NavLink = ({ children, onClick }: NavLinkProps) => (
  <Link
    px={3}
    py={2}
    borderRadius="md"
    cursor="pointer"
    onClick={onClick}
    _hover={{ bg: "gray.200" }}
  >
    {children}
  </Link>
);

export default function Navbar(): JSX.Element {
  const { open, onClose, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onToggle}
          colorPalette="gray"
        >
          <FiMenu />
        </IconButton>

        <HStack gap={8}>
          <Box
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            UI-Componts-Doc
          </Box>

          <HStack display={{ base: "none", md: "flex" }} gap={2}>
            {Links.map((link) => (
              <NavLink
                key={link.name}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {open ? (
        <Stack pb={4} gap={0} display={{ md: "none" }}>
          {Links.map((link) => (
            <NavLink
              key={link.name}
              onClick={() => {
                navigate(link.path);
                onClose();
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </Stack>
      ) : null}
    </Box>
  );
}
