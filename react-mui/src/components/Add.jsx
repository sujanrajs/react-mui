import { React, useState } from "react";
import {
  styled,
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Stack } from "@mui/system";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          left: 20,
          position: "fixed",
          bottom: 20,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6">
            Create Post
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Let's post something"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <AddReactionRoundedIcon color="primary" />
            <CameraAltRoundedIcon color="secondary" />
            <PersonAddAltRoundedIcon color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginBottom: "1rem" }}
          >
            <Button color="success" sx={{ width: 550 }}>
              Post
            </Button>
          </ButtonGroup>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button color="primary">Save as Draft</Button>
            <Button color="error">Cancel</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
