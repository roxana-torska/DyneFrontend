import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/common';
import Link from 'next/link';
import SvgIcon from '@material-ui/core/SvgIcon';
import { APP_URL } from '../../utils/config';
import { withStyles } from '@material-ui/core';

class SocialLinks extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        item
        xs={12}
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={0}
        style={{ margin: '0px 26px 3%' }}
      >
        <div style={{ margin: '23px 0px 35px' }}>
          <Link href={`${APP_URL}/auth/facebook`}>
            <a>
              <SvgIcon className={classes.socialIcon} viewBox='0 0 40 40'>
                <path
                  fill='#3B5998'
                  d='M20 0C8.972 0 0 8.972 0 20c0 11.027 8.972 20 20 20 11.027 0 20-8.973 20-20C40 8.972 31.029 0 20 0zm4.974 20.704H21.72v11.598h-4.822V20.704h-2.291v-4.099h2.291v-2.651c0-1.899.903-4.866 4.866-4.866l3.573.014v3.979h-2.593c-.422 0-1.022.21-1.022 1.116v2.409h3.673l-.421 4.098z'
                />
              </SvgIcon>
            </a>
          </Link>
          <span style={{ margin: '0px 10px' }} />
          <Link href={`${APP_URL}/auth/instagram`}>
            <a>
              <SvgIcon className={classes.socialIcon} viewBox='0 0 40 40'>
                <path
                  fill='#E1306C'
                  d='M25.96 10.643H14.04a3.455 3.455 0 0 0-3.451 3.45v11.922a3.455 3.455 0 0 0 3.45 3.452h11.923a3.455 3.455 0 0 0 3.451-3.451V14.093a3.455 3.455 0 0 0-3.451-3.451zM20 26.252a6.204 6.204 0 0 1-6.197-6.197A6.204 6.204 0 0 1 20 13.858a6.204 6.204 0 0 1 6.197 6.197A6.205 6.205 0 0 1 20 26.252zm6.396-11.113a1.468 1.468 0 0 1-1.466-1.466c0-.808.657-1.466 1.466-1.466.809 0 1.466.658 1.466 1.466 0 .808-.657 1.466-1.466 1.466z'
                />
                <path
                  fill='#E1306C'
                  d='M20 16.476a3.583 3.583 0 0 0-3.578 3.577A3.583 3.583 0 0 0 20 23.633a3.582 3.582 0 0 0 3.578-3.58A3.582 3.582 0 0 0 20 16.476z'
                />
                <path
                  fill='#E1306C'
                  d='M20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0zm12.03 26.015a6.076 6.076 0 0 1-6.07 6.07H14.04a6.076 6.076 0 0 1-6.07-6.07V14.093a6.077 6.077 0 0 1 6.07-6.07h11.92a6.076 6.076 0 0 1 6.07 6.07v11.922z'
                />
              </SvgIcon>
            </a>
          </Link>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SocialLinks);
