import { Box } from "@mui/material";
import FeedPost from "./FeedPost";
const Feed = () => {
  return (
    <Box flex={4} padding={5}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </Box>
  );
};

export default Feed;
