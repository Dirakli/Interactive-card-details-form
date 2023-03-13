import styled from "styled-components";

function CardBackside({expire}: {expire: any}) {
    return (
        <BacksideWrapper>
            <BlackLine></BlackLine>
            <SilverLine>
                <CvcCode>{expire ? expire : "000"}</CvcCode>
            </SilverLine>
        </BacksideWrapper>
    )
}

 const CvcCode = styled.span`
   color: rgba(255, 255, 255, 1);
   font-size: 9px;
   line-height: 11.48px;
   font-family: 'Space Grotesk', sans-serif;;
   letter-spacing: 1.29px;
   font-weight: 500;

   @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 17.86px;
    letter-spacing: 2px;
   }
 `   

 const SilverLine = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding-right: 9px;
   width: 230.98px;
   height: 29.74px;
   border-radius: 4px;
   background-color: rgba(173, 181, 190, 1);
   margin-top: 15.68px;

   @media (min-width: 1200px) {
    width: 361px;
    height: 38px;
    margin-top: 24px;
   }
 `

 const BlackLine = styled.div`
   width: 286px;
   height: 34.6px;
   background-color: rgba(47, 47, 47, 1);
   margin-top: 32px;
   
   @media (min-width: 1200px) {
    width: 100%;
    height: 54px;
    margin-top: 23px;
   }
 `

 const BacksideWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   width: 286px;
   height: 157px;
   border: none;
   border-radius: 6px;
   background: linear-gradient(168.73deg, #FFFFFF 5%, #D2D3D9 91.69%);
   margin-left: 73px;
   margin-top: 32px;

   @media (min-width: 1200px) {
    width: 447px;
    height: 245px;
    margin-top: 380px;
    margin-left: 200px;
   }
 `

export default CardBackside;