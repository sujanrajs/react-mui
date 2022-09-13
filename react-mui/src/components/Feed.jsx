import { Box } from "@mui/material";
import FeedPost from "./FeedPost";
const Feed = () => {
  return (
    <Box bgcolor="yellow" flex={4} padding={2}>
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
