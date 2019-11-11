import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { css } from "emotion";




export default function RestaurantsCard() {
    return (

        <Grid xs={12} sm={12} md={5} lg={5}>
            <div className={
                css`
                    background: #FFFFFF;
                    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
                    border-radius: 2px;
                    margin-top:10px;
                    padding-bottom:10px;
                    margin-bottom:20px;
                    margin-right:10px;
                    `
            }>
                <Grid container direction="row">
                    <Grid item
                        container
                        direction="column"
                        xs={8}
                        sm={8}
                        md={8}
                        lg={10}
                    >
                        <Grid item>
                            <Typography
                                className={
                                    css`
                                                            font-family: Bebas Neue;
                                                            font-size: 20px;
                                                            line-height: 24px;
                                                            display: flex;
                                                            align-items: center;
                                                            margin: 10px 0px 0px 10px;
                                                            color: #4A4A4A;
                                                         `
                                }

                            >
                                MEESA

                             </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={css`
                                                     font-family: Lato;
                                                     font-style: normal;
                                                     font-weight: normal;
                                                     font-size: 14px;
                                                     line-height: 16px;
                                                     /* or 114% */
                                                     margin: 10px 0px 0px 10px;
                                                     display: flex;
                                                     align-items: center;
                                                     
                                                     color: #838383;
                                                     `}>
                                lorem Street 16, Tel-Aviv
                                Kfar Shmarijahu, 18
                                                     </Typography>

                        </Grid>

                    </Grid>
                    <Grid item
                        container
                        direction="column"
                        xs={4}
                        sm={4}
                        md={4}
                        lg={2}
                    >
                        <Grid item>
                            <Typography className={css`
                                                     font-family: Lato;
                                                     font-style: normal;
                                                     font-weight: normal;
                                                     font-size: 12px;
                                                     line-height: 28px;
                                                     /* identical to box height, or 233% */
                                                     
                                                     display: flex;
                                                     align-items: center;
                                                     margin: 5px 0px 0px 0px;
                                                     float:right;
                                                     padding-right:10px;
                                                     color: #999999;
                                                     `}>
                                {true ? "closed :(" : ""}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={css`
                                                     font-family: Lato;
                                                     font-style: normal;
                                                     font-weight: normal;
                                                     font-size: 12px;
                                                     line-height: 20px;
                                                     margin: 30px 0px 0px 0px;
                                                     float:right;
                                                     padding-right:10px;
                                                    
                                                     /* or 167% */
                                                     
                                                     
                                                     color: #E53935;
                                                     `}>
                                13 Review
                            </Typography>

                        </Grid>

                    </Grid>

                </Grid>

            </div>
        </Grid>

    )
}