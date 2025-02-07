import React from "react";

import { Container, Typography, TextField, Button, Link, Box } from '@mui/material';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector, StepIcon } from '@mui/material';
import { styled } from '@mui/system';

import { useTheme } from "@emotion/react";
import { Link as RouteLink } from "react-router";
import EastIcon from '@mui/icons-material/East';
import { IMaskInput } from 'react-imask';

const boxStyle = (theme) => {
    return {width: '25%',
    padding: 3,
    backgroundColor: theme.palette.background.paper, 
    borderRadius: 2,
    boxShadow: 3,}
}
const textFieldStyle = (theme) => {
    return {
        maxWidth: "13vw",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.divider,
                transition: ".3s",
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main, 
                transition: ".3s",
            },
            '&:hover label': {
                borderColor: theme.palette.primary.main,
                transition: ".3s",
            }
        }
    }
}

const PhoneMaskInput = React.forwardRef((props, ref) => {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+7 (000) 000 00-00"
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

const Page = () => {
    const theme = useTheme();
    const [phone, setPhone] = React.useState('+7');

    document.title = "Регистрация";
    const handlePhoneChange = (event) => {
        setPhone(event.target.value === "" ? "+7" : event.target.value);
    };

    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.Mui-active`]: {
            '& .MuiStepConnector-line': {
                borderColor: theme.palette.primary.main,
            },
        },
        [`&.Mui-completed`]: {
            '& .MuiStepConnector-line': {
                borderColor: theme.palette.primary.main,
            },
        },
        '& .MuiStepConnector-line': {
            borderColor: theme.palette.grey[400],
        },
    }));
      
      
    const QontoStepIcon = styled(StepIcon)(({ theme, active, completed }) => ({
        backgroundColor: completed ? theme.palette.primary.main : 'transparent',
        zIndex: 1,
        color: completed ? '#fff' : theme.palette.grey[400],
        width: 24,
        height: 24,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&.Mui-active': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
        },
    }));
    
    
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    return (
        <Container
            component="main"
            maxWidth="100vw"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                minHeight: '100vh', 
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
            }}
        >
            <Box sx={boxStyle}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Box sx={{display: "flex", justifyContent: "flex-start", columnGap: "4vw"}}>
                        <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
                            Регистрация
                        </Typography>
                        <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    <TextField
                        fullWidth
                        label="Номер телефона"
                        variant="outlined"
                        margin="normal"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        sx={textFieldStyle}
                        InputProps={{
                            inputComponent: PhoneMaskInput,
                            style: { color: theme.palette.text.primary },
                        }}
                    />
                </Box>
                <Box sx={{display: "flex", alignItems: "center", columnGap: "1vw", justifyContent: "space-between"}}>
                    <Typography variant="body2" align="center" sx={{ color: theme.palette.text.secondary, textWrap: "nowrap" }}>
                        Уже есть аккаунт?{' '}
                        <Link
                            to="/login"
                            component={RouteLink}
                            sx={{ color: theme.palette.primary.main, textDecoration: 'none' }}
                        >
                        Войти
                        </Link>
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2, width: "fit-content", height: "fit-content", padding: ".5vw", borderRadius: "50%", minWidth: 0}}
                    >
                        <EastIcon />
                    </Button>
                </Box>
                
            </Box>
        </Container>
    );
}

export default Page;