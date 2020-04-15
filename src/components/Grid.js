import React, { Fragment } from "react";
import { Grid, Paper, Typography,List, ListItem, ListItemText } from "@material-ui/core";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height:500,
    overflowY:'auto'
  }
};
export default ({tutorials, category, onSelect, 
  tutorial:{id=1,
  title='Getting started with ReactJS', 
  topic='Improve in Einglish', 
  subjects='ReactJS'}}) => (
  <Grid container>
    <Grid item xs>
      <Paper style={style.Paper}>
      {tutorials.map(([group, tutorials]) =>
       !category || category === group
       ? <Fragment>
       <Typography style={{textTransform:'capitalize'}}
       variant="headline">
       {group}
       </Typography>
       <List components="ul" >
       {tutorials.map(({id, title}) =>
        <ListItem button>
       <ListItemText primary={title}
       onClick={() => onSelect(id)}>
       </ListItemText>
       </ListItem>
        )}
       
       </List>
       </Fragment>
       : null

        
        )}
      </Paper>
    </Grid>
    <Grid item md>
      <Paper style={style.Paper}>{topic}</Paper>
    </Grid>
  </Grid>
);
