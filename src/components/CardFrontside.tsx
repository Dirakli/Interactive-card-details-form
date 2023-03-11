import styled from "styled-components";
import frontsideImage from "/assets/bg-card-front.png";

type FrontsideWrapperProps = {
    background: string;
}

function CardFrontside({cardNumber, firstname}: {cardNumber: any, firstname: any}) {
    return (
        <FrontsideWrapper background={frontsideImage} >
            <TwoRoundWrapper>
                <BigRound></BigRound>
                <SmallRound></SmallRound>
            </TwoRoundWrapper>
            <SixteenDigits>
            {cardNumber}
            </SixteenDigits>
            <PersonNameAndDate>
                <PersonName>{firstname}</PersonName>
                <Date>00/00</Date>
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
`

const PersonName = styled.span`
  font-size: 9px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 11.48px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
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
`

const SmallRound = styled.div`
  width: 13.58px;
  height: 13.5px;
  border: 1px solid white;
  border-radius: 50%;
`
const BigRound = styled.div`
  width: 30.19px;
  height: 30px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 50%;
`

const TwoRoundWrapper = styled.div`
  width: 54px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17.6px;
  margin-left: 19px;
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
`

export default CardFrontside;