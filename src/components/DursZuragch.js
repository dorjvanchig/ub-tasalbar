import React from "react";
import { Icon } from "@iconify/react";

export default function DursZuragch(props) {
    return (
        <Icon
            {...props}
            className={`${'text-[1.5rem]'} ${props.className && props.className}`}
            style={props.style && props.style}
            onClick={props.onClick ? props.onClick : undefined}
        />
    );
}
