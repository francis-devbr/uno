import styled from "styled-components";

const Root = styled.div`
  position: relative;
  padding-top: ${(props) => props.ratio * 100}%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    cursor: inherit;
    z-index:${(props) => props.zindex}
`;

export default function Image({
  src,
  alt = " ",
  ratio = 9 / 16,
  zindex = 0,
  ...props
}) {
  return (
    <Root ratio={ratio} zindex={zindex} {...props}>
      <img src={src} alt={alt} />
    </Root>
  );
}
