import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppLayout from '../components/layouts/AppLayout';
import { Typography } from '@material-ui/core';
import styles from '../styles/common';
import validator from '../utils/validator';
import { userAPI } from '../services/userAPI';
import notify from '../utils/notifier';
import WindowResizeListener from 'react-window-size-listener';

import Salad from '../components/customIcon/Salad';
import DonutsIcon from '../components/customIcon/DonutsIcon';
import ShareWith from '../components/common/ShareWith';
import RestaurantLayout from '../components/layouts/RestaurantLayout';

class SocialMediaList extends PureComponent {
    validators = {
        email: {
            required: { message: 'Please use your email' },
            email: true
        },
        password: {
            required: { message: 'Password required' }
        }
    };
    state = {
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
        emailErrorMessage: '',
        passwordErrorMessage: '',
        winHeight: '100vh',
        winWidth: '100vw'
    };

    static getInitialProps({ store, isServer, query }) {
        let redirectUrl = query && query.redirect ? query.redirect : '';
        return { isServer, redirectUrl };
    }

    handleFieldChange = (name, value, notSetValue) => {
        notSetValue = notSetValue || false;
        const fieldError = validator(value, this.validators[name]);
        let state = null;
        if (fieldError.error === true) {
            state = {};
            state[`${name}Error`] = true;
            state[`${name}ErrorMessage`] = fieldError.errorMessage;
        } else if (notSetValue === false) {
            state = {};
            state[`${name}Error`] = false;
            state[`${name}ErrorMessage`] = '';
            state[name] = value;
        }
        if (state) {
            this.setState(state);
        }
        return fieldError.error;
    };

    validateForm = () => {
        const result = Object.keys(this.validators).map(field => {
            return this.handleFieldChange(field, this.state[field], true);
        });
        return !result.includes(true);
    };

    handleSubmit = evt => {
        const { redirectUrl } = this.props;
        evt.preventDefault();
        if (this.validateForm()) {
            const { email, password } = this.state;
            userAPI
                .login({
                    params: {
                        email,
                        password
                    }
                })
                .then(response => {
                    if (response.status.toUpperCase() === 'OK') {
                        let url = `/auth/callback?token=${
                            response.data.token
                            }&redirect=${escape(redirectUrl)}`;
                        window.location.href = url;
                    } else {
                        notify(response.error);
                    }
                });
        } else {
            this.setState({ error: true });
        }
    };
    fbs_click() {
        u = location.href;
        t = document.title;
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t),
            'sharer',
            'toolbar=0,status=0,width=626,height=436');

        return false;
    }
    getUrl = (yourMessage) => {
        let message = yourMessage.split(' ').join('%20');
        return message
    }


    render() {
        const { classes } = this.props;
        const {
            winHeight,
            winWidth
        } = this.state;
        let adjustHeightGridOne = 10;
        let adjustHeightGridThree = 8;
        let rootHeight = winHeight - 56;
        let minVisibleHeight = 361;
        if (winWidth <= 312) {
            minVisibleHeight = 312;
        }
        if (rootHeight < minVisibleHeight) {
            rootHeight = minVisibleHeight;
        } else {
            adjustHeightGridOne = ((rootHeight - minVisibleHeight) * 30) / 100;
            adjustHeightGridThree = ((rootHeight - minVisibleHeight) * 15) / 100;

        }
        return (
            <RestaurantLayout
                selectedPageTab={0}
                toggleMenu={this.handleToggleMenu}
                changeOverlay={this.handleOverlay}
                isHomePage={true}
                isDishDetails={true}
            // restaurantsName="BEST AOUND YOU"
            >
                <WindowResizeListener
                    onResize={windowSize => {
                        this.setState({ winHeight: windowSize.windowHeight });
                    }}
                />
                <form className={classes.container} onSubmit={this.handleSubmit}>
                    <Grid
                        container
                        direction='column'
                        justify='space-between'
                        alignItems='center'
                        spacing={0}
                        style={{
                            margin: '0px',
                            minHeight: `${rootHeight}px`
                        }}
                    >
                        <Grid
                            item
                            style={{
                                // backgroundColor: '#999',
                                height: `${adjustHeightGridOne}px`,
                                width: '100%'
                            }}
                        />
                        <Grid item container
                            direction="row"
                            className={classes.adjustHeightSignTwo}>
                            <Grid item xs={1}>

                            </Grid>
                            <Grid item xs={2}>
                                <DonutsIcon />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography style={{
                                    display: "inline",
                                    verticalAlign: "top",
                                    fontFamily: "Lato",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    lineHeight: "22px",

                                    color: "#F44336",
                                }}>
                                    Share your review  with friends
                                    and get rewards!
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid
                            item
                            style={{
                                //  backgroundColor: '#f0f0f0',
                                height: `${adjustHeightGridThree}px`,
                                width: '100%'
                            }}
                        />
                        <Grid
                            item
                            style={{ width: '100%' }}
                            className={classes.adjustHeightSigninFour}
                        >
                            <Grid container direction="column">

                                {[
                                    {
                                        name: "Facebook",
                                        url: "www.facebook.com/username",
                                        href: 'http://www.facebook.com/share.php?u=www.dishin.pk'
                                    }
                                    ,
                                    {
                                        name: "Whatsapp",
                                        url: "+92 306 2770 734",
                                        href: "https://wa.me/?text=http://localhost:3001/"
                                    },

                                ].map(rec => <ShareWith name={rec.name} url={rec.url} href={rec.href} />)}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                        />
                        <Grid item style={{
                            backgroundColor: "red"
                        }} >
                            <div style={{ margin: '0 82px' }}>
                                <Button
                                    size='medium'
                                    onClick={this.handleSubmit}
                                    style={{
                                        width: "100%",
                                        color: "white"
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        </Grid>
                        <Grid
                            item
                        />
                        <Grid item >
                            <Salad />
                        </Grid>
                        <Grid
                            item
                            style={{

                                width: '100%'
                            }}
                        />
                    </Grid>
                </form>
            </RestaurantLayout >
        );
    }
}

export default withStyles(styles)(SocialMediaList);
