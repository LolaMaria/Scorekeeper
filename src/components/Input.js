import styled from "styled-components";

export default function InputGame({ name, placeholder, id }) {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <Input type="text" id={id} placeholder={placeholder} />
    </>
  );
}

const Label = styled.label`
    display:flex;
    flex-direction:column;
    width:100%;
  }
`;
const Input = styled.input`
  width: 100%;
`;
