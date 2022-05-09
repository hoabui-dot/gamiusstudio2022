import React from "react";
import * as S from "./ClientSays.styled";
import Image from "next/image";
import {SectionTitle} from "../SectionTitle/SectionTitle"
import {ClientSaysData} from "../../utils/DataConfig"

export interface ClientSaysProps {
  color?: string;
}

export const ClientSays = (props: ClientSaysProps) => {
  const handleWidthImage = () => {
    console.log(123);
    
  }

  return (
    <S.ClientSays>
      <SectionTitle title="Our customers"/>
        <S.Slides>
            {ClientSaysData.map((data, index) => (
              <S.Slide key={index} className={"h-[54px] w-[160px] relative"}>
                <Image src={data.image} layout='fill' objectFit="contain" alt="ClientSays"/>
              </S.Slide>
            ))}
        </S.Slides>
    </S.ClientSays>
  );
};
