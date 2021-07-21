import styled from "styled-components";
import ArrowIcon from "../images/icons8-fleche.png";
import { Link } from "react-router-dom";

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  :hover {
    opacity: 0.5;
  }
`;

export default function Arrow() {
  return (
    <Link to="/">
      <Icon src={ArrowIcon} />
    </Link>
  );
}
