import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BuildIcon from "@material-ui/icons/Build";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import GroupIcon from "@material-ui/icons/Group";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  }
});

 const  IconTabs = () => {


  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //var asd = ""
  function handleChange(event, newValue) {
	setValue(newValue);
	// switch(newValue){
	// 	case 0 : asd="/";
	// 	break;
	// 	case 1 : asd="/count";
	// 	break;
	// 	case 2 : asd="/electoral";
	//}
	
  }

  return (
    <React.Fragment>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Link to="/"><Tab icon={<BuildIcon />} label="Admin" /></Link>
          <Link to="/count"><Tab icon={<VpnKeyIcon />} label="Escrutinio" /></Link>
          <Link to="/electoral"><Tab icon={<GroupIcon />} label="Padrón" /></Link>
        </Tabs>
      </Paper>

    </React.Fragment>
  );
}
export default IconTabs;