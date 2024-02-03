import styled from "styled-components";

export const StyledAdvertForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const StyledAdvertFormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
`;

export const StyledAdvertFormLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
`;

export const StyledAvdretFormCustomSelect = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
`;

export const StyledAvdretFormInput = styled.select`
  color: #121417;

  display: block;
  width: 100%;
  border-radius: 14px;
  border: none;
  padding: 14px 18px;
  background: #f7f7fb;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  cursor: pointer;

  & > option {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #121417;
  }

  &:focus {
    outline: 1px solid var(--accent-color);
  }
`;

export const StyledAvdretFormArrowIcon = styled.svg`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;
