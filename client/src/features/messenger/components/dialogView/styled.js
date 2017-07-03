/** @flow */
import styled from 'styled-components';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';

import * as vars from '@/vars';

const TextClipExtend = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-binding: url('/examples/text-overflow.xml#ellipsis');
`;

const IconExtend = styled.svg`
  width: 14px !important;
  height: 14px !important;
  margin-right: 8px;
  color: ${vars.primaryColorSecond} !important;

  @media (min-width: ${vars.phone}px) {
    color: #fff !important;
  }
`;

const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${vars.hintColorDivider};
  background-color: ${props => props.isActive ? vars.selectedDialogColorPhone : '#fff'};
  cursor: pointer;

  @media (min-width: ${vars.phone}px) {
    border-bottom: none;
    background-color: ${props => props.isActive ? vars.selectedDialogColorDesktop : vars.primaryColorSecond};
  }
`;

const AvatarLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: ${props => props.isOnline ? vars.onlineStatusColor : vars.offlineStatusColor};

    @media (min-width: ${vars.phone}px) {
      top: 0;
      right: 0;
      width: 6px;
      height: 6px;
      border: none;
    }
  }
`;

const MessageLayout = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: calc(100% - 48px);
`;

const MessageStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-left: 8px;
  font-size: calc(14 / ${vars.baseFontSize} * 1em);
`;

const NameStyled = TextClipExtend.extend`
  margin-bottom: 4px;
  max-width: 100%;
  color: ${vars.primaryColorText};
  text-transform: capitalize;
  font-weight: 500;

  @media (min-width: ${vars.phone}px) {
    color: #fff;
  }
`;

const TextStyled = TextClipExtend.extend`
  color: ${vars.hintColorText};
  max-width: 100%;
  font-weight: 300;

  @media (min-width: ${vars.phone}px) {
    color: #fff;
  }
`;

const IndicatorsStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

const ActionDoneIconStyled = IconExtend.withComponent(ActionDone);

const ActionDoneAllIconStyled = IconExtend.withComponent(ActionDoneAll);

const BadgeLayout = styled.div`
  position: relative;
  top: -2px;
  margin-right: 8px;
`;

const TimestampStyled = styled.div`
  font-size: calc(12 / ${vars.baseFontSize} * 1em);
  font-weight: 300;
  color: ${vars.hintColorText};

  @media (min-width: ${vars.phone}px) {
    color: #fff;
  }
`;

export {
  Root,
  AvatarLayout,
  MessageLayout,
  MessageStyled,
  NameStyled,
  TextStyled,
  IndicatorsStyled,
  ActionDoneIconStyled,
  ActionDoneAllIconStyled,
  BadgeLayout,
  TimestampStyled
};
