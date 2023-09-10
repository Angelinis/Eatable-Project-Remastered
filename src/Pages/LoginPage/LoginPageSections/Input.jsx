import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 414px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Label = styled.label`
  color: #b8b8bb;
`;

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid #333333;
  witdth: 315px;
  background-color: transparent;
  outline: none;
  ::placeholder {
    color: #333333;
  }
`;
export const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <Container>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <InputContainer
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
