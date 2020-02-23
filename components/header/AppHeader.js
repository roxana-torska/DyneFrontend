import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from '../../styles/common';

function AppHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar color='primary'>
        <Toolbar>
          <div className={classes.topBarLogoContainer}>
            <img style={{ width: '27px', marginTop: '5px' }} src='/static/imgs/logo.svg' />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.topBgIconContainer}>
        {/* <SvgIcon className={classes.topBgIconRight} viewBox="0 0 129 122">
          <path
            fill="#E1E1E1"
            fillRule="evenodd"
            d="M62.004 55.612c10.913-8.633 10.304-5.04 9.384-7.643-1.244-3.52-10.64-7.337-15.94-12.775-5.488-5.636-6.691-14.117-4.938-15.204 1.864-1.158 6.072 6.67 11.498 5.862 4.516-.674 8.867-7.179 8.023-12.221C68.574 4.93 51.267-1.703 36.946.389 13.86 3.762 4.1 28.992 3.548 30.484c-2.052 5.556-6.726 18.213-.209 28.89 7.59 12.436 26.9 16.51 32.38 11.07 1.624-1.615 2.987-5.016 2.22-7.93-.742-2.825-2.942-3.12-4.285-5.81-2.198-4.4-.22-11.493 2.979-12.979 4.022-1.868 14.271 2.248 21.771 13.306 0 0-1.007 1.338-.897 1.065 4.889-12.134 7.763-17.108 10.98-15.14"
            clipRule="evenodd"
          />
          <path
            fill="#F2F2F2"
            fillRule="evenodd"
            d="M75.355 47.783c-1.678-4.168-9.222-2.626-15.079-9.5-4.57-5.36-5.263-12.525-4.233-13.031.96-.471 3.015 5.051 6.455 5.103 3.892.058 8.914-6.891 8.023-12.221C69.064 9.434 51.757 2.8 37.435 4.892 14.349 8.265 4.589 33.496 4.038 34.987c-2.052 5.556-6.726 18.213-.21 28.89 7.59 12.436 26.9 16.51 32.38 11.07 1.624-1.615 2.988-5.016 2.22-7.93-.742-2.825-2.941-3.12-4.285-5.809-2.088-4.184-.708-11.032 2.98-12.98 3.913-2.07 9.346 1.956 13.667 5.155 5.948 4.406 9.472 9.578 11.446 13.085 12.62-10.625 14.254-15.862 13.12-18.685z"
            clipRule="evenodd"
          />
          <mask
            id="a"
            width="27"
            height="26"
            x="82"
            y="60"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M88.294 85.873l-6.14-18.898 20.273-6.604 6.139 18.898-20.272 6.604z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#E2E1DF"
              fillRule="evenodd"
              d="M97.925 64.287c-4.274-1.268-5.697-.856-6.164-.18-.689 1 .782 2.475.106 4.823-.526 1.83-2.038 3.055-2.305 2.898-.233-.138.514-1.114.188-2.22-.441-1.495-2.693-2.684-4.156-2.027-.887.399-1.245 1.37-1.378 1.748-1.067 3.032.874 7.218 3.531 9.736 4.813 4.558 11.436 3.136 11.757 3.061 1.558-.365 5.106-1.195 6.54-4.257 1.671-3.568-.289-8.538-2.33-8.965-.606-.127-1.575.072-2.118.68-.526.589-.264 1.13-.67 1.833-.631 1.096-2.38 1.804-3.368 1.262-1.05-.576-.952-2.403-.875-3.856.106-2 .746-3.568 1.242-4.536z"
              clipRule="evenodd"
            />
          </g>
          <mask
            id="b"
            width="44"
            height="42"
            x="89"
            y="85"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M99.646 126.746L89.563 95.708l32.444-10.568 10.083 31.037-32.444 10.569z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#b)">
            <path
              fill="#E2E1DF"
              fillRule="evenodd"
              d="M114.833 91.5c-6.873-2.13-9.152-1.474-9.893-.371-1.092 1.63 1.286 4.064.231 7.902-.823 2.993-3.232 4.981-3.663 4.72-.376-.229.811-1.818.274-3.634-.726-2.456-4.354-4.431-6.693-3.373-1.419.642-1.98 2.228-2.19 2.846-1.674 4.955 1.491 11.837 5.787 15.996 7.777 7.527 18.385 5.279 18.9 5.16 2.495-.578 8.177-1.895 10.441-6.894 2.637-5.825-.569-13.992-3.849-14.717-.974-.215-2.527.099-3.39 1.088-.836.959-.409 1.848-1.053 2.996-.999 1.786-3.796 2.926-5.388 2.025-1.691-.956-1.557-3.949-1.451-6.329a18.533 18.533 0 0 1 1.937-7.416z"
              clipRule="evenodd"
            />
          </g>
          <mask
            id="c"
            width="35"
            height="35"
            x="46"
            y="79"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M80.865 103.207L56.56 113.548l-9.908-23.35 24.306-10.341 9.907 23.35z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#c)">
            <path
              fill="#E2E1DF"
              fillRule="evenodd"
              d="M73.604 86.797c-4.168-3.612-6.183-3.873-7.25-3.345-1.578.78-.922 3.196-3.496 5.506-2.007 1.801-4.737 2.415-4.94 2.101-.188-.293 1.903-1.27 1.893-2.412-.013-1.293-2.71-2.584-4.738-2.003-3.31.95-5.691 7.04-4.766 11.672 1.49 7.469 11.211 9.349 11.785 9.452 2.14.382 7.015 1.252 11.035-1.48 4.683-3.182 6.069-9.798 3.943-11.322-.63-.451-1.941-.72-3.047-.31-1.073.397-1.166 1.141-2.181 1.731-1.58.916-4.207.826-4.983-.291-.825-1.186.665-3.202 1.849-4.805 1.63-2.207 3.574-3.652 4.896-4.494z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#EEE"
            fillRule="evenodd"
            d="M98.135 64.064c-3.57-1.179-4.849-.874-5.297-.277-.608.805.444 1.945.008 3.954-.452 2.08-2.184 3.615-2.69 3.38-.482-.222.591-2.084-.393-3.47-.746-1.053-2.236-1.056-2.313-1.056-.992.003-1.832.514-2.233.954-1.576 1.735-.163 6.583 2.544 9.557 3.04 3.339 8.042 4.678 12.239 3.446.79-.231 4.687-1.375 6.058-4.642.454-1.083.533-2.165.572-2.702.072-.985.217-2.984-.973-4.723-.386-.565-.935-1.367-1.929-1.54-.731-.126-1.602.103-2.118.68-.526.59-.264 1.13-.67 1.834-.664 1.152-2.557 1.763-3.369 1.261-1.02-.63-.81-3.314.564-6.656zM115.164 91.135c-5.744-1.976-7.79-1.492-8.503-.52-.965 1.311.736 3.193.062 6.478-.699 3.402-3.459 5.896-4.274 5.506-.776-.371.923-3.407-.673-5.692-1.211-1.733-3.6-1.757-3.725-1.757-1.592-.008-2.933.82-3.57 1.536-2.508 2.822-.181 10.783 4.2 15.688 4.917 5.508 12.96 7.764 19.678 5.798 1.266-.37 7.503-2.195 9.663-7.531.716-1.768.828-3.54.885-4.419.103-1.614.311-4.887-1.62-7.751-.627-.93-1.517-2.25-3.115-2.546-1.173-.216-2.568.148-3.389 1.088-.836.958-.41 1.846-1.053 2.996-1.051 1.879-4.081 2.856-5.389 2.024-1.644-1.045-1.339-5.44.823-10.898zM75.394 88.067c-3.656-3.382-5.605-3.709-6.722-3.23-1.508.647-1.132 2.607-3.474 4.808-2.428 2.28-6.058 3.2-6.517 2.64-.49-.597 2.872-2.548 2.543-4.432-.273-1.568-3.04-2.739-5.2-2.146-3.725 1.023-6.617 7.566-5.768 12.54 1.368 8.02 12.125 10.029 12.761 10.139 2.37.408 7.767 1.337 12.353-1.601 5.342-3.422 7.146-10.53 4.837-12.163-.685-.485-2.135-.773-3.383-.331-1.21.428-1.343 1.228-2.498 1.862-1.888 1.037-4.915.745-5.54-.307-.786-1.323 1.855-4.469 6.608-7.779z"
            clipRule="evenodd"
          />
        </SvgIcon> */}
      </div>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
