import {styled} from '@mui/material/styles';

export const FooterContainer = styled('footer')({
  fontFamily: 'Inter, sans-serif',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  boxShadow: 'none',
  padding: '1rem 1.5rem',
  background: 'transparent',
  width: 'auto',
  boxSizing: 'border-box',
  borderTop: 'none',
  alignSelf: 'center',
  minHeight: 0,
});

export const LinksContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  marginRight: '7rem',
});

export const FooterLink = styled('a')({
  fontWeight: 500,
  fontSize: '0.6875rem',
  lineHeight: '1.1',
  textDecoration: 'none',
  color: '#090e29',
});

export const FooterText = styled('p')({
  fontWeight: 500,
  fontSize: '0.6875rem',
  lineHeight: '1.1',
  color: '#DBDBDB',
});
