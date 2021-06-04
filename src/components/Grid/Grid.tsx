import React, {FunctionComponent, ReactNode} from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols=1|2|3|4|5|6|7|8|9|10|11|12;
type Spacing= "sm"|"md"|"lg";
const Grid:FunctionComponent<{
    children: ReactNode,
    container?:boolean,                            // ?: optional props
    item?: boolean,
    xs?: Cols,
    sm?: Cols,
    md?: Cols,
    lg?: Cols,
    spacing?: Spacing;
}>=({children, container, item, xs, sm, md, lg, spacing})=>{
    const classNames=cn({
        [styles.Grid_container]: container,
        [styles.Grid_item]:item,
        [styles[`Grid_xs_${xs}`]]: xs,
        [styles[`Grid_sm_${sm}`]]: sm,
        [styles[`Grid_md_${md}`]]: md,
        [styles[`Grid_lg_${lg}`]]: lg, 
        [styles[`Grid_spacing_${spacing}`]]: spacing,
    });
    return <div className={classNames}>{children}</div>;
}
export default Grid;

