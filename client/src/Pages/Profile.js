import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useChange } from "../context/StateProvider";
import {
  Box,
  Avatar,
  Heading,
  Text,
  VStack,
  Divider,
  Spinner,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { getAllPost } from "../Api/post";
import Header from "../Component/Header";

const Profile = () => {
  const { id } = useParams();
  const { token } = useChange();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts on mount
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const data = await getAllPost(token);
        if (data.success) {
          setPosts(data.posts.reverse());
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPosts();
  }, [token]);

  // Filter posts for this user
  const userPosts = useMemo(() => posts.filter((p) => p.user._id === id), [posts, id]);
  const userInfo = userPosts.length > 0 ? userPosts[0].user : null;
if (loading) {
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      bg="gray.50"
    >
      <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
      <Text mt={4} fontSize="lg" color="gray.600">
        Loading profile...
      </Text>
    </Flex>
  );
}

  if (!userInfo) {
    return (
      <Box textAlign="center" mt={10}>
        <Header/>
        <Heading size="md">No profile found for this user.</Heading>
      </Box>
    );
  }

 return (
  <Box w="100%">
    {/* Full-width Header */}
    <Box w="100%" bg="white" shadow="sm" position="sticky" top="0" zIndex="10">
      <Header />
    </Box>

    {/* Full-width background */}
    <Box w="100%" bg="gray.50" minH="100vh" py={8}>
      {/* Centered Profile Content */}
      <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* User Info Section */}
        <Box
          bg="white"
          shadow="md"
          borderRadius="lg"
          p={6}
          textAlign="center"
          mb={8}
        >
          <Avatar
            size="2xl"
            name={userInfo.name}
            src={userInfo.pic}
            mb={4}
            border="4px solid white"
            shadow="lg"
          />

          <Heading size="lg" py={2}>{userInfo.name}</Heading>
          <Heading size="md">Bio : </Heading>   <Text fontSize="md" color="gray.600" mt={2}>
            {userInfo.bio || "No bio available"}
          </Text>
       
          <Heading size="md">Email :</Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            {userInfo.email}
          </Text>
        </Box>

        <Divider mb={8} />

        {/* Posts Section */}
        <Heading size="md" mb={6} textAlign="center">
          Posts by {userInfo.name}
        </Heading>
        {userPosts.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {userPosts.map((p) => (
              <Box
                key={p._id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                shadow="sm"
                bg="white"
                _hover={{ shadow: "md", transform: "scale(1.01)" }}
                transition="0.2s"
              >
                {p.image && (
                  <Box mb={3} overflow="hidden" borderRadius="md">
                    <img
                      src={p.image}
                      alt="Post"
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                )}
                <Text fontSize="md" mb={2} fontWeight="medium">
                  {p.text}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {new Date(p.createdAt).toLocaleString()}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Text textAlign="center" fontSize="lg" color="gray.600">
            No posts yet.
          </Text>
        )}
      </Box>
    </Box>
  </Box>
);

};

export default Profile;
