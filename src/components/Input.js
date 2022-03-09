import styled from "styled-components";

export default function InputGame({ name, placeholder, id }) {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <input type="text" id={id} placeholder={placeholder} />
    </>
  );
}

const Label = styled.label`
    display:flex;
    flex-direction:column;
  }
`;
