import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function MainLayout() {
  return (
    <Box h="100vh" overflow="hidden">
      

      <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
        <Navbar />
      </Box>

      <Flex pt="64px" h="100%">
        
        <Box
          position="fixed"
          top="64px"
          left="0"
          w="250px"
          h="calc(100vh - 64px)"
          overflowY="auto"
        >
          <Sidebar />
        </Box>

        <Box
          ml="250px"
          p="20px"
          flex="1"
          h="calc(100vh - 64px)"
          overflowY="auto"
        >
          <Outlet />
        </Box>

      </Flex>
    </Box>
  );
}