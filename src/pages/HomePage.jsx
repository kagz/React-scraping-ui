import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import FiberNewTwoToneIcon from '@material-ui/icons/FiberNewTwoTone';
import MarkunreadMailboxTwoToneIcon from '@material-ui/icons/MarkunreadMailboxTwoTone';
import ParallaxCarousel from '../components/carousel/parallax';
import Typography from "@material-ui/core/Typography";
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';
import Box from "@material-ui/core/Box";
import Posts from "../components/Posts";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const data = [
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
  },
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
  },
];
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },






}));
function HomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

<Box height={'15%'} width={'100%'} maxWidth={840} mx={'auto'} padding={'30px'}>
      <ParallaxCarousel data={data} />
    </Box>
      <div position="static" color="default" padding={'30px'}>

     

        <Tabs
            width={'100%'}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="homepage tabs"
        >
          <Tab label="All Posts" icon={<MarkunreadMailboxTwoToneIcon />} {...a11yProps(0)} />
          <Tab label="to read " icon={<BookmarksIcon />} {...a11yProps(1)} />
          <Tab label="Trending" icon={<WhatshotTwoToneIcon />} {...a11yProps(2)} />
          <Tab label="MMNN" icon={<FiberNewTwoToneIcon />} {...a11yProps(3)} />
          <Tab label="History" icon={<HistoryTwoToneIcon />} {...a11yProps(4)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Posts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
     
    </div>
  );
}

export default HomePage
