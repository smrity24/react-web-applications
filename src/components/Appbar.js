import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Create from "./Create";

export default ({ subjects, onTutorialCreate }) => (
  <div>
    <AppBar position="relative">
      <Toolbar>
        <Typography style={{ flex: 1 }} color="inherit" variant="headline">
          Tutorial
        </Typography>
        <SearchIcon
          style={{
            padding: 1000,
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none"
          }}
        />
        <Create onCreate={onTutorialCreate} subjects={subjects} />
      </Toolbar>
    </AppBar>
  </div>
);
