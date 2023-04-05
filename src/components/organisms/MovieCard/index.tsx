import {Image, Text, View} from 'react-native';
import React from 'react';
import MAProgressCircle from '../../molecules/MAProgressCircle';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';
import MARateChip from '../../molecules/MARateChip';
import {IMAGE_URL} from '../../../configs';

interface Props {
  posterPath: string;
  popularity: number;
  index: number;
  originalTitle: string;
  title: string;
  releaseDate: string;
  originalLanguage: string;
  adult: boolean;
  overview: string;
}

const MovieCard = ({
  posterPath,
  popularity,
  index,
  originalTitle,
  title,
  releaseDate,
  originalLanguage,
  adult,
  overview,
}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={{uri: `${IMAGE_URL}${posterPath}`}}
          style={styles.bannerImage}
        />
        <View style={styles.progressCircleContainer}>
          <MAProgressCircle
            fill={popularity > 100 ? 100 : Math.trunc(popularity)}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <MAText type={'H5'}>{`#${index + 1} ${originalTitle}`}</MAText>
        <MAText type={'H6'} color={theme.colors.grey2} italic>
          {`(${title})`}
        </MAText>
        <View style={styles.innerContentContainer}>
          <MAText type={'body2'} color={theme.colors.grey2}>
            {releaseDate}
          </MAText>
          <MAText
            type={'body2'}
            color={theme.colors.grey2}
            style={styles.languageTag}>
            {`(${
              originalLanguage.charAt(0).toUpperCase() +
              originalLanguage.slice(1)
            })`}
          </MAText>
          <Text style={styles.divider}>{'\u26AB'}</Text>
          <MARateChip adult={adult} />
        </View>
        <MAText
          type={'body2'}
          color={theme.colors.grey2}
          numberOfLines={4}
          style={styles.description}>
          {overview}
        </MAText>
      </View>
    </View>
  );
};

export default MovieCard;
