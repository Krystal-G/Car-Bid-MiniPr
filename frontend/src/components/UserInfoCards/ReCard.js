
import { Card } from '@mui/material';
import {styled } from '@mui/material/styles';
const ReCard = styled(Card)(({ theme }) => ({
    borderRadius: '5%',
    maxWidth: 380,
    height: '500px',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,

}));

export default ReCard;
