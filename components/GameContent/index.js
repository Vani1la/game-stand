import React from "react";
import { useSelector } from "react-redux";
import Slider from "../Slider";
import Image from "next/image";
import * as Styles from "./styles";

const GameContent = () => {
  const currentGame = useSelector((state) => state.currentGame);
  const screenshots = useSelector((state) => state.screenshots);

  return (
    <Styles.container>
      <Styles.title>{currentGame.name}</Styles.title>
      <Styles.url href={currentGame.website}>{currentGame.website}</Styles.url>
      <Styles.sliderWrapper>
        <Slider width={480} height={240}>
          {screenshots.map(({ id, image }) => (
            <Image src={image} key={id} width={480} height={240} />
          ))}
        </Slider>
      </Styles.sliderWrapper>
      <Styles.platformsContainer>
        {currentGame.platforms?.map(({ platform }, index) => (
          <Styles.platform key={platform.id} ml={20}>
            {platform.name}
          </Styles.platform>
        ))}
      </Styles.platformsContainer>
      <Styles.aboutTitle>Описание</Styles.aboutTitle>
      <Styles.aboutText
        dangerouslySetInnerHTML={{ __html: currentGame.description }}
      />
    </Styles.container>
  );
};

export default GameContent;
