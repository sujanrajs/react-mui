import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const Add = () => {
  return (
    <div>
      <Tooltip
        title="Add-Icon"
        sx={{
          marginLeft: "2rem",
          position: "fixed",
          bottom: "2rem",
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Add;
