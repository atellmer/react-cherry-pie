/** @flow */
import styled from 'styled-components';


const Form = styled.form`
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 48px;
  width: 100%;
  height: auto;
  border: 0;
  border-top: 1px solid #c6c6c6;
  background-color: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const TextareaLayout = styled.div`
  flex: 1 0 auto;
`;

const WrapLayout = styled.div`
`;

export {
  Form,
  TextareaLayout,
  WrapLayout
};
