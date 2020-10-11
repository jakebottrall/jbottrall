import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    borderRadius: 0,
    fontWeight: 900,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}))(Tooltip);
