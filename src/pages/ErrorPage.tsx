import NavBar from "@/components/NavBar";
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const handleGoHome = () => {
    // Navigate to the home page
    window.location.href = "/";
  };
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box
        textAlign="center"
        py={10}
        px={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        bg="gray.50"
        _dark={{ bg: "black" }}
      >
        <VStack spaceX={6} spaceY={6}>
          <Image
            src="/images/server.png"
            alt="Error"
            boxSize="200px"
            borderRadius="4xl"
            bg="white"
            p={3}
            objectFit="cover"
          />
          <Heading as="h1" size="2xl" color="red.500">
            404
          </Heading>
          <Text fontSize="lg" color="red.500">
            {isRouteErrorResponse(error)
              ? "Oops! The page you're looking for doesn't exist."
              : "Oops! An unexpected error occurred."}
          </Text>
          <Button
            colorPalette="purple"
            colorScheme="teal"
            size="lg"
            onClick={handleGoHome}
          >
            Go to Home
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ErrorPage;
