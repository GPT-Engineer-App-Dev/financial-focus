import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Markets Rally Amid Economic Optimism",
    description: "Stocks surged worldwide as investors grew optimistic about economic recovery.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Report Record Earnings",
    description: "Leading technology companies have reported unprecedented earnings this quarter.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Central Bank Signals Interest Rate Hike",
    description: "The central bank has indicated a potential increase in interest rates to combat inflation.",
    image: "https://via.placeholder.com/150",
  },
];

const financialData = [
  { name: "S&P 500", value: "4,500.50", change: "+1.25%" },
  { name: "Dow Jones", value: "35,000.75", change: "+0.85%" },
  { name: "Nasdaq", value: "14,000.20", change: "+1.75%" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <Flex as="nav" bg="gray.800" color="white" p={4} mb={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3">
          <Heading size="lg" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={4}>
                  <Heading size="md" mb={2}>{article.title}</Heading>
                  <Text>{article.description}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            {financialData.map((data, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Text fontWeight="bold">{data.name}</Text>
                <Text>{data.value}</Text>
                <Text color={data.change.startsWith("+") ? "green.500" : "red.500"}>{data.change}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;