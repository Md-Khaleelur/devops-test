import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { iconFill } from '../../../utils/colorPallete';


const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 4,
    },
    label: {
        textTransform: 'capitalize'
    },
    outlined:{
        borderRadius: '1px',
        "&.Mui-disabled":{
            backgroundColor: 'red',
            border: `solid 1px ${iconFill}  `,
            color: {iconFill}
        },
        "&:hover":{
            border: `solid 1px ${iconFill}`,
            color: {iconFill}
        }
    }
}));

export default function CustomHeaderButton({children, ...rest}){

    const classes = useStyles();

    return(
        <Button
          classes={{
              root: classes.root,
              label: classes.label,
              text: classes.text,
          }}
          {...rest}
        >
            {children}
        </Button>
    )
}