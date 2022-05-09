import React from "react";
import * as S from "./KeyMessage.styled";

export interface HeaderProps {
    color?: string;
}

export const KeyMessage = (props: HeaderProps) => {
    return (
        <div>
            <S.FooterContainer>
                <S.Text className="xconts">
                    Specialising in diversity, we convey meaningful vision through variety of creative and impacful visual solution and support you in your projects.
                </S.Text>
            </S.FooterContainer>
        </div>
    );
};
