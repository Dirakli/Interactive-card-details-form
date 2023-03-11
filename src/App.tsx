import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import PurpleImage from "/public/assets/bg-main-mobile.png"
import CardBackside from "./components/CardBackside"
import CardFrontside from "./components/CardFrontside"
import CardDetails from "./components/CardDetails"
import { useState } from "react"

function App() {
	const [cardNumber, setCardNumber] = useState<any>("");
	const [firstname, setFirstname] = useState<any>("");
	const [month, setMonth] = useState<any>("");
	const [year, setYear] = useState<any>("");
	const [expire, setExpire] = useState<any>("");

	return (
		<MainWrapper>
			<PurpleDiv Image={PurpleImage} ></PurpleDiv>
			<CardBackside expire={expire}/>
			<CardFrontside cardNumber={cardNumber} firstname={firstname} month={month} year={year} />
			<CardDetails
				cardNumber={cardNumber}
				setCardNumber={setCardNumber}
				setFirstname={setFirstname}
				firstname={firstname}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				expire={expire}
				setExpire={setExpire}
			/>
		</MainWrapper>
	)
}

const PurpleDiv = styled.div<any>`
  width: 375px;
  position: absolute;
  height: 240px;
  background-image: url(${(props) => props.Image});
`

const MainWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  height: 704px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}
`

export default App;
