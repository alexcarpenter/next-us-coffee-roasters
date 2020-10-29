import Link from "next/link";
import { Fragment, cloneElement } from "react";
import { paramCase } from "change-case";
import { useTooltip, TooltipPopup } from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import { useTransition, animated } from "react-spring";


animated.TooltipPopup = animated(TooltipPopup);
animated.TooltipContent = animated(TooltipPopup);

function AnimatedTooltip({ children, style, ...rest }) {
  const [trigger, tooltip, isVisible] = useTooltip();
  const transitions = useTransition(isVisible ? tooltip : false, null, {
    from: { opacity: 0, scale: '0.5' },
    enter: { opacity: 1, scale: '1' },
    leave: { opacity: 0, scale: '0.5' },
    config: { mass: 1, tension: 500, friction: 40 },
  });
  return (
    <Fragment>
      {" "}
      {cloneElement(children, trigger)}{" "}
      {transitions.map(
        ({ item: tooltip, props: styles, key }) =>
          tooltip && (
            <animated.TooltipContent
              key={key}
              {...tooltip}
              {...rest}
              style={{
                ...styles,
                ...style
              }}
            />
          ),
      )}{" "}
    </Fragment>
  );
}

const State = ({ name, children }) => {
  const id = paramCase(name);
  const url = `/roasters/${id}`;
  return (
    <Link href={url}>
      <a>
        <AnimatedTooltip
          label={name}
          style={{
            background: "var(--theme-color-foreground)",
            color: "var(--theme-color-background)",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
          }}
        >
          {cloneElement(children, {
            id,
            name,
          })}
        </AnimatedTooltip>
      </a>
    </Link>
  );
};

export default State;
