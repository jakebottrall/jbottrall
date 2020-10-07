import React from "react";

import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
          rel={item.type === "external" ? "noopener" : ""}
          target={item.type === "external" ? "_blank" : ""}
        >
          {item.Icon()}
        </IconButton>
      </LightTooltip>
    </Zoom>
  );
}

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    fontWeight: 900,
  },
}))(Tooltip);
