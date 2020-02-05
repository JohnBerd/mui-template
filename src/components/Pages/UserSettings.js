import React from 'react';
import { Button, ButtonBase, ClickAwayListener, Grid, Paper, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useForm } from 'react-hook-form';
import { useStore } from 'react-hookstore';
import { useHistory } from 'react-router-dom';
import Page from '../Page';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexShrink: 0,
        fontWeight: theme.typography.fontWeightBold,
        paddingLeft: theme.spacing(1),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    main: {
        marginBottom: theme.spacing(3),
    },
    row: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
    },
    typoDelete: {
        fontSize: theme.typography.pxToRem(15),
        flexShrink: 0,
        fontWeight: theme.typography.fontWeightBold,
        color: red[500],
        paddingLeft: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(4, 3, 0, 2),
    },
    fieldMargin: {
        marginTop: theme.spacing(2),
    },
    gridParent: {
        flexGrow: 1,
    },
}));

function FirstnameForm() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const changeFirstname = data => {
        // Link to the API
        alert(JSON.stringify(data)) // Delete this line
    }

    return (
        <form noValidate onSubmit={handleSubmit(changeFirstname)}>
            <TextField
                label="Change Firstname"
                margin="normal"
                name="firstname"
                error={errors.firstname}
                inputRef={register({
                    required: {
                        value: true,
                        message: "This field is required"
                    },
                })}
                helperText={errors.firstname ? errors.firstname.message : ''}
            />
        </form>
    )
}

function LastnameForm() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const changeLastname = data => {
        // Link to the API
        alert(JSON.stringify(data)) // Delete this line
    }

    return (
        <form noValidate onSubmit={handleSubmit(changeLastname)}>
            <TextField
                label="Change Lastname"
                margin="normal"
                name="lastname"
                error={errors.lastname}
                inputRef={register({
                    required: {
                        value: true,
                        message: "This field is required"
                    },
                })}
                helperText={errors.lastname ? errors.lastname.message : ''}
            />
        </form>
    )
}

function EmailForm() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


    const changeEmail = data => {
        // Link to the API
        alert(JSON.stringify(data)) // Delete this line
    }

    return (
        <form noValidate onSubmit={handleSubmit(changeEmail)}>
            <TextField
                label="Your New Email"
                margin="normal"
                name="email"
                error={errors.email}
                inputRef={register({
                    required: {
                        value: true,
                        message: "This field is required"
                    },
                    pattern: {
                        value: re,
                        message: "Bad email"
                    },
                })}
                helperText={errors.email ? errors.email.message : ''} />
        </form>
    )
}

function PasswordForm() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const changePassword = data => {
        // Link to the API
        alert(JSON.stringify(data)) // Delete this line
    }

    return (
        <form noValidate onSubmit={handleSubmit(changePassword)}>
            <Grid item className={classes.gridParent}>
                <Grid container>

                    <TextField
                        label="Your Old Password"
                        type="password"
                        margin="normal"
                        name="oldpassword"
                        error={errors.oldpassword}
                        inputRef={register({
                            required: {
                                value: true,
                                message: "This field is required"
                            },
                        })}
                        helperText={errors.oldpassword ? errors.oldpassword.message : ''} />
                </Grid>
                <Grid container>
                    <TextField
                        label="Your New Password"
                        name="newpassword"
                        type="password"
                        error={errors.newpassword}
                        inputRef={register({
                            required: {
                                value: true,
                                message: "This field is required"
                            },
                        })}
                        helperText={errors.newpassword ? errors.newpassword.message : ''}
                    />
                </Grid>
                <Grid container>
                    <Button color="primary" className={classes.fieldMargin} fullWidth variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default function UserSettings(props) {
    const classes = useStyles();
    const [auth, setAuth] = useStore('authStore');
    const history = useHistory()

    const deleteAccount = () => {
        // Link to the API
        alert("Account Deleted")
        setAuth(false)
        localStorage.clear()
        history.push('/signin')
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClickAway = () => {
        setExpanded(false)
    };

    return (
        <Page title="Settings">
            <div className={classes.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className={classes.main}>
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <FaceIcon />
                                <Typography className={classes.heading}>Change Name</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid item className={classes.gridParent}>
                                    <Grid container>
                                        <FirstnameForm />
                                    </Grid>
                                    <Grid container>
                                        <LastnameForm />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <AlternateEmailIcon />
                                <Typography className={classes.heading}>Change E-mail</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid item className={classes.gridParent}>
                                    <Grid container>
                                        <EmailForm />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <VpnKeyIcon />
                                <Typography className={classes.heading}>Change Password</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <PasswordForm />
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </ClickAwayListener>
                <DeleteField callback={deleteAccount} />
            </div>
        </Page>
    );
}

function DeleteField(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        handleClose();
        props.callback();
    };

    return (
        <div>
            <div>
                <TableContainer component={Paper}>
                    <Table onClick={handleClickOpen} component={ButtonBase}>
                        <TableBody>
                            <TableRow >
                                <TableCell className={classes.root}>
                                    <Grid
                                        container
                                        xs={12}
                                        direction="row" >
                                        <Grid item><DeleteIcon style={{ color: red[500] }} /></Grid>
                                        <Grid item><Typography className={classes.typoDelete}>Delete My Account</Typography></Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure to want to delete your account"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You will loose all your data
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAccept} color="primary" autoFocus>
                        Delete My Account
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
