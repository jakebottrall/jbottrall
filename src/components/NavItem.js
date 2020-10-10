import React from "react";

import { IconButton, Zoom } from "@material-ui/core";

import { LightTooltip } from "./Feedback/Tooltips";

export default function NavItem(props) {
  const { item } = props;

  return (
    <Zoom in style={{ transitionDelay: item.delay }}>
      <LightTooltip TransitionComponent={Zoom} title={item.title}>
        <IconButton
          to={item.to}
          color="primary"
          href={item.href}
          component={item.component}
          data-testid="nav-link"
          rel={item.type === "external" ? "noopener" : ""}
          target={item.type === "external" ? "_blank" : ""}
        >
          {item.Icon()}
        </IconButton>
      </LightTooltip>
    </Zoom>
  );
}
