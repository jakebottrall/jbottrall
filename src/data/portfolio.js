import React from "react";

import { Link } from "@material-ui/core";

import argusvision from "../img/argusvision.png";
import armax from "../img/armax.png";
import awes from "../img/awes.png";
import bidbox from "../img/bidbox.png";
import daciatech from "../img/daciatech.png";
import eim from "../img/eim.png";
import ghost from "../img/ghost.svg";
import jbottrall from "../img/jbottrall.png";
import less from "../img/less.svg";
import material from "../img/material.svg";
import mongo from "../img/mongo.svg";
import nginx from "../img/nginx.svg";
import nodeJs from "../img/node-js.svg";
import react from "../img/react.svg";
import summitseekers from "../img/summitseekers.png";
import ubuntu from "../img/ubuntu.svg";

export const data = [
  {
    screenshot: jbottrall,
    title: "jakebottrall.com",
    url: "https://jakebottrall.com",
    github: "https://github.com/jakebottrall/jbottrall",
    description: function () {
      return (
        <span>
          Meta right? This is my personal website to allow people to get in
          contact with me and display my portfolio.
        </span>
      );
    },
    stack: [
      { name: "Material-UI", logo: material },
      { name: "React", logo: react },
      { name: "Node.js", logo: nodeJs },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: armax,
    title: "Armax",
    description: function () {
      return (
        <span>
          Started in late 2018, Armax was developed to be an in house web app to
          manage incoming and outgoing deliveries for{" "}
          <Link href="https://argusvision.com.au" taget="_blank">
            Argus Vision
          </Link>
          . The original stack was Bootstrap, EJS, Node.js and MongoDB. In early
          2019 the frontend was redeveloped with React and Material-UI.
          <br />
          <br />
          Since it's creation, features to manage projects, budgets, employee
          time tracking and inventory have been added, whilst expanding on the
          original incoming/outgoing feature set.
          <br />
          <br />
          To date I am the sole web developer/designer to work on Armax.
        </span>
      );
    },
    stack: [
      { name: "Material-UI", logo: material },
      { name: "React", logo: react },
      { name: "Node.js", logo: nodeJs },
      { name: "MongoDB", logo: mongo },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: argusvision,
    title: "argusvision.com.au",
    url: "https://argusvision.com.au",
    description: function () {
      return (
        <span>
          <Link href="https://argusvision.com.au" taget="_blank">
            Argus Vision (Aus) Pty Ltd{" "}
          </Link>
          is a window manufacturer on the Gold Coast, Australia. I've had the
          pleasure of working with Argus for a number of years now. This is
          their public website developed with a custom ghost handlebars theme.
        </span>
      );
    },
    stack: [
      { name: "less", logo: less },
      { name: "Ghost", logo: ghost },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: eim,
    title: "EIM",
    description: function () {
      return (
        <span>
          Started in mid 2018,
          <Link href="https://eim.edu.au" taget="_blank">
            {" "}
            EIM Traning Pty Ltd{" "}
          </Link>
          commisioned me to develop a basic CRM tool. The idea being that
          everything on the market didn't function the way the CEO wanted it to.
          The original stack was Bootstrap, EJS, Node.js and MongoDB. In early
          2019 the frontend was redeveloped with React and Materialize.
          <br />
          <br />
          Late 2019
          <Link href="https://eim.edu.au" taget="_blank">
            {" "}
            EIM Training{" "}
          </Link>{" "}
          commisioned me to add a component named "Logbot" which tracks
          personnel and students comings and goings at their campuses, for
          government compliance.
        </span>
      );
    },
    stack: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodeJs },
      { name: "MongoDB", logo: mongo },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: daciatech,
    title: "daciatech.com",
    url: "https://daciatech.com",
    github: "https://github.com/jakebottrall/dacia-ghost-theme",
    description: function () {
      return (
        <span>
          <Link href="https://daciatech.com" taget="_blank">
            Dacia Tech{" "}
          </Link>
          is the business I operate under as a freelancer. A simple business
          site built with a custom ghost handlebars theme.
        </span>
      );
    },
    stack: [
      { name: "less", logo: less },
      { name: "Ghost", logo: ghost },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: bidbox,
    title: "BidBox",
    url: "https://bidbox.awes.com.au",
    description: function () {
      return (
        <span>
          <Link href="https://bidbox.awes.com.au" taget="_blank">
            BidBox{" "}
          </Link>{" "}
          is an estimation platform developed for{" "}
          <Link href="https://awes.com.au" taget="_blank">
            AWES (Aluminium Window Estimation Services)
          </Link>
          . AWES commissioned me to develop the web app in the beginning of
          2020. The platform aims to link window manufacturers and installers
          with experienced estimators.
          <br />
          <br />
          AWES wanted the platform to contain everything to facilitate this
          exchange including, communication, cloud file storage and
          RDP/Teamviewer connections operated within the browser.
        </span>
      );
    },
    stack: [
      { name: "Material-UI", logo: material },
      { name: "React", logo: react },
      { name: "Node.js", logo: nodeJs },
      { name: "MongoDB", logo: mongo },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: awes,
    title: "awes.com.au",
    url: "https://awes.com.au",
    description: function () {
      return (
        <span>
          <Link href="https://awes.com.au" taget="_blank">
            AWES (Aluminium Estimating Services{" "}
          </Link>
          has been a client since the start of 2020, based in Brisbane,
          Australia. Their focus is to provide premium window estiamtion
          services to window manufacturers and installers. This is their public
          website developed with a custom ghost handlebars theme.
        </span>
      );
    },
    stack: [
      { name: "less", logo: less },
      { name: "Ghost", logo: ghost },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
  {
    screenshot: summitseekers,
    title: "summitseekers.com.au",
    url: "https://summitseekers.com.au",
    description: function () {
      return (
        <span>
          <Link href="https://summitseekers.com.au" taget="_blank">
            Summit Seekers{" "}
          </Link>
          is a personal training business on the Gold Coast, Australia. Their
          focus is to help people achieve their fitness goals, with an emphasis
          on hiking/trekking. This is their public website developed with a
          custom ghost handlebars theme.
        </span>
      );
    },
    stack: [
      { name: "less", logo: less },
      { name: "Ghost", logo: ghost },
      { name: "Nginx", logo: nginx },
      { name: "Ubuntu 18.04 LTS", logo: ubuntu },
    ],
  },
];
