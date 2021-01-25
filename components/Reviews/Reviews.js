import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import styles from "../../styles/common";
import Typography from "@material-ui/core/Typography";
import { searchDishes } from "../../redux/dishes/actions";

import React, { useState, useEffect } from "react";
import Review from "./Review";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import ReviewForm from "./ReviewForm";

const Reviews = (props) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const {
    classes,
    searchDishes,
    searchTerm,
    ExploreRef,
    mode,
    withForm,
    token,
    dishId,
  } = props;

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const [searchMode, setSearchMode] = useState(false);
  function toggleSearchMode() {
    if (searchMode) {
      setSearchMode(false);
      clearSearch();
    } else {
      setSearchMode(true);
    }
  }
  function handleSearchTerm(searchTerm) {
    searchDishes(searchTerm);
  }
  useEffect(() => {
    if (searchTerm && searchTerm.length > 1) {
      setSearchMode(true);
    }
  }, [searchTerm]);

  const reviewsArr = [
    {
      id: "0",
      dishName: "Sachuan Souce",
      price: 38,
      dyneScore: 10.2,
      review:
        "OMFG This shit is fucking DELLICIOUS, I would freakin' choke my own sister just for just a chance of getting some. It's like a combinations of Christ and crack.",
      restarauntName: "McDonald's",
      userName: "McDonald's",
      userAvatar: null,
    },
    {
      id: "1",
      dishName: "Eyeballs",
      price: 38,
      dyneScore: 10.2,
      review: "Don't touch ma abols.",
      restarauntName: "Go Away",
      userName: "Eyeballs Johnson",
      userAvatar: null,
    },
  ];
  if (mode === "restaurant") {
    return (
      <React.Fragment>
        <div
          style={{
            zIndex: "15",
          }}
        ></div>
        <div className={classes.ExploreTitle}>
          {withForm
            ? showReviewForm === false
              ? "Latest Reviews"
              : "Add a Review"
            : "Latest Reviews"}
          <div
            className={
              withForm &&
              (showReviewForm
                ? classes.subHeaderCloseBtn
                : classes.subHeaderAddBtn)
            }
            onClick={toggleReviewForm}
          >
            {withForm ? (
              showReviewForm === false ? (
                <div className={classes.reviewBtnp}>
                  <img
                    className={classes.plusIcon}
                    src="../../static/icons/plus.svg"
                  ></img>
                </div>
              ) : (
                <div className={classes.reviewBtnx}>
                  <img
                    className={classes.plusIcon}
                    src="../../static/icons/plus.svg"
                  />
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <ReviewForm
          dishId={dishId}
          token={token}
          show={showReviewForm && withForm}
          close={toggleReviewForm}
        />
        <div className={classes.reviews} component="section">
          {reviewsArr.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div style={{ height: "12px" }}></div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          style={{
            position: "sticky",
            top: "0",
            zIndex: "15",
          }}
        ></div>
        <div className={classes.ExploreTitle}>
          {withForm
            ? showReviewForm === false
              ? "Latest Reviews"
              : "Add a Review"
            : "Latest Reviews"}
          <div
            className={
              withForm &&
              (showReviewForm
                ? classes.subHeaderCloseBtn
                : classes.subHeaderAddBtn)
            }
            onClick={toggleReviewForm}
          >
            {withForm ? (
              showReviewForm === false ? (
                <div className={classes.reviewBtnp}>
                  <img
                    className={classes.plusIcon}
                    src="../../static/icons/plus.svg"
                  ></img>
                </div>
              ) : (
                <div className={classes.reviewBtnx}>
                  <img
                    className={classes.plusIcon}
                    src="../../static/icons/plus.svg"
                  />
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <ReviewForm
          dishId={dishId}
          token={token}
          show={showReviewForm && withForm}
          close={toggleReviewForm}
        />
        <div className={classes.reviews} component="section">
          {reviewsArr.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div style={{ height: "12px" }}></div>
      </React.Fragment>
    );
  }
};

export default connect(
  (state) => ({
    searchTerm: state.DishesReducer.searchTerm,
  }),
  { searchDishes }
)(withStyles(styles)(Reviews));
