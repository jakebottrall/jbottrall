import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    fontWeight: 900,
  },
}))(Tooltip);
