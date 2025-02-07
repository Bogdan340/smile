import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#121212', // Основной фон
            paper: '#1E1E1E',   // Вторичный фон
        },
        primary: {
            main: '#BB86FC',   // Акцентный цвет (фиолетовый)
        },
        secondary: {
            main: '#03DAC6',   // Акцентный цвет (бирюзовый)
        },
        text: {
            primary: '#E0E0E0', // Основной текст
            secondary: '#9E9E9E', // Вторичный текст
        },
            divider: '#2C2C2C', // Границы и разделители
        action: {
            hover: '#2C2C2C', // Ховер-эффекты
        },
        success: {
        main: '#00C853', // Статус онлайн
        },
        error: {
            main: '#FF5252', // Уведомления
        },
        grey: {
            500: '#9E9E9E', // Офлайн статус
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF', // Цвет текста кнопок
                },
            },
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF', // Цвет иконок
                },
            },
        },
    },
});

export default theme;