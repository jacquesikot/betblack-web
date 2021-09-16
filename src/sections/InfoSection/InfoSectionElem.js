import styled from 'styled-components';
import { IoIosArrowDropright } from 'react-icons/io';
import Image from 'next/image';

const colors = {
  primary: '#100A39',
  primaryDark: '#241F47',
  secondary: '#0467FB',
  white: '#fff',
  dark: '#1c2237',
  veryDark: '#101522',
  light: '#EDEBFF',
  grey: '#a9b3c1',
  pink: '#FF628D',
};

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  padding: 0 100px;
  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const InfoSec = styled.div`
  color: ${colors.white};
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  flex: 1;
  display: flex;
  max-width: 43%;
  flex-basis: 50%;
  @media screen and (max-width: 414px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  margin-top: 80px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    max-width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? colors.grey : colors.pink)};
  font-size: 20px;
  line-height: 16px;
  margin-bottom: 30px;
`;

export const Img = styled(Image)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  /* width: 70%; */
  color: ${({ lightText }) => (lightText ? colors.light : colors.primary)};
  @media screen and (max-width: 960px) {
    font-size: 39px;
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* width: 70%; */
  margin-bottom: 35px;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 30px;
  color: '#fff';
  @media screen and (max-width: 960px) {
    font-size: 22px;
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const FirstText = styled.p`
  width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: ${colors.dark};
  background: ${colors.white};
  z-index: 100;
  position: absolute;
  border-radius: 10px;
  font-family: 'Product Sans Black Regular';
  box-shadow: 0 4px 8px 0 rgba(169, 179, 193, 0.2),
    0 6px 20px 0 rgba(169, 179, 193, 0.19);
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 414px) {
    justify-content: center;
  }
`;
export const Action = styled.p`
  font-size: 18px;
  color: ${colors.primary};
`;
export const ActionIcon = styled(IoIosArrowDropright)`
  width: 40px;
  color: ${colors.primary};
`;
