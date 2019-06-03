import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/common';
import ListCardItem from '../../components/card/listCardItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { API_IMAGE_URL } from '../../utils/config';
import UpdateRating from '../common/UpdateRating';
import StarRate from '@material-ui/icons/StarRate';
import { connect } from 'react-redux';

class DishCard extends PureComponent {
  state = {
    showReview: false
  };

  showReviewDialog = evt => {
    evt.stopPropagation();
    const { showReview } = this.state;
    this.setState({ showReview: !showReview });
  };

  handleDishCardCancel = evt => {
    evt.stopPropagation();
    const { onCancel } = this.props;
    this.setState({ showReview: false });
    onCancel(evt);
  };

  handleOnSubmit = (event, commonRating, dishId) => {
    const { onSubmit } = this.props;
    this.setState({ showReview: true });
    onSubmit(event, commonRating, dishId);
  };

  render() {
    const {
      data,
      classes,
      onSubmit,
      global: { userReviews, user },
      showUserReview
    } = this.props;

    const { showReview } = this.state;
    let dishAvatar = '';
    let userDishRating = 0;
    let dishAvgRating = data.avgRatings;
    if (data.images.length) {
      dishAvatar = `${API_IMAGE_URL}/assets/images/dishes/${data.slug}/${
        data.images[0].path
      }`;
    }

    if (
      userReviews[data.id] &&
      userReviews[data.id].typeId === data.id &&
      userReviews[data.id].userId === user.user_id
    ) {
      userDishRating = userReviews[data.id].ratings;
      dishAvgRating = userReviews[data.id].dish.avgRatings;
    } else if (data.reviews) {
      userDishRating = data.reviews.ratings;
    } else {
      userDishRating = 0;
    }
    return (
      <Grid container direction='row'>
        <Grid item xs={12}>
          <ListCardItem
            title={
              <Grid container direction='row' spacing={0} wrap='nowrap'>
                <Grid item xs={9} className={classes.nameEllipsis}>
                  {data.primary}
                  <div className={classes.dishProviderName}>
                    {data.providerName}
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div
                    className={classes.listCardDishRating}
                    style={{ textAlign: 'right' }}
                  >
                    <StarRate className={classes.reviewFooterItemIcon} />
                    {dishAvgRating}
                  </div>
                </Grid>
              </Grid>
            }
            description={data.secondary}
            image={dishAvatar || '/static/imgs/image-not-found-dark.png'}
            fullWidthImage={true}
            footerItems={
              <Grid
                container
                direction='row'
                spacing={0}
                wrap='nowrap'
                className={classes.reviewFooterItem}
                style={{ marginTop: '0px' }}
              >
                <Grid item xs={6} className={classes.listCardFooterPrice}>
                  <div className={classes.listCardDishPrice}>
                    ${data.price.toFixed(2)}
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: 'right', position: 'relative' }}
                  zeroMinWidth
                >
                  <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    style={{ height: '30px' }}
                    onClick={this.showReviewDialog}
                    className={classes.dishCardYouRate}
                    classes={{ root: classes.listQuickRate }}
                    style={{ position: 'absolute', right: '-10px' }}
                  >
                    Quick rate
                  </Button>
                </Grid>
              </Grid>
            }
          />
        </Grid>
        {showReview ? (
          <Grid item xs={12} style={{ marginTop: '20px' }}>
            <ListCardItem
              title={
                <Grid container direction='row' spacing={0} wrap='nowrap'>
                  <Grid item xs={9} className={classes.nameEllipsis}>
                    {data.primary}
                    <div className={classes.dishProviderName}>
                      {data.providerName}
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    {/* <div
                      className={classes.listCardDishRating}
                      style={{ textAlign: 'right' }}
                    >
                      <StarRate className={classes.reviewFooterItemIcon} />
                      {dishAvgRating}
                    </div> */}
                  </Grid>
                </Grid>
              }
              description={data.secondary}
              fullWidthImage={true}
              footerItems={
                <Grid
                  container
                  direction='row'
                  spacing={0}
                  wrap='nowrap'
                  className={classes.reviewFooterItem}
                >
                  <Grid item xs={6} className={classes.listCardFooterPrice}>
                    <div className={classes.listCardDishPrice}>
                      ${data.price.toFixed(2)}
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ textAlign: 'right' }}
                    zeroMinWidth
                    className={classes.makeAReview}
                  >
                    to full review
                  </Grid>
                </Grid>
              }
              actionItems={
                <UpdateRating
                  rating={userDishRating || 0}
                  showBorder={true}
                  onSubmit={this.handleOnSubmit}
                  onCancel={this.handleDishCardCancel}
                  dishData={data}
                />
              }
            />
          </Grid>
        ) : null}
      </Grid>
    );
  }
}
export default connect(
  state => ({
    global: state.global.toJSON()
  }),
  {}
)(withStyles(styles)(DishCard));
