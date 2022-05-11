import React from "react";
import { ApproachProps } from "./Approach";
import * as A from "./Approach.styled"

export interface ApproachItemProps {
    title?: string,
    subTitle?: string,
}

export const ApproachItem = (props: ApproachItemProps) => {
    return (
        <A.Item>
            <A.ItemTitle>{props.title}</A.ItemTitle>
            <A.ItemSubTitle>{props.subTitle}</A.ItemSubTitle>
        </A.Item>
    )
}
