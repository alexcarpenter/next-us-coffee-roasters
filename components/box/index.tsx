import clsx from "clsx";
import styles from "./box.module.css";

const SpacingScale = [1, 2, 3];

interface BoxProps {
  mt: typeof SpacingScale[number];
  mr: typeof SpacingScale[number];
  mb: typeof SpacingScale[number];
  ml: typeof SpacingScale[number];
}

const Box: React.FC<BoxProps> = ({ mt, mr, mb, ml, children }) => {
  const marginTop = `mt${mt}`;
  const marginRight = `mr${mr}`;
  const marginBottom = `mr${mb}`;
  const marginLeft = `mr${ml}`;
  return (
    <div
      className={clsx({
        [styles[marginTop]]: mt,
        [styles[marginRight]]: mr,
        [styles[marginBottom]]: mb,
        [styles[marginLeft]]: ml,
      })}
    >
      {children}
    </div>
  );
};

export default Box;
