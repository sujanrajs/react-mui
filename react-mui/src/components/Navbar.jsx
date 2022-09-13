import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import MarkAsUnreadRoundedIcon from "@mui/icons-material/MarkAsUnreadRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserIcon = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SUJAN RAJS
        </Typography>
        <TerminalRoundedIcon
          sx={{ display: { xs: "block", sm: "none" }, color: "#B32428" }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={5}>
            <MarkAsUnreadRoundedIcon />
          </Badge>
          <Badge badgeContent={5}>
            <NotificationsActiveRoundedIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/id/1011/200/300"
          />
        </Icons>
        <UserIcon>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/id/1011/200/300"
          />
          <Typography>Sujan</Typography>
        </UserIcon>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
