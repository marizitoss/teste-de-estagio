import {Box, Button, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'

export const FormContent =
    styled(Box)(({theme}) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  gap: '0.6rem',
                  width: '100%',
                  height: '100%',
                  margin: '0 auto',
                  fontFamily: 'Inter, sans-serif',
                  boxSizing: 'border-box',
                  maxWidth: '32rem',
                  overflow: 'hidden',
                  [theme.breakpoints.down('md')]:
                      {padding: '1rem', gap: '0.5rem', maxWidth: '28rem'},
                  [theme.breakpoints.down('sm')]: {
                    padding: '0.8rem',
                    gap: '0.45rem',
                    maxWidth: '22rem',
                    alignItems: 'center'
                  },
                  [theme.breakpoints.down('xs')]: {
                    padding: '0.6rem',
                    gap: '0.3rem',
                    maxWidth: '20rem',
                    alignItems: 'center'
                  },
                }))

export const Icon = styled('img')(
    ({theme}) => ({
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
      objectFit: 'contain',
      [theme.breakpoints.down('md')]: {width: '3rem', height: '3rem'},
      [theme.breakpoints.down('sm')]: {width: '2.5rem', height: '2.5rem'},
      [theme.breakpoints.down('xs')]: {width: '2rem', height: '2rem'},
    }))

export const FormHeader =
    styled(Box)(({theme}) => ({
                  marginBottom: '0.5rem',
                  '& h1': {
                    fontWeight: 700,
                    fontSize: '1.6rem',
                    lineHeight: '1.9rem',
                    color: '#090e29',
                    margin: 0,
                    [theme.breakpoints.down('md')]:
                        {fontSize: '1.45rem', lineHeight: '1.75rem'},
                    [theme.breakpoints.down('sm')]:
                        {fontSize: '1.25rem', lineHeight: '1.5rem'},
                    [theme.breakpoints.down('xs')]:
                        {fontSize: '1.05rem', lineHeight: '1.25rem'},
                  },
                  '& p': {
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    lineHeight: '150%',
                    color: '#8c8c8f',
                    margin: 0,
                    [theme.breakpoints.down('md')]: {fontSize: '0.85rem'},
                    [theme.breakpoints.down('sm')]: {fontSize: '0.78rem'},
                    [theme.breakpoints.down('xs')]: {fontSize: '0.72rem'},
                  },
                }))

export const FormFields = styled('form')(
    ({theme}) => ({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: '0.5rem',
      width: '100%',
      minHeight: 0,
      maxWidth: '100vw',
      overflow: 'hidden',
      alignSelf: 'stretch',
      [theme.breakpoints.down('sm')]: {gap: '0.45rem', overflowY: 'auto'},
      [theme.breakpoints.down('xs')]: {gap: '0.35rem', overflowY: 'auto'},
    }))

export const Fields = styled(Box)(
    ({theme}) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.125rem',
      width: '100%',
      maxWidth: '32rem',
      height: '4.25rem',
      '&:last-of-type': {flexDirection: 'row', gap: '1rem', height: 'auto'},
      [theme.breakpoints.down('md')]: {maxWidth: '28rem', height: '3.75rem'},
      [theme.breakpoints.down('sm')]: {
        maxWidth: '22rem',
        height: '3.25rem',
        '&:last-of-type': {gap: '0.75rem'},
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '20rem',
        height: '3rem',
        flexDirection: 'column',
        '&:last-of-type': {flexDirection: 'column', gap: '0.5rem'},
      },
    }))

export const Label =
    styled(Typography)(({theme}) => ({
                         fontWeight: 600,
                         fontSize: '1rem',
                         lineHeight: '150%',
                         color: '#090e29',
                         marginBottom: '0.125rem',
                         [theme.breakpoints.down('sm')]: {fontSize: '0.95rem'},
                         [theme.breakpoints.down('xs')]: {fontSize: '0.88rem'},
                       }))

export const InputWithBtn = styled(Box)({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
})

export const TogglePasswordBtn =
    styled(Button)(({theme}) => ({
                     height: '2.5rem',
                     display: 'inline-flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: '0.4rem 0.75rem',
                     border: '0.0625rem solid #e5e5e5',
                     borderRadius: '0 0.375rem 0.375rem 0',
                     fontWeight: 600,
                     fontSize: '14px',
                     cursor: 'pointer',
                     transition: 'all 0.2s ease-in-out',
                     marginLeft: '-1px',
                     boxShadow: 'none',
                     '&:hover': {
                       background: '#F7F7F7',
                       boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.08)',
                     },
                     [theme.breakpoints.down('sm')]: {marginLeft: 0},
                   }))

export const SubmitBtn = styled(Button)(
    ({theme}) => ({
      width: '100%',
      height: '2.75rem',
      background: '#0041DC',
      border: 'none',
      borderRadius: '0.375rem',
      color: '#fff !important',
      fontWeight: 600,
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
      boxSizing: 'border-box',
      boxShadow: 'none',
      '&:disabled': {background: '#84a8fcff', cursor: 'not-allowed'},
      '&:hover': {background: '#1e4fc1'},
      [theme.breakpoints.down('sm')]: {height: '2.4rem', fontSize: '0.9rem'},
      [theme.breakpoints.down('xs')]: {height: '2.2rem', fontSize: '0.85rem'},
    }))

export const Message =
    styled(Typography)(({theme}) => ({
                         fontWeight: 600,
                         fontSize: '0.875rem',
                         color: '#ff6969',
                         marginTop: '0.5rem',
                         [theme.breakpoints.down('sm')]:
                             {fontSize: '0.82rem', marginTop: '0.4rem'},
                         [theme.breakpoints.down('xs')]:
                             {fontSize: '0.78rem', marginTop: '0.35rem'},
                       }))

export const CustomTextFieldStyles = {
  width: '100%',
  height: '2.5rem',
  padding: '0.5rem 1rem',
  border: '0.0625rem solid #dbdbdb',
  borderRadius: '0.375rem',
  fontSize: '1rem',
  lineHeight: '150%',
  color: '#090e29',
  outline: 'none',
  transition: 'border 0.3s',
  boxSizing: 'border-box',
  '&::placeholder': {color: '#8c8c8f'},
  '&:focus': {borderColor: '#2f6af7'},
  '@media (max-width:56.25rem)':
      {height: '2.25rem', padding: '0.45rem 0.9rem', fontSize: '0.95rem'},
  '@media (max-width:37.5rem)':
      {height: '2rem', padding: '0.4rem 0.8rem', fontSize: '0.92rem'},
  '@media (max-width:22.5rem)':
      {height: '1.85rem', padding: '0.32rem 0.6rem', fontSize: '0.88rem'},
  '&:hover': {
    borderColor: '#8C8C8F',
  },
  '&.Mui-error': {
    borderColor: '#FF6969',
  },
}

export const PasswordRow =
    styled(Box)(({theme}) => ({
                  display: 'flex',
                  gap: '1rem',
                  width: '100%',
                  alignItems: 'flex-start',
                  '& > *': {flex: 1, minWidth: 0},
                  [theme.breakpoints.down('md')]: {gap: '0.9rem'},
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    gap: '0.6rem',
                    '& > *': {width: '100%'},
                  },
                  [theme.breakpoints.down('xs')]: {
                    flexDirection: 'column',
                    gap: '0.5rem',
                    '& > *': {width: '100%'},
                  },
                }))
