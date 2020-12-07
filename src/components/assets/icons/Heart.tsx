import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgHeart(props: SvgProps) {
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
        d="M16.898 2c1.637 0 3.179.693 4.335 1.881 1.253 1.188 1.927 2.871 1.735 4.555 0 1.683-.675 3.366-1.831 4.554l-8.479 8.713c-.192.198-.385.297-.674.297-.29 0-.482-.099-.675-.297L2.831 12.99C1.674 11.802 1 10.12 1 8.436c0-1.684.674-3.367 1.927-4.555a6.104 6.104 0 018.768 0l.385.396.386-.396A6.268 6.268 0 0116.898 2zM12.08 19.624l7.804-8.02c.867-.891 1.35-1.98 1.35-3.168 0-1.188-.483-2.278-1.253-3.169-.868-.792-1.927-1.287-3.084-1.287-1.252 0-2.312.495-3.179 1.287l-.963 1.09a.914.914 0 01-1.35 0l-1.06-1.09C9.48 4.377 8.42 3.98 7.264 3.98c-1.06 0-2.216.396-2.987 1.287-.77.891-1.253 1.98-1.253 3.169 0 1.188.386 2.277 1.253 3.168l7.804 8.02z"
        clipRule="evenodd"
      />
      <Mask id="heart_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.898 2c1.637 0 3.179.693 4.335 1.881 1.253 1.188 1.927 2.871 1.735 4.555 0 1.683-.675 3.366-1.831 4.554l-8.479 8.713c-.192.198-.385.297-.674.297-.29 0-.482-.099-.675-.297L2.831 12.99C1.674 11.802 1 10.12 1 8.436c0-1.684.674-3.367 1.927-4.555a6.104 6.104 0 018.768 0l.385.396.386-.396A6.268 6.268 0 0116.898 2zM12.08 19.624l7.804-8.02c.867-.891 1.35-1.98 1.35-3.168 0-1.188-.483-2.278-1.253-3.169-.868-.792-1.927-1.287-3.084-1.287-1.252 0-2.312.495-3.179 1.287l-.963 1.09a.914.914 0 01-1.35 0l-1.06-1.09C9.48 4.377 8.42 3.98 7.264 3.98c-1.06 0-2.216.396-2.987 1.287-.77.891-1.253 1.98-1.253 3.169 0 1.188.386 2.277 1.253 3.168l7.804 8.02z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#heart_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgHeart;
