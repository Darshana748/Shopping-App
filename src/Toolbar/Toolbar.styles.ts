import { makeStyles, tokens } from "@fluentui/react-components";

export const toolbarStyles = makeStyles({
    drawerBody: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '12px',
        marginBottom: '12px',
        justifyContent:'space-between'
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
    drawerHeader:{
        display: 'flex',
        flexDirection: 'column',
    },
    drawerFooter:{
        display: 'flex',
        flexDirection: 'column'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '40px',
        padding: '12px',
        backgroundColor: tokens.colorNeutralBackground4
    },
    toolbarItem: {
        marginLeft: '12px'
    },
    toolbarButton: {
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground1
        },
    },
    toolbarTitle:{
        ':hover': {
            cursor: 'pointer'
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
        
    },
    popSurface:{
        minWidth:'200px',
        display:'flex',
        flexDirection:'column',
        height:'100%'
    },
    popAvatar:{
        display:'flex',
        marginBottom: '16px',
        alignItems:'center'
    },
    popContent:{
        display:'flex',
        flexDirection:'column',
        marginBottom: '16px',
        marginLeft:'10px'
    },
    popHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    popFooter:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    

})