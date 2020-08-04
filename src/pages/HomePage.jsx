import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CommentIcon from "@material-ui/icons/Comment";
const messages = [
  {
    id: 1,
    villagertitle:"village elder",
    posttitle: 'Brunch this week?',
    description: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    avatar: '/static/images/avatar/5.jpg',
    postTime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 2,
    villagertitle:"village elder",
    posttitle: 'Birthday Gift',
    description: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    avatar: '/static/images/avatar/1.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 3,
    villagertitle:"village elder",
    posttitle: 'Recipe to try',
    description: 'I am try out this new BBQ recipe, I think this might be amazing',
    avatar: '/static/images/avatar/2.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 4,
    villagertitle:"village elder",
    posttitle: 'Yes!',
    description: 'I have the tickets to the ReactConf for this year.',
    avatar: '/static/images/avatar/3.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 5,
    villagertitle:"village elder",
    posttitle: "Doctor's Appointment",
    description: 'My appointment for the doctor was rescheduled for next Saturday.',
    avatar: '/static/images/avatar/4.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 6,
    villagertitle:"village elder",
    posttitle: 'Discussion',
    description: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    avatar: '/static/images/avatar/5.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
  {
    id: 7,
    villagertitle:"village elder",
    posttitle: 'Summer BBQ',
    description: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    avatar: '/static/images/avatar/1.jpg',
    posttime: "22-06-2020",
    villagername:"turdmean",
    category:"hekaya"
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  
}));

function HomePage() {
 
    const classes = useStyles();

  
    return (
        <React.Fragment>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            All Posts
          </Typography>
          <List className={classes.list}>
            {messages.map(({ id, posttitle, description, avatar,posttime,category,villagertitle,villagername }) => (
              <React.Fragment key={id}>
                {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={posttitle} secondary={description} />
                  <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                  {/* <Divider variant="inset" component="li" /> */}
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
    
      </React.Fragment>
    );
}

export default HomePage
