import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuLayout from '../components/layouts/MenuLayout';
import styles from '../styles/common';
import actions from '../redux/global/actions';
import { connect } from 'react-redux';
import SponsoredRestaurantsList from '../components/restaurantLists/sponsoredRestaurantsLists';
import DishesList from '../components/restaurantLists/dishLists';
import NotFound from '../components/notFound/notFound';
import WindowResizeListener from 'react-window-size-listener';
import Slide from '@material-ui/core/Slide';
import * as _ from 'lodash';

const {
    toggleFilterMenu,
    updateStoreWithQuery,
    selectFilterTab,
    showHideMenu
} = actions;

function Transition(props) {
    return <Slide direction='down' {...props} />;
}
class ShowCategory extends React.Component {
    static async getInitialProps({ query: { slug, menuName } }) {

        return { slug, menuName }
    }
    state = {
        restaurant: null,
        menuData: null,
        restaurantDishes: null,
    }
    renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: 'rgba(240,242,245,.5)',
            border: '1px solid rgba(0,0,0,.3)'
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    handListItemClick = (evt, selectedIndex) => {
        evt.preventDefault();
        const found = this.state.restaurants[selectedIndex] || { primary: '' };
        if (found.primary) {
            this.setState({ selectedIndex, restaurantName: found.primary });
        } else {
            this.setState({ selectedIndex: '', restaurantName: '' });
        }
    };

    handleSortClick = () => {
        const { toggleFilterMenu, selectFilterTab } = this.props;
        this.setState({ selectedTab: 1 });
        selectFilterTab(1);
        toggleFilterMenu({ drawerOpen: true });
    };

    handleFilterClick = () => {
        const { toggleFilterMenu, selectFilterTab } = this.props;
        this.setState({ selectedTab: 0 });
        selectFilterTab(0);
        toggleFilterMenu({ drawerOpen: true });
    };

    handleToggleMenu = toggleMenu => {
        const { toggleFilterMenu } = this.props;
        toggleFilterMenu({ drawerOpen: toggleMenu });
    };

    handleOverlay = value => {
        this.setState({ overlay: !value });
    };

    handleListItemClick = (evt, index, value) => {
        console.log("valueeeeeeeeeeeeeeeeeeeeeeeee=>", value)
        if (value.type === 'restaurant') {

            window.location.href = `/restaurants/${value.slug}`;
        }
        if (value.type === 'dish') {
            // window.location.href = `/dish-details?id=${value.slug}&name=${value.primary}`;
            // window.location.href = `/dish-details/${value.slug}`;
        }
    };

    handleShowMenu = () => {
        const {
            showHideMenu,
            global: { scrollValue }
        } = this.props;
        if (window.pageYOffset > scrollValue) {
            showHideMenu(false, window.pageYOffset);
        } else {
            showHideMenu(true, window.pageYOffset);
        }
    };

    handleOnScroll = evt => {
        this.handleShowMenu();

    };

    handleReviewSubmit = () => {
        this.setState({ openDialog: true });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: false });
        //window.location.reload(true);
    };
    componentDidMount = () => { 
				const { restaurants, dishes, slug, menuName } = this.props;
				const restaurant = restaurants.filter( restaurant => restaurant.slug === slug);
				const id = restaurant[0].id;
				console.log(restaurant[0], id, 'niv');
        // console.log("idd====>", id);
        console.log("restaurants ====>", restaurants);
        console.log("dishes ====>", dishes);
        let res = restaurants.filter(rec => rec.id == id);
        console.log("restaurant data ======>", res[0].id);
        let restaurantDishes = dishes.filter(record => record.restaurant_id[0]._id == res[0].id);
        console.log("restaurants dishes ====>", restaurantDishes);
        if (res.length) {
            this.setState({
                restaurant: res[0],
                restaurantDishes,
            })
				}
				console.log('here');
    }
    render() {

        const {
            classes,
            id,
            menuData,
						menuName
        } = this.props;
        const { restaurant, restaurantDishes } = this.state;
        console.log("restaurantDishes=====>", restaurantDishes);
        console.log("menu data inside showmenu component", menuData);
        return (
            <MenuLayout
                selectedPageTab={0}
                toggleMenu={this.handleToggleMenu}
                changeOverlay={this.handleOverlay}
                menuName={menuName}
                menuData={menuData}
            >
                <WindowResizeListener
                    onResize={windowSize => {
                        this.setState({ winHeight: windowSize.windowHeight });
                    }}
                />
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    spacing={0}
                    className={classes.dishListTopSpace}
                    style={{ marginTop: '104px' }}
                >

                    <Grid item xs={12}>
                        <DishesList
                            listItemOnClick={this.handleListItemClick}
                            listData={restaurantDishes}
                            listItemClass={classes.restaurantsListItem}
                            changeOverlay={this.handleOverlay}
                            restaurantsName={restaurant ? restaurant.primary : id}
                            // isLoggedIn={isLoggedIn}
                            onReviewSubmit={this.handleReviewSubmit}
                        />
                    </Grid>


                </Grid>
            </MenuLayout>
        );
    }
}

export default connect(
    state => ({
        global: state.global,
        restaurants: state.RestaurantsReducer.restaurants,
        dishes: state.RestaurantsReducer.dishes,
    }),
    {
        toggleFilterMenu,
        updateStoreWithQuery,
        selectFilterTab,
        showHideMenu
    }
)(withStyles(styles)(ShowCategory));
