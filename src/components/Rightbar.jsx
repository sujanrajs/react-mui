import React from "react";
import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

const Rightbar = () => {
  return (
    <Box
      //bgcolor="blue"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" paddingRight={5}>
        <Typography variant="h6" fontWeight={300}>
          Latest Status
        </Typography>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ "--List-decorator-size": "56px" }}
        >
          <ListItem>
            <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography>Happy Autumn</Typography>
              <Typography level="body2" noWrap>
                Beautiful leaves..
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
              <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography>Summer BBQ</Typography>
              <Typography level="body2" noWrap>
                Travelling to Tampere..
              </Typography>
            </ListItemContent>
          </ListItem>
        </List>
        <Typography variant="h6" fontWeight={300}>
          Latest Uploads
        </Typography>
        <ImageList cols={2} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
