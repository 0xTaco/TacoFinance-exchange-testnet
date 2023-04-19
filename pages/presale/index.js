import { Typography, Button, Paper, SvgIcon, Grid, Avatar } from "@material-ui/core";

import { useScrollTo } from 'react-use-window-scroll';

import classes from './presale1.module.css';

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

function Presale({ changeTheme }) {

  function handleNavigate(route) {
    router.push(route);
  }

  const router = useRouter();

  const scrollTo = useScrollTo();

  return (
    <div className={classes.ffContainer}>

      <div className={classes.contentContainerFull}>
        <div className="mew">
            <div className="mew-inner">
            <Typography variant="h1" className="p30">Taco Seed sale</Typography>
                <div className="mew-me">
                <div className="mew1">
                    <div className="lolia">
                        <p className="lolia1">Seed Sale Hardcap:</p>
                        <p className="lolia2">10 ETH</p>
                    </div>
                    <div className="lolia">
                        <p className="lolia1">Token sale rate:</p>
                        <p className="lolia2">would be announced soon</p>
                    </div>
                    <div className="lolia">
                    <p className="lolia1">Contributed:</p>
                        <p className="lolia2">0.0 ETH</p>
                    </div>
                    <div className="lolia">
                    <p className="lolia1">Taco Tokens to Recieve:</p>
                        <p className="lolia2">0.0 ETH</p>
                    </div>
                    <div className="lolia">
                    <p className="lolia1">Discount to presale:</p>
                        <p className="lolia2">15%</p>
                    </div>
                </div>
                <div className="mew2">
                    <input type="number" className="we" placeholder="Enter amount ETH"></input>
                    <p className="lolia2">You are purchasing 0 Taco for 0 ETH</p>
                    <button className="lo1">Coming Soon</button>
                </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Presale;
