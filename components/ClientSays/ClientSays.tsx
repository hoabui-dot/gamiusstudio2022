import React from "react";
import * as S from "./ClientSays.styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import image1 from "../../public/img/hedima.png"
import CSS from "csstype"
import styled from "styled-components";
import {ClientSaysData} from "../../utils/DataConfig"

export interface ClientSaysProps {
  color?: string;
}

export const ClientSays = (props: ClientSaysProps) => {
  return (
    <div className="clientSays">
      <SectionTitle title="Our customers"/>
        <S.Slides>
            {ClientSaysData.map((data, index) => (
                <S.SizeImage key={index}>
                    <Image src={data.image} alt="ClientSays" width={16} height={9}/>
                </S.SizeImage>
            ))}
        </S.Slides>
    </div>
  );
};
