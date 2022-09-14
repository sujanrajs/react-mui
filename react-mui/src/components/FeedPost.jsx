import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

function FeedPost() {
  const newDate = new Date();
  const dateNow =
    newDate.toLocaleString("default", { month: "long" }) +
    " " +
    newDate.getDate() +
    " " +
    newDate.getFullYear();

  return (
    <div>
      {" "}
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Sujan Raj Shrestha"
          subheader={dateNow}
        />
        <CardMedia
          component="img"
          height="20%"
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          alt="scenery"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            In nature, nothing is perfect and everything is perfect. Trees can
            be contorted, bent in weird ways, and they're still beautiful. Look
            deep into nature, and then you will understand everything better.
            Heaven is under our feet as well as over our heads. We don’t inherit
            the earth from our ancestors, we borrow it from our children.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<FavoriteRoundedIcon />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareRoundedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default FeedPost;
