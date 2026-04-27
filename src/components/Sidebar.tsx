import {
  Box,
  IconButton,
  VStack,
  useDisclosure,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerPositioner,
  DrawerRoot,
  Link,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useLocation, Link as RouterLink } from "react-router-dom";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();

  const isComponents = location.pathname.startsWith("/components");

  const componentSections = [
    {
      title: "Admin",
      items: [
        { name: "ConfigTable", path: "/components/config-table" },
        { name: "ModelEditor", path: "/components/model-editor" },
        { name: "PromptEditor", path: "/components/prompt-editor" },
      ],
    },
    {
      title: "Button",
      items: [
        { name: "ButtonTest",      path: "/components/button-test" },
        { name: "CloseButtonTest", path: "/components/close-button-test"},
        { name:"downloadButton",   path:"/components/download-trigger"},
        { name:"iconButtonTest",   path:"/components/icon-button-test"}
      ]
    },
    {
      title: "Chat",
      items: [
        { name: "ChatActionsPage", path: "/components/chat-actions" },
        { name: "ChatMessage", path: "/components/chat-message" },
        { name: "chat-demo", path: "/components/chat-demo" },
      ],
    },
    {
      title: "Core",
      items: [
        { name: "EmptyState", path:"/components/empty-state"},
        { name: "ErrorState", path: "/components/error-state" },
        { name: "LayoutShellTest", path: "/components/layout-shell-test" },
        { name: "Loader", path: "/components/loader" },
      ],
    },
    {
      title: "Data Display",
      items: [
        { name: "Avatar", path: "/components/avatar" },
        { name: "Badge", path: "/components/badge" },
        { name: "Card", path: "/components/card" },
        {name : "clipboard", path: "/components/clipboard"},
        { name: "DataList", path: "/components/data-list" },
        { name: "Table", path: "/components/table" },
        { name: "Tag", path: "/components/tags" },
      ],
    },
    {
      title: "Date & Time",
      items:[
        { name: "Datepicker", path: "/components/datepicker"},
      ]
    },
    {
      title: "disclosure",
      items:[
        { name : "AccordionTest", path: "/components/accordion-test"},
        { name : "CarouselTest" , path: "/components/carousel-test"},
        { name : "CollapsibleTest", path:"/components/collapsible-test"},
      ]
    },
    {
      title: "Forms",
      items: [
        { name: "Checkbox", path: "/components/checkbox" },
        { name: "Fieldset", path: "/components/fieldset" },
        { name: "Field", path: "/components/field" },
        { name: "FileUpload", path: "/components/file-upload" },
        { name: "InputTest", path: "/components/input" },
        { name: "Number Input", path: "/components/number-input" },
        { name: "PasswordInputTest", path: "/components/password-input" },
        { name: "RadioTest", path: "/components/radio-group" },
        { name: "SliderTest", path: "/components/slider" },
        { name: "SwitchTest", path: "/components/switch" },
        { name: "TagsInputTest", path: "/components/tags-input" },
      ],
    },
    {
      title: "Upload",
      items: [
        { name: "Dropzone", path: "/components/dropzone" },
        { name: "FileQueue", path: "/components/file-queue" },
        { name: "UploadProgress", path: "/components/upload-progress" },
      ],
    },
  ];

  const defaultMenu = [
    { name: "Overview", path: "/" },
    { name: "Installation", path: "/get-started/installation" },
  ];

  return (
    <Box bg="gray.400" color="white" w="250px" h="100vh" p={4} overflowY="auto">
      {isComponents ? (
        <VStack align="start" gap={6}>
          {componentSections.map((section) => (
            <Box key={section.title}>
              <Box fontWeight="bold" mb={2}>
                {section.title}
              </Box>

              <VStack align="start" gap={2}>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      asChild
                      key={item.name}
                      fontSize="sm"
                      color={isActive ? "teal.200" : "white"}
                      fontWeight={isActive ? "bold" : "normal"}
                      _hover={{ color: "teal.200" }}
                    >
                      <RouterLink
                        to={item.path}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => onNavigate?.()}
                      >
                        {item.name}
                      </RouterLink>
                    </Link>
                  );
                })}
              </VStack>
            </Box>
          ))}
        </VStack>
      ) : (
        <VStack align="start" gap={3}>
          {defaultMenu.map((item) => (
            <Link asChild key={item.name}>
              <RouterLink to={item.path} onClick={() => onNavigate?.()}>
                {item.name}
              </RouterLink>
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default function Sidebar() {
  const { open, onOpen, onClose, setOpen } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        position="fixed"
        top="4"
        left="4"
        zIndex="overlay"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        colorPalette="gray"
      >
        <FiMenu />
      </IconButton>

      <Box display={{ base: "none", md: "block" }}>
        <SidebarContent />
      </Box>

      <DrawerRoot
        placement="start"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <DrawerBackdrop />
        <DrawerPositioner>
          <DrawerContent>
            <DrawerBody p={0}>
              <SidebarContent onNavigate={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerPositioner>
      </DrawerRoot>
    </>
  );
}
