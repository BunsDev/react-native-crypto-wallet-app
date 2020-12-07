import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgEyeOff(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M23 24c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L4.6 6C2.8 7.5 1.2 9.4.1 11.5c-.1.3-.1.6 0 .9.2.4 4.4 8.6 11.9 8.6 2.1 0 4.1-.6 5.8-1.8l4.5 4.5c.2.2.4.3.7.3zM9.7 3.3c-.6.1-.9.6-.8 1.2.2.5.7.8 1.2.9.6-.1 1.3-.2 1.9-.2 5.4 0 9 5.4 9.9 7-.5.9-1.1 1.7-1.8 2.5-.4.4-.3 1 .1 1.4.1.1.4.2.6.2.3 0 .6-.2.8-.4.9-1.1 1.7-2.2 2.3-3.4.1-.3.1-.6 0-.9C23.7 11.2 19.5 3 12 3c-.8 0-1.6.1-2.3.3zm.2 8.8c0 .5.2 1 .6 1.4.6.5 1.3.6 2 .4L10 11.4c0 .165-.03.3-.058.421a1.288 1.288 0 00-.042.279zm4.1 3.4l2.4 2.3C15 18.6 13.5 19 12 19c-5.4 0-9-5.4-9.9-7C3.2 10.2 4.5 8.7 6 7.4l2.5 2.5c-.4.7-.6 1.5-.6 2.3.1 1.1.5 2.1 1.3 2.8.7.7 1.7 1.1 2.7 1.1.7 0 1.5-.2 2.1-.6z"
        clipRule="evenodd"
      />
      <Mask id="eye-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 24c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L4.6 6C2.8 7.5 1.2 9.4.1 11.5c-.1.3-.1.6 0 .9.2.4 4.4 8.6 11.9 8.6 2.1 0 4.1-.6 5.8-1.8l4.5 4.5c.2.2.4.3.7.3zM9.7 3.3c-.6.1-.9.6-.8 1.2.2.5.7.8 1.2.9.6-.1 1.3-.2 1.9-.2 5.4 0 9 5.4 9.9 7-.5.9-1.1 1.7-1.8 2.5-.4.4-.3 1 .1 1.4.1.1.4.2.6.2.3 0 .6-.2.8-.4.9-1.1 1.7-2.2 2.3-3.4.1-.3.1-.6 0-.9C23.7 11.2 19.5 3 12 3c-.8 0-1.6.1-2.3.3zm.2 8.8c0 .5.2 1 .6 1.4.6.5 1.3.6 2 .4L10 11.4c0 .165-.03.3-.058.421a1.288 1.288 0 00-.042.279zm4.1 3.4l2.4 2.3C15 18.6 13.5 19 12 19c-5.4 0-9-5.4-9.9-7C3.2 10.2 4.5 8.7 6 7.4l2.5 2.5c-.4.7-.6 1.5-.6 2.3.1 1.1.5 2.1 1.3 2.8.7.7 1.7 1.1 2.7 1.1.7 0 1.5-.2 2.1-.6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#eye-off_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgEyeOff;
