import { makeStyles, tokens } from "@fluentui/react-components";

export const loginStyles = makeStyles({
    login: {
        height: '685px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.colorNeutralBackground2
    },
    card: {
        display: 'flex',
        height: 'max-content',
        width: '400px',
        padding: '24px',
        alignItems: 'center',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        marginBottom: '28px'
    },
    cardFooter: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop:'24px'
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '24px'
    }
})