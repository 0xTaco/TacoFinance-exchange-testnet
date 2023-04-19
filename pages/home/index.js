import { Typography, Button, Paper, SvgIcon, Grid, Avatar } from "@material-ui/core";

import { useScrollTo } from 'react-use-window-scroll';

import classes from './home.module.css';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function SiteLogo(props) {
  const { color, className } = props;
  return (
    <SvgIcon viewBox="0 0 147.7 17.5" className={className}>
      <g>
      </g>
    </SvgIcon>
  );
}

function Home({ changeTheme }) {

  function handleNavigate(route) {
    router.push(route);
  }

  const router = useRouter();

  const scrollTo = useScrollTo();

  return (
    <div className={classes.ffContainer}>

      <div className={classes.contentContainerFull}>

      {/*<SiteLogo className={classes.appLogo} />*/}

        <Grid container spacing={2} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.preTitle}>0.01% fee</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.mainTitle}>The Trading, Liquidity and Synth
Protocol on Arbitrum</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button className={classes.buttonInfo} onClick={() => scrollTo({ top: 1000, left: 0, behavior: 'smooth' })}>Learn More</Button>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button className={classes.buttonEnter} onClick={() => router.push('/swap')}>Enter App</Button>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button className={classes.buttonInfo} onClick={() => router.push('/presale')}>Participate in Seed Round</Button>
              </Grid>
              <div className="fl1">
              <a className="fl1 p20" href="">
                  <image className="social1"></image>
                </a>
              </div>
              <div className="fl1">
              <a className="fl1 p20" href="https://twitter.com/tacofinancexyz">
                  <image className="social2"></image>
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div id="info" className={classes.contentContainerFullTwo}>

        <div className={classes.floatingSphere}></div>

        <Grid container spacing={3} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.secTitle}>Welcome to Taco Finance</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" className={classes.mainDescription}>
              Taco Finance is a decentralized exchange that has launched on the Arbitrum network with low fees, near 0 slippage on correlated assets and a strong focus on secondary markets for tokenized locks as NFT’s (veToken = lpNFTs).
            </Typography>
            <Typography variant="body2" className={classes.secDescription}></Typography>
            <Typography>
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button className={classes.buttonEnterSingle} onClick={() => router.push('/swap')}>Enter App</Button>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default Home;
