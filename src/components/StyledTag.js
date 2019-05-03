import tag from 'clean-tag';
import styled from 'styled-components';
import { background, backgroundColor, borderRadius, color, space } from 'styled-system';

/** A loading spinner using SVG + css animation. */
const StyledTag = styled(tag.span)`
  border-radius: 4px;
  padding: 8px 6px;
  font-size: 8px;
  letter-spacing: 0.8px;
  line-height: 12px;
  text-transform: uppercase;
  background: #F0F2F5;
  color: #71757A;

  ${background}
  ${backgroundColor}
  ${borderRadius}
  ${color}
  ${space}
`;

/** @component */
export default StyledTag;
