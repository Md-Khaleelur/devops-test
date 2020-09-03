import CustomRating from '@material-ui/lab/Rating';
import { number, withKnobs } from '@storybook/addon-knobs';
export default {
    title : 'atoms/Rating',
    component: Rating,
    decorators: [withKnobs]
}

export const Rating = () => {
    return (
        <CustomRating value={number("value",2.5)}/>
    )
}