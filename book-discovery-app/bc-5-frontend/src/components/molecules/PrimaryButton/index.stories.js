import ArrowDownIcon from '@material-ui/icons/ArrowDropDown'
import { storiesOf } from '@storybook/react'
import React from 'react'
import PrimaryButton from '.'


export default {
    componet: PrimaryButton,
    title:'atoms/Button',
}

storiesOf("molecules/Buttons", module)
.add("Button", () => <PrimaryButton variant='contained' color='primary'>Filled</PrimaryButton>)
.add('ButtonDisabled', ()=><PrimaryButton disabled variant='contained' color='primary'>Disabled</PrimaryButton>)
.add('ButtonOutlined', ()=><PrimaryButton variant='outlined' color='primary'>Outlined</PrimaryButton>)
.add('ButtonOutlinedDisabled', ()=><PrimaryButton variant='outlined' disabled>Outlined</PrimaryButton>)
.add('ButtonOutlinedWithIcon', ()=><PrimaryButton variant='outlined' endIcon={<ArrowDownIcon/>} color='primary'>Outlined</PrimaryButton>)
.add('ButtonContainedWithIcon', ()=><PrimaryButton variant='contained' endIcon={<ArrowDownIcon/>} color='primary'>Contained</PrimaryButton>)
.add('TextButton', ()=><PrimaryButton color='primary'>Text</PrimaryButton>)
.add('TextButtonDisabled', ()=><PrimaryButton color='primary' disabled>Disabled</PrimaryButton>)



// export const ButtonSelected = () => {
//     const classes = useStyles();
//     return  (
//         <PrimaryButton
//         // className={isSelected === buttons.home ? classes.selectedButton : classes.dropDownButton}
//         variant = 'text'
//       >
//         <Typography variant='body2' className={classes.buttonText}>Home</Typography>
//       </PrimaryButton>
// );
// }

//  {/* <ThemeProvider theme={theme}>
//     <CustomHeaderButton
//         className={boolean('isSelected', true) ? classes.selectedButton : classes.dropDownButton}
//         // handleClick={handleOnClick}
//         value='Explore'
//         isDropDown={boolean('isDropDown', true)}
//     >
//         {text('name', 'Explore')}
//     </CustomHeaderButton>
// </ThemeProvider> */}