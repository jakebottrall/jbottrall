import PropTypes from "prop-types";
import React from "react";

import { IconButton, Zoom } from "@material-ui/core";

import { LightTooltip } from "./feedback/Tooltips";

export default function NavItem(props) {
  const { to, href, component, type, delay, title, Icon } = props;

  return (
    <Zoom in style={{ transitionDelay: delay }}>
      <LightTooltip TransitionComponent={Zoom} title={title}>
        <IconButton
          to={to}
          href={href}
          color="primary"
          component={component}
          data-testid="nav-link"
          rel={type === "external" ? "noopener" : ""}
          target={type === "external" ? "_blank" : ""}
        >
          {Icon()}
        </IconButton>
      </LightTooltip>
    </Zoom>
  );
}

NavItem.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
