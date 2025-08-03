import React, {useEffect, useState } from "react";
import Header from "../Component/Header";
import {
  Box,
  Text,
  Button,
  Avatar,
  VStack,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useChange } from "../context/StateProvider";
import axios from "axios";
import Post from "../Component/Post";

const UserProfile =() => {
  const { user, setUser, token, myPost, setMyPost,} = useChange();
  const [name, setName] = useState("");
  const [email,setEmail]=useState("")
  const [pic, setPic] = useState();
  const [bio,setBio] = useState("");
  const [tab, setTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

 
  const updateProfile = async () => {
    setLoading(true);
    const form = new FormData();
    form.append("name", name);
    form.append("bio",bio)
    if (pic) form.append("pic", pic);

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/v1/user/${user._id}`,
        form,
        config
      );
      setUser(data.user);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      toast({
        title: "Profile updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error updating profile",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const fetchMyPosts = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/post/${user._id}`,
        config
      );
      setMyPost(data.posts.reverse());
    } catch (error) {
      toast({
        title: "Failed to fetch posts",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

   useEffect(() => {
  if (user?.name) {
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio)
  }
}, [user]);

  return (
    <Box
      minH="100vh"
      w="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
      
    >
      <Header />
      <Flex w={{ base: "100%", md: "70%" }} flexDir="column" mt={6}>
        <Flex justifyContent="space-around" mb={4}>
          <Button
            colorScheme={tab === "profile" ? "blue" : "gray"}
            onClick={() => setTab("profile")}
          >
            Profile
          </Button>
          <Button
            colorScheme={tab === "posts" ? "blue" : "gray"}
            onClick={() => {
              setTab("posts");
              fetchMyPosts();
            }}
          >
            My Posts
          </Button>
        </Flex>

        {tab === "profile" ? (
          <VStack spacing={4} p={4} boxShadow="lg" borderRadius="lg" w="full">
            <Avatar size="xl" src={user?.pic} name={user?.name} />
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
                 <FormLabel>Email</FormLabel>
                 <Input value={email} />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input value={bio} onChange={(e) => setBio(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Upload Photo</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setPic(e.target.files[0])}
              />
            </FormControl>
            <Button
              colorScheme="blue"
              onClick={updateProfile}
              isLoading={loading}
            >
              Update Profile
            </Button>
          </VStack>
        ) : (
          <Box
            w="full"
            p={4}
            boxShadow="lg"
            borderRadius="lg"
            overflowY="auto"
            maxH="500px"
          >
            <Text fontSize="xl" mb={4} fontWeight="bold">
              My Posts
            </Text>
            {myPost.length > 0 ? (
              myPost.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  deleteMyPost={() =>
                    setMyPost(myPost.filter((p) => p._id !== post._id))
                  }
                  setPosts={setMyPost}
                />
              ))
            ) : (
              <Text>No posts found.</Text>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default UserProfile;
