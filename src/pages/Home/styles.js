import {styled} from '@mui/material/styles';

export const Container = styled('div')(() => ({
                                         display: 'flex',
                                         width: '100%',
                                         height: '100vh',
                                         flexDirection: 'row',
                                         overflowX: 'hidden',
                                         overflowY: 'hidden',
                                         boxSizing: 'border-box',
                                         margin: 0,
                                         overflow: 'hidden',
                                         '& *': {
                                           margin: 0,
                                         },
                                       }));

export const FormSection = styled('div')(({theme}) => ({
                                           flex: '0 0 55%',
                                           height: '100%',
                                           minHeight: 0,
                                           display: 'flex',
                                           flexDirection: 'column',
                                           justifyContent: 'center',
                                           alignItems: 'center',
                                           padding: 0,
                                           overflow: 'hidden',
                                           boxSizing: 'border-box',
                                           maxWidth: '100%',
                                           overflowX: 'hidden',
                                           '& *': {
                                             margin: 0,
                                           },
                                           [theme.breakpoints.down('md')]: {
                                             flex: 1,
                                             height: 'auto',
                                             padding: 0,
                                             overflow: 'auto',
                                           },
                                           [theme.breakpoints.down('xs')]: {
                                             flex: 1,
                                             height: 'auto',
                                             padding: 0,
                                             overflow: 'auto',
                                           },
                                         }));

export const ImageSection = styled('div')(({theme}) => ({
                                            flex: '0 0 45%',
                                            height: '100%',
                                            minHeight: 0,
                                            minWidth: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 0,
                                            boxSizing: 'border-box',
                                            background: 'transparent',
                                            border: 'none',
                                            '& *': {
                                              margin: 0,
                                            },
                                            [theme.breakpoints.down('md')]: {
                                              flex: 0,
                                              maxWidth: '0',
                                              maxHeight: '0',
                                            },
                                            [theme.breakpoints.down('xs')]: {
                                              flex: 0,
                                              maxWidth: '0',
                                              maxHeight: '0',
                                            },
                                          }));

export const StyledImage = styled('img')(({theme}) => ({
                                           width: '100%',
                                           height: '100%',
                                           minWidth: 0,
                                           objectFit: 'cover',
                                           borderRadius: 0,
                                           background: 'transparent',
                                           border: 'none',
                                           maxWidth: '100%',
                                           maxHeight: '100%',
                                           padding: 0,
                                           margin: 0,
                                           display: 'block',
                                           [theme.breakpoints.down('md')]: {
                                             maxWidth: '0',
                                             maxHeight: '0',
                                           },
                                           [theme.breakpoints.down('xs')]: {
                                             maxWidth: '0',
                                             maxHeight: '0',
                                           },
                                         }));
