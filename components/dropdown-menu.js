import { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";

const DropdownToggler = styled.div`
  cursor: pointer;
  position: relative;
  padding: 8px 32px;
  background: green;
  z-index: 2;
`;

const DropdownList = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% - 64px);
  transform: translateX(-50%);
  display: block;
  min-width: 320px;
  max-width: 680px;
  padding: 82px 20px 24px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border: 1px solid #f0f0f0;
  box-shadow: 2px 2px 3px 0 hsla(0, 0%, 73.7%, 0.1);
  z-index: 1;
`;

const DropdownListItem = props => {
  const onClickDropdownListItem = () => {
    props.onClick(props.item);
  };

  return <div onClick={onClickDropdownListItem}>{props.children}</div>;
};

const StyledDropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 32px;
  z-index: ${props => (props.isOpen ? 2 : 1)};

  ${DropdownList} {
    transition: opacity 0.2s;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    pointer-events: ${props => (props.isOpen ? "inherit" : "none")};
  }
`;

const DropdownMenu = props => {
  let refDropdown = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(props.activeItem);

  const onClickDropdownToggler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickDropdownListItem = item => {
    setActiveItem(item);
    setIsDropdownOpen(false);
  };

  const onClickDocument = e => {
    if (isDropdownOpen && !refDropdown.current.contains(e.target)) {
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
    <StyledDropdownMenu ref={refDropdown} isOpen={isDropdownOpen}>
      <DropdownToggler onClick={onClickDropdownToggler}>
        {activeItem ? activeItem.title : props.title}
      </DropdownToggler>

      <DropdownList isOpen={isDropdownOpen}>
        {props.items.map(item => (
          <DropdownListItem
            onClick={onClickDropdownListItem}
            key={item.title}
            item={item}
          >
            {item.title}
          </DropdownListItem>
        ))}
      </DropdownList>
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
