import { CircularProgress } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import React from 'react'
import CircularProgressBar from '.'



export default {
    component: CircularProgressBar,
    title: 'molecules/CircularProgressBar'
}

storiesOf("molecules/CircularProgressBar", module)
.add("ProgressBarStatic", () => <CircularProgressBar variant='static' value={50}/>)
.add("ProgessBarIndeterminate", () => <CircularProgress/>)
.add("thickProgressBarEmpty", () => <CircularProgressBar variant='determinate' thickness='6' size='3.125em' value={50}/>)
// .add('thickProgressBarEmpty', () = )
