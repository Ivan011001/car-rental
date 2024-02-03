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

export const StyledAvdretFormInput = styled.input`
  border-radius: 14px;
  border: none;
  padding: 14px 89px 14px 18px;
  background: #f7f7fb;

  /* transition: var(--transition); */

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #121417;
  }

  &:focus {
    outline: 1px solid var(--accent-color);
  }
`;
