import React from 'react';
import TextField from '@material-ui/core/TextField';



class DatePickers extends React.Component {
  //const classes = useStyles();
    render(){
        const cont = {
              display: 'flex',
              flexWrap: 'wrap',
            };
        return (
    

      
            <form  noValidate>
              <TextField
                id="date"
                label={this.props.label}
                type="date"
                defaultValue="2017-05-24"
                className={cont}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          );
    }

}

export default DatePickers;