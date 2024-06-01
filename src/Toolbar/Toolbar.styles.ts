import { makeStyles, tokens } from "@fluentui/react-components";

export const toolbarStyles = makeStyles({
    drawerBody: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px'
    },
    drawerButton: {
        marginTop: '4px',
        justifyContent: 'flex-start'
    },
    drawerDivider: {
        display:'flex',
        maxHeight: '16px'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '40px',
        padding: '12px',
        backgroundColor: tokens.colorNeutralBackground3
    },
    toolbarItem: {
        marginLeft: '12px'
    },
    toolbarButton: {
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground1
        },
    }
})