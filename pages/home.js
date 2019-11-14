import React, { Component } from 'react'
import { connect } from 'react-redux'
import WindowResizeListener from "react-window-size-listener";
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/common';
import RestaurantLayout from '../components/layouts/RestaurantLayout';
import { Grid } from '@material-ui/core';
import { reviewAPI } from '../services/reviewAPI';
import { css } from 'emotion';
import SectionHeaders from '../components/common/SectionHeaders';
import NewDishCard from '../components/common/NewDishCard';
import RestaurantsCard from '../components/common/RestaurantsCard';
import { restaurantAPI } from '../services/restaurantAPI';
const { API_IMAGE_URL } = require('../utils/config');
class Home extends Component {
    state = {
        isHomePage: true,
        data: [],
        dishesWithTag: []

    }
    handleOverlay = value => {
        this.setState({ overlay: !value });
    };
    handleToggleMenu = toggleMenu => {
        const { toggleFilterMenu } = this.props;
        toggleFilterMenu({ drawerOpen: toggleMenu });
    };
    componentDidMount = () => {
        Promise.all([reviewAPI.getLatestReview(), restaurantAPI.getDishesWithTags()]).then(
            res => this.setState({
                data: res
            }))

    }
    render() {

        const { currentRestaurent, classes } = this.props;
        let avatar = '/static/imgs/image-not-found-dark.png';
        console.log("curent restaurents", currentRestaurent && currentRestaurent[0]);

        const { isHomePage, dishesWithTag } = this.state;
        console.log("data===>", this.state.data);
        console.log("dishes ====>", dishesWithTag);
        return <React.Fragment>
            <RestaurantLayout
                selectedPageTab={0}
                toggleMenu={this.handleToggleMenu}
                changeOverlay={this.handleOverlay}
                isHomePage={isHomePage}
            >
                <WindowResizeListener
                    onResize={windowSize => {
                        this.setState({ winHeight: windowSize.windowHeight });
                    }}
                />
                {/* main container */}
                <div style={{
                    margin: "5px 10px 5px 10px",

                }}>
                    <Grid container direction="column">
                        {/* best around you container */}
                        <Grid item container direction="column">
                            {this.state.data.length > 0 && <SectionHeaders text="best around you" value={this.state.data[1].length} />}
                            {this.state.data.length > 0 && <Grid container direction="row">
                                <div className={
                                    css`
                                    display:flex;
                                    flex-direction:row;
                                    overflow-x: scroll;
                                    width:100%;
                                    margin-bottom:20px;
                                    padding-bottom:20px;
                                    // height:200px;

                                    `

                                }>


                                    {this.state.data[1].map(rec => <NewDishCard classes={classes}

                                        name={rec.tag} des={rec.dishes.length + " dishes"}
                                        url={API_IMAGE_URL + "/assets/images/tags/" + rec.dishes[0].tag.url} />)}

                                </div>
                            </Grid>}
                            {<SectionHeaders text="Resturants around you" value="45" />}
                            <Grid item container direction="row"> {[1, 2, 3].map(rec => <RestaurantsCard />)}</Grid>
                            {this.state.data.length && <SectionHeaders text="Lastest reviews" value={this.state.data[0].length} />}
                            {this.state.data.length && <Grid container direction="row">
                                <div className={
                                    css`
                                    display:flex;
                                    flex-direction:row;
                                    overflow-x: scroll;
                                    width:100%;
                                    margin-bottom:20px;
                                    padding-bottom:20px;
                                    // height:200px;

                                    `

                                }>


                                    {this.state.data[0].map(rec => <NewDishCard

                                        name={rec.product.name}
                                        des={rec.product.restaurant.name}
                                        review={rec.ratings}
                                        url={API_IMAGE_URL + "/assets/images/dishes/" + rec.product.pimage.name + "/" + rec.product.pimage.path}
                                        classes={classes} />)}

                                </div>
                            </Grid>}
                            {<SectionHeaders text="top 10" />}
                            <Grid container direction="row">
                                <div className={
                                    css`
                                    display:flex;
                                    flex-direction:row;
                                    overflow-x: scroll;
                                    width:100%;
                                    margin-bottom:20px;
                                    padding-bottom:20px;
                                    // height:200px;

                                    `

                                }>


                                    {[1, 2, 4, 3, 4, "d", 2, 3, 4, 3, 2].map(rec => <NewDishCard

                                        name="DISH FULL NAME"
                                        des="Meesa"
                                        review="2.5"
                                        classes={classes} />)}

                                </div>
                            </Grid>


                        </Grid>



                    </Grid>
                </div>


            </RestaurantLayout>
        </React.Fragment >


    }

}


export default connect(state => ({
    global: state.global,
    restaurants: state.RestaurantsReducer.restaurants,
    dishes: state.RestaurantsReducer.dishes,
    currentRestaurent: state.RestaurantsReducer.currentRestaurent,
}),
    {
        // toggleFilterMenu,
        // updateStoreWithQuery,
        // selectFilterTab,
        // showHideMenu
    })(withStyles(styles)(Home))