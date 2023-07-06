import { styled } from "styled-components";

export const Li = styled.li`
position: relative;
  display: flex;
  gap: 10px;
`;

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  color: #111111;
  font-size: 24px;
  font-weight: 500;
  /* text-transform: capitalize; */
`;

export const NumberSpan = styled.span`
position: absolute;
top: 0px;
left: 200px;

font-family: 'Roboto', sans-serif;
  color: #111111;
  font-size: 24px;
  font-weight: 500;
`;
export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 380px;

  transform: translate(-50%, -50%);

  width: 50px;
  height: 20px;
  font-family: 'Roboto', sans-serif;
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

