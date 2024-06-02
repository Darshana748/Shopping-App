import { makeStyles, tokens } from "@fluentui/react-components";

export const toolbarStyles = makeStyles({
    drawerBody: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '12px'
    },
    drawerButton: {
        marginTop: '4px',
        justifyContent: 'flex-start'
    },
    drawerDivider: {
        display: 'flex',
        maxHeight: '16px',
        marginTop: '12px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
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
    },
    toolbarStart: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    toolbarEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    }

})