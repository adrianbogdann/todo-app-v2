import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@material-ui/core/Button'

let ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

export default ColorButton;