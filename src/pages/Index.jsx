import { Box, Flex, IconButton, Input, Stack, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaHeart, FaRetweet, FaTwitter } from "react-icons/fa";

const Index = () => {
  const tweets = [
    {
      id: 1,
      user: "John Doe",
      handle: "@johndoe",
      content: "Just discovered this amazing platform! #excited",
      avatar: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTcxNDY4MDQ2MXww&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 10,
      retweets: 5,
    },
    {
      id: 2,
      user: "Jane Smith",
      handle: "@janesmith",
      content: "Loving the vibes here. Let's connect! 🚀",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzE0NjgwNDYzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 20,
      retweets: 8,
    },
  ];

  return (
    <VStack spacing={4} p={5}>
      <Flex align="center" justify="space-between" w="full">
        <Text fontSize="2xl" fontWeight="bold">
          MiniTwitter <FaTwitter color="#1DA1F2" />
        </Text>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
          Tweet
        </Button>
      </Flex>
      <Input placeholder="What's happening?" size="lg" />
      <Stack spacing={4} w="full">
        {tweets.map((tweet) => (
          <Box key={tweet.id} p={4} shadow="md" borderWidth="1px" borderRadius="lg">
            <Flex gap={3}>
              <Image borderRadius="full" boxSize="50px" src={tweet.avatar} alt={tweet.user} />
              <Box flex="1">
                <Text fontWeight="bold">
                  {tweet.user}{" "}
                  <Text as="span" fontWeight="normal" color="gray.500">
                    {tweet.handle}
                  </Text>
                </Text>
                <Text mt={2}>{tweet.content}</Text>
                <Flex align="center" mt={2}>
                  <IconButton icon={<FaHeart />} aria-label="Like" size="sm" isRound={true} />
                  <Text fontSize="sm" ml={2}>
                    {tweet.likes}
                  </Text>
                  <IconButton icon={<FaRetweet />} aria-label="Retweet" size="sm" isRound={true} ml={4} />
                  <Text fontSize="sm" ml={2}>
                    {tweet.retweets}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Stack>
    </VStack>
  );
};

export default Index;
