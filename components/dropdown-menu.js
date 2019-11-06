import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const StyledDropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  background: red;
`;

const DropdownToggler = styled.div`
  cursor: pointer;
  background: green;
`;

const DropdownList = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: ${props => (props.isOpen ? "block" : "none")};
  background: yellow;
`;

const DropdownMenu = props => {
  let dropdownToggler = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onClickDropdownToggler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickDocument = e => {
    if (isDropdownOpen && !dropdownToggler.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickDocument, false);

    return () => {
      document.removeEventListener("click", onClickDocument, false);
    };
  });

  return (
    <StyledDropdownMenu ref={dropdownToggler}>
      <DropdownToggler onClick={onClickDropdownToggler}>
        {props.title}
      </DropdownToggler>

      <DropdownList isOpen={isDropdownOpen}>
        {props.items.map(item => (
          <div onClick={onClickDropdownToggler} key={item.title}>
            {item.title}
          </div>
        ))}
      </DropdownList>
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
