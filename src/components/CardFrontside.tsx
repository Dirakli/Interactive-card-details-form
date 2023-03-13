import styled from "styled-components";
import frontsideImage from "/assets/bg-card-front.png";

type FrontsideWrapperProps = {
  background: string;
}

function CardFrontside({ cardNumber, firstname, month, year }: { year: any, month: any, cardNumber: any, firstname: any }) {
  return (
    <FrontsideWrapper background={frontsideImage} >
      <TwoRoundWrapper>
        <BigRound></BigRound>
        <SmallRound></SmallRound>
      </TwoRoundWrapper>
      <SixteenDigits>
        {cardNumber ? cardNumber : "0000 0000 0000 0000"}
      </SixteenDigits>
      <PersonNameAndDate>
        <PersonName>{firstname ? firstname : "Jane Appleseed"}</PersonName>
        <Date>{month ? month : "00"}/{year ? year : "00"}</Date>
      </PersonNameAndDate>
    </FrontsideWrapper>
  )
}

const Date = styled.span`
  font-size: 9px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 11.48px;
  letter-spacing: 1.29px;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 17.86px;
    letter-spacing: 2px;
  }
`

const PersonName = styled.span`
  font-size: 9px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 11.48px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 17.86px;
    letter-spacing: 2px;
  }
`

const PersonNameAndDate = styled.div`
  width: 245.11px;
  height: 12px;
  position: absolute;
  margin-top: 124.6px;
  margin-left: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    width: 383.14px;
    margin-top: 200.5px;
    margin-left: 32px;
  }
`

const SixteenDigits = styled.div`
  position: absolute;
  margin-top: 84.6px;
  margin-left: 19px;
  height: 23px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  line-height: 22.97px;
  letter-spacing: 2.2px;

  @media (min-width: 1200px) {
    margin-top: 139px;
    margin-left: 32px;
    font-size: 28px;
    line-height: 35.73px;
    letter-spacing: 3.42px;
  }
`

const SmallRound = styled.div`
  width: 13.58px;
  height: 13.5px;
  border: 1px solid white;
  border-radius: 50%;

  @media (min-width: 1200px) {
    width: 21.13px;
    height: 21.11px;
  }
`
const BigRound = styled.div`
  width: 30.19px;
  height: 30px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 50%;

  @media (min-width: 1200px) {
    width: 46.96px;
    height: 47px;
  }
`

const TwoRoundWrapper = styled.div`
  width: 54px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17.6px;
  margin-left: 19px;
  
  @media (min-width: 1200px) {
    width: 84px;
    height: 47px;
    margin-top: 28px;
    margin-left: 32px;
  }
`

const FrontsideWrapper = styled.div<FrontsideWrapperProps>`
  position: absolute;
  margin-top: 144px;
  margin-left: 17px;
  width: 285px;
  height: 156.21px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1200px) {
    width: 447px;
    height: 245px;
    margin-top: 100px;
    margin-left: 120px;
  }
`

export default CardFrontside;