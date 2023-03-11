import { useState } from "react";
import styled from "styled-components";
import CompletePic from "/assets/icon-complete.svg";

function CardDetails({ expire, setExpire, setCardNumber, cardNumber, setFirstname, firstname, month, setMonth, year, setYear }: { expire: any, setExpire: any, year: any, setYear: any, month: any, setMonth: any, setCardNumber: any, cardNumber: any, setFirstname: any, firstname: any }) {

  const [hide, setHide] = useState<boolean>(false);

  function handleComplete() {
    return (
      setHide(!hide)
    )
  }
  function handleCardNumberChange(e: any) {






    const numbers = e.target.value.replace(/\D/g, "").replace(/\s/g, '') // Remove any existing spaces
      .replace(/(.{4})/g, '$1 ') // Add a space after every 4 characters
      .trim();
    return (
      setCardNumber(numbers)
    )
  }

  function handleFirstnameChange(e: any) {
    const formattedFirstname = e.target.value.replace(/^(\s)|([^a-zA-Z\s])/g, "");
    return (
      setFirstname(formattedFirstname)
    )
  }

  function handleMonthChange(e: any) {
    const formattedMonth = e.target.value.replace(/^([2-9])|(\D)/g, "");
    if (formattedMonth < 13) {
      return setMonth(formattedMonth)
    }
  }

  function handleYearChange(e: any) {
    const formattedYear = e.target.value.replace(/^([0-1])|(\D)/g, "");
    if (formattedYear < 100) {
      return setYear(formattedYear)
    }
  }
  function handlecvcChange(e: any) {
    const formattedCvc = e.target.value.replace(/\D/g, "");
    return setExpire(formattedCvc)

  }
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <CardDetailsWrapper>
      <div >
        {!hide ? <div>
          <Label>
            Cardholder Name
            <Input
              maxLength={50}
              type="text"
              placeholder="e.g. Jane Appleseed"
              name="firstname"
              value={firstname}
              onChange={handleFirstnameChange}
            >

            </Input>
          </Label>
          <Label style={{ marginTop: "20px" }} >
            Card Number
            <Input
              type="text"
              maxLength={19}
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="e.g. 1234 5678 9123 0000"
            >

            </Input>
          </Label>
          <Label style={{ marginTop: "20px" }} >
            Exp. Date (MM/YY) CVC
            <ThreeInputWrapper >
              <FirstAndSecondInput
                onChange={handleMonthChange}
                placeholder="MM"
                value={month}
                name="month"
                maxLength={2}></FirstAndSecondInput>
              <FirstAndSecondInput
                placeholder="YY"
                onChange={handleYearChange}
                value={year}
                name="year"
                maxLength={2}
              ></FirstAndSecondInput>
              <SecondInput
                className="second-input"
                placeholder="e.g. 123"
                onChange={handlecvcChange}
                value={expire}
                name="expire"
                maxLength={3}
              ></SecondInput>
            </ThreeInputWrapper>
          </Label>
        </div> :
          <CardCompleteWrapper>
            <img src={CompletePic} ></img>
            <ThansWord>THANK YOU!</ThansWord>
            <AdditionText>We ve added your card details</AdditionText>
          </CardCompleteWrapper>}
        <Button onClick={handleComplete} >Confirm</Button>
      </div>
    </CardDetailsWrapper>
  )
}


const AdditionText = styled.p`
  font-size: 18px;
  line-height: 22.97px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: rgba(143, 134, 148, 1);
`

const ThansWord = styled.span`
  font-size: 28px;
  line-height: 35.73px;
  letter-spacing: 3.42 px;
  font-family: 'Space Grotesk', sans-serif;;
  font-weight: 500;
  color: rgba(33, 9, 47, 1);
`

const CardCompleteWrapper = styled.div`
  width: 327px;
  margin-top: 25px;
  height: 238px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const SecondInput = styled.input`
  padding-left: 16px;
  margin-top: 10px;
  font-family: 'Space Grotesk', sans-serif;;
  width: 164px;
  height: 45px;
  border: 1px solid #DFDEE0;
  border-radius: 8px;
  :focus {
  outline: none;
  font-size: 18px;
    line-height: 22.97px;
    font-weight: 500;
    font-family: 'Space Grotesk', sans-serif;;
    color: #21092F;
    border: 1px solid rgba(99, 72, 254, 1);

}
  ::placeholder {
    font-size: 18px;
    line-height: 22.97px;
    font-family: 'Space Grotesk', sans-serif;;
    font-weight: 500;
    color: #21092F;
    opacity: 0.25;
  }
`

const FirstAndSecondInput = styled.input`
  padding-left: 16px;
  margin-top: 10px;
  font-family: 'Space Grotesk', sans-serif;;
  width: 72px;
  height: 45px;
  border: 1px solid #DFDEE0;
  border-radius: 8px;
  :focus {
  outline: none;
  font-size: 18px;
    line-height: 22.97px;
    font-family: 'Space Grotesk', sans-serif;;
    font-weight: 500;
    color: #21092F;
    border: 1px solid rgba(99, 72, 254, 1);

}
  ::placeholder {
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;;
    line-height: 22.97px;
    font-weight: 500;
    color: #21092F;
    opacity: 0.25;
  }
`

const ThreeInputWrapper = styled.div`
  width: 327px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 28px;
  width: 327px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 9, 47, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;;
  line-height: 22.97px;
  font-weight: 500;
`

const Input = styled.input`
  padding-left: 16px;
  margin-top: 10px;
  width: 327px;
  font-family: 'Space Grotesk', sans-serif;;
  height: 45px;
  border: 1px solid #DFDEE0;
  border-radius: 8px;
  :focus {
  outline: none;
  font-size: 18px;
    line-height: 22.97px;
    text-transform: uppercase;
    font-weight: 500;
    color: #21092F;
    border: 1px solid rgba(99, 72, 254, 1);

}
  ::placeholder {
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;;
    line-height: 22.97px;
    font-weight: 500;
    color: #21092F;
    opacity: 0.25;
  }
`

const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Space Grotesk', sans-serif;;
  font-weight: 500;
  line-height: 15.31px;
  letter-spacing: 2px;
  color: #21092F;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const CardDetailsWrapper = styled.div`
  width: 327px;
  height: 328px;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 331px;
  margin-left: 24px;
`

export default CardDetails;
