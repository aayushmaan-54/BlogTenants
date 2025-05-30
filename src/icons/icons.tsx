/* eslint-disable @typescript-eslint/no-unused-vars */
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 479 479"
      {...props}
    >
      <g filter="url(#f)">
        <mask id="c" fill="white">
          <rect width={479} height={479} rx={13} />
        </mask>
        <rect
          width={479}
          height={479}
          rx={13}
          fill="url(#a)"
          mask="url(#c)"
          stroke="url(#a)"
          strokeWidth={92}
        />
        <g filter="url(#e)">
          <mask
            id="b"
            x={91}
            y={144}
            width={294}
            height={205}
            fill="black"
            maskUnits="userSpaceOnUse"
          >
            <rect x={91} y={144} width={294} height={205} fill="#fff" />
            <path d="m225.5 308.4c0 7.2-1.8 13.8-5.4 19.8s-8.4 10.8-14.4 14.4-12.6 5.4-19.8 5.4h-80.1c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-175.2c0-4 1.3-7.3 3.9-9.9 2.8-2.6 6.1-3.9 9.9-3.9h75.9c7.4 0 14 1.8 19.8 5.4 6 3.6 10.8 8.4 14.4 14.4s5.4 12.7 5.4 20.1v35.7c0 5.4-1 10.4-3 15-1 2.2-0.8 4.4 0.6 6.6 4.4 6.6 6.6 14 6.6 22.2v43.8zm-39.6-87.6v-35.7c0-1.2-0.5-2.2-1.5-3-0.8-0.8-1.7-1.2-2.7-1.2h-49.8c-2.6 0-3.9 1.3-3.9 3.9v36c0 2.6 1.3 3.9 3.9 3.9h49.8c1 0 1.9-0.4 2.7-1.2 1-0.8 1.5-1.7 1.5-2.7zm3.9 87.6v-43.8c0-2.8-1.3-4.2-3.9-4.2h-54c-2.6 0-3.9 1.3-3.9 3.9v44.4c0 2.6 1.3 3.9 3.9 3.9h54c1 0 1.9-0.4 2.7-1.2 0.8-1 1.2-2 1.2-3zm193.91-141.3c0 3.8-1.3 7.1-3.9 9.9-2.6 2.6-5.9 3.9-9.9 3.9h-31.5c-2.6 0-3.9 1.3-3.9 3.9v149.4c0 3.8-1.4 7.1-4.2 9.9-2.6 2.6-5.8 3.9-9.6 3.9h-7.8c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-149.4c0-2.6-1.3-3.9-3.9-3.9h-31.8c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-8.1c0-4 1.3-7.3 3.9-9.9 2.8-2.6 6.1-3.9 9.9-3.9h106.5c4 0 7.3 1.3 9.9 3.9s3.9 5.9 3.9 9.9v8.1z" />
          </mask>
          <path
            d="m225.5 308.4c0 7.2-1.8 13.8-5.4 19.8s-8.4 10.8-14.4 14.4-12.6 5.4-19.8 5.4h-80.1c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-175.2c0-4 1.3-7.3 3.9-9.9 2.8-2.6 6.1-3.9 9.9-3.9h75.9c7.4 0 14 1.8 19.8 5.4 6 3.6 10.8 8.4 14.4 14.4s5.4 12.7 5.4 20.1v35.7c0 5.4-1 10.4-3 15-1 2.2-0.8 4.4 0.6 6.6 4.4 6.6 6.6 14 6.6 22.2v43.8zm-39.6-87.6v-35.7c0-1.2-0.5-2.2-1.5-3-0.8-0.8-1.7-1.2-2.7-1.2h-49.8c-2.6 0-3.9 1.3-3.9 3.9v36c0 2.6 1.3 3.9 3.9 3.9h49.8c1 0 1.9-0.4 2.7-1.2 1-0.8 1.5-1.7 1.5-2.7zm3.9 87.6v-43.8c0-2.8-1.3-4.2-3.9-4.2h-54c-2.6 0-3.9 1.3-3.9 3.9v44.4c0 2.6 1.3 3.9 3.9 3.9h54c1 0 1.9-0.4 2.7-1.2 0.8-1 1.2-2 1.2-3zm193.91-141.3c0 3.8-1.3 7.1-3.9 9.9-2.6 2.6-5.9 3.9-9.9 3.9h-31.5c-2.6 0-3.9 1.3-3.9 3.9v149.4c0 3.8-1.4 7.1-4.2 9.9-2.6 2.6-5.8 3.9-9.6 3.9h-7.8c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-149.4c0-2.6-1.3-3.9-3.9-3.9h-31.8c-3.8 0-7.1-1.3-9.9-3.9-2.6-2.8-3.9-6.1-3.9-9.9v-8.1c0-4 1.3-7.3 3.9-9.9 2.8-2.6 6.1-3.9 9.9-3.9h106.5c4 0 7.3 1.3 9.9 3.9s3.9 5.9 3.9 9.9v8.1z"
            fill="#fff"
          />
          <path
            d="m220.1 328.2-0.857-0.514 0.857 0.514zm-124.2 15.9-0.7328 0.68 0.0252 0.028 0.0271 0.025 0.6805-0.733zm0-195-0.6805-0.733-0.0135 0.013-0.0131 0.013 0.7071 0.707zm105.6 1.5-0.527 0.85 6e-3 4e-3 7e-3 3e-3 0.514-0.857zm14.4 14.4-0.857 0.514 0.857-0.514zm2.4 70.8 0.91 0.414 4e-3 -8e-3 3e-3 -7e-3 -0.917-0.399zm0.6 6.6-0.844 0.537 0.012 0.018 0.832-0.555zm-34.5-60.3-0.707 0.707 0.039 0.039 0.043 0.035 0.625-0.781zm0 41.4-0.625-0.781-0.043 0.035-0.039 0.039 0.707 0.707zm4.2 87.9 0.707 0.707 0.039-0.039 0.035-0.043-0.781-0.625zm36.9-3h-1c0 7.024-1.754 13.446-5.257 19.286l1.714 1.028c3.697-6.16 5.543-12.938 5.543-20.314h-1zm-5.4 19.8-0.857-0.514c-3.516 5.859-8.198 10.541-14.057 14.057l0.514 0.857 0.515 0.857c6.14-3.684 11.058-8.602 14.742-14.743l-0.857-0.514zm-14.4 14.4-0.514-0.857c-5.84 3.503-12.262 5.257-19.286 5.257v2c7.376 0 14.154-1.846 20.315-5.543l-0.515-0.857zm-19.8 5.4v-1h-80.1v2h80.1v-1zm-80.1 0v-1c-3.546 0-6.6034-1.203-9.2195-3.633l-1.361 1.466c2.9839 2.77 6.5265 4.167 10.58 4.167v-1zm-9.9-3.9 0.7328-0.68c-2.4293-2.617-3.6328-5.674-3.6328-9.22h-2c0 4.054 1.3965 7.597 4.1672 10.58l0.7328-0.68zm-3.9-9.9h1v-175.2h-2v175.2h1zm0-175.2h1c0-3.76 1.2121-6.798 3.6071-9.193l-1.4142-1.414c-2.805 2.805-4.1929 6.367-4.1929 10.607h1zm3.9-9.9 0.6805 0.733c2.6161-2.43 5.6735-3.633 9.2195-3.633v-2c-4.054 0-7.5966 1.396-10.58 4.167l0.6805 0.733zm9.9-3.9v1h75.9v-2h-75.9v1zm75.9 0v1c7.23 0 13.644 1.756 19.273 5.25l1.054-1.7c-5.971-3.706-12.757-5.55-20.327-5.55v1zm19.8 5.4-0.514 0.857c5.859 3.516 10.541 8.198 14.057 14.057l1.714-1.028c-3.684-6.141-8.602-11.059-14.742-14.744l-0.515 0.858zm14.4 14.4-0.857 0.514c3.501 5.836 5.257 12.356 5.257 19.586h2c0-7.57-1.844-14.45-5.543-20.615l-0.857 0.515zm5.4 20.1h-1v35.7h2v-35.7h-1zm0 35.7h-1c0 5.273-0.976 10.136-2.917 14.601l1.834 0.798c2.059-4.735 3.083-9.872 3.083-15.399h-1zm-3 15-0.91-0.414c-1.153 2.536-0.898 5.092 0.666 7.551l1.688-1.074c-1.236-1.942-1.381-3.785-0.534-5.649l-0.91-0.414zm0.6 6.6-0.832 0.555c4.287 6.43 6.432 13.635 6.432 21.645h2c0-8.39-2.255-15.985-6.768-22.755l-0.832 0.555zm6.6 22.2h-1v43.8h2v-43.8h-1zm-39.6-43.8h1v-35.7h-2v35.7h1zm0-35.7h1c0-1.527-0.656-2.806-1.875-3.781l-1.25 1.562c0.781 0.625 1.125 1.346 1.125 2.219h1zm-1.5-3 0.707-0.707c-0.961-0.961-2.106-1.493-3.407-1.493v2c0.699 0 1.354 0.268 1.993 0.907l0.707-0.707zm-2.7-1.2v-1h-49.8v2h49.8v-1zm-49.8 0v-1c-1.454 0-2.728 0.364-3.632 1.268s-1.268 2.178-1.268 3.632h2c0-1.146 0.286-1.822 0.682-2.218s1.072-0.682 2.218-0.682v-1zm-3.9 3.9h-1v36h2v-36h-1zm0 36h-1c0 1.454 0.364 2.728 1.268 3.632s2.178 1.268 3.632 1.268v-2c-1.146 0-1.822-0.286-2.218-0.682s-0.682-1.072-0.682-2.218h-1zm3.9 3.9v1h49.8v-2h-49.8v1zm49.8 0v1c1.301 0 2.446-0.532 3.407-1.493l-1.414-1.414c-0.639 0.639-1.294 0.907-1.993 0.907v1zm2.7-1.2 0.625 0.781c1.165-0.932 1.875-2.095 1.875-3.481h-2c0 0.614-0.29 1.251-1.125 1.919l0.625 0.781zm5.4 84.9h1v-43.8h-2v43.8h1zm0-43.8h1c0-1.537-0.355-2.875-1.242-3.83-0.9-0.97-2.184-1.37-3.658-1.37v2c1.126 0 1.792 0.3 2.192 0.73 0.413 0.445 0.708 1.206 0.708 2.47h1zm-3.9-4.2v-1h-54v2h54v-1zm-54 0v-1c-1.454 0-2.728 0.364-3.632 1.268s-1.268 2.178-1.268 3.632h2c0-1.146 0.286-1.822 0.682-2.218s1.072-0.682 2.218-0.682v-1zm-3.9 3.9h-1v44.4h2v-44.4h-1zm0 44.4h-1c0 1.454 0.364 2.728 1.268 3.632s2.178 1.268 3.632 1.268v-2c-1.146 0-1.822-0.286-2.218-0.682s-0.682-1.072-0.682-2.218h-1zm3.9 3.9v1h54v-2h-54v1zm54 0v1c1.301 0 2.446-0.532 3.407-1.493l-1.414-1.414c-0.639 0.639-1.294 0.907-1.993 0.907v1zm2.7-1.2 0.781 0.625c0.901-1.127 1.419-2.341 1.419-3.625h-2c0 0.716-0.282 1.502-0.981 2.375l0.781 0.625zm191.21-134.4 0.707 0.707 0.013-0.013 0.013-0.014-0.733-0.68zm-49.5 167.1 0.707 0.707-0.707-0.707zm-27.3 0-0.733 0.68 0.026 0.028 0.027 0.025 0.68-0.733zm-49.5-167.1-0.733 0.68 0.026 0.028 0.027 0.025 0.68-0.733zm0-27.9-0.68-0.733-0.014 0.013-0.013 0.013 0.707 0.707zm130.2 18h-1c0 3.546-1.203 6.603-3.633 9.22l1.466 1.36c2.771-2.983 4.167-6.526 4.167-10.58h-1zm-3.9 9.9-0.707-0.707c-2.395 2.395-5.432 3.607-9.193 3.607v2c4.24 0 7.802-1.388 10.607-4.193l-0.707-0.707zm-9.9 3.9v-1h-31.5v2h31.5v-1zm-31.5 0v-1c-1.454 0-2.728 0.364-3.632 1.268s-1.268 2.178-1.268 3.632h2c0-1.146 0.286-1.822 0.682-2.218 0.397-0.396 1.072-0.682 2.218-0.682v-1zm-3.9 3.9h-1v149.4h2v-149.4h-1zm0 149.4h-1c0 3.523-1.286 6.572-3.907 9.193l1.414 1.414c2.979-2.979 4.493-6.53 4.493-10.607h-1zm-4.2 9.9-0.707-0.707c-2.406 2.405-5.348 3.607-8.893 3.607v2c4.055 0 7.513-1.398 10.307-4.193l-0.707-0.707zm-9.6 3.9v-1h-7.8v2h7.8v-1zm-7.8 0v-1c-3.546 0-6.603-1.203-9.219-3.633l-0.681 0.733-0.68 0.733c2.984 2.77 6.526 4.167 10.58 4.167v-1zm-9.9-3.9 0.733-0.68c-2.429-2.617-3.633-5.674-3.633-9.22h-2c0 4.054 1.397 7.597 4.167 10.58l0.733-0.68zm-3.9-9.9h1v-149.4h-2v149.4h1zm0-149.4h1c0-1.454-0.364-2.728-1.268-3.632-0.903-0.904-2.178-1.268-3.632-1.268v2c1.146 0 1.822 0.286 2.218 0.682s0.682 1.072 0.682 2.218h1zm-3.9-3.9v-1h-31.8v2h31.8v-1zm-31.8 0v-1c-3.546 0-6.603-1.204-9.219-3.633l-0.681 0.733-0.68 0.733c2.984 2.77 6.526 4.167 10.58 4.167v-1zm-9.9-3.9 0.733-0.68c-2.429-2.617-3.633-5.674-3.633-9.22h-2c0 4.054 1.397 7.597 4.167 10.58l0.733-0.68zm-3.9-9.9h1v-8.1h-2v8.1h1zm0-8.1h1c0-3.76 1.212-6.798 3.607-9.193l-1.414-1.414c-2.805 2.805-4.193 6.367-4.193 10.607h1zm3.9-9.9 0.681 0.733c2.616-2.43 5.673-3.633 9.219-3.633v-2c-4.054 0-7.596 1.396-10.58 4.167l0.68 0.733zm9.9-3.9v1h106.5v-2h-106.5v1zm106.5 0v1c3.761 0 6.798 1.212 9.193 3.607l1.414-1.414c-2.805-2.805-6.367-4.193-10.607-4.193v1zm9.9 3.9-0.707 0.707c2.395 2.395 3.607 5.433 3.607 9.193h2c0-4.24-1.388-7.802-4.193-10.607l-0.707 0.707zm3.9 9.9h-1v8.1h2v-8.1h-1z"
            fill="url(#d)"
            mask="url(#b)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="f"
          x={0}
          y={-5}
          width={484}
          height={484}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={10} dy={-20} />
          <feGaussianBlur stdDeviation={2.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_21_2" />
        </filter>
        <filter
          id="e"
          x={90}
          y={144.2}
          width={301.71}
          height={217.8}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={3} dy={9} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_21_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_21_2"
            result="shape"
          />
        </filter>
        <linearGradient
          id="a"
          x1={239.5}
          x2={239.5}
          y2={479}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007FFF" offset={0} />
          <stop stopColor="#2A52BE" offset={1} />
        </linearGradient>
        <linearGradient
          id="d"
          x1={239.5}
          x2={239.5}
          y2={393}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#007FFF" offset={0} />
          <stop stopColor="#2A52BE" offset={1} />
        </linearGradient>
      </defs>
    </svg>
  ),


  DefaultAvatar: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx={12} cy={10} r={4} />
      <circle cx={12} cy={12} r={10} />
    </svg>
  ),


  Home: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),


  Globe: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),


  IndianRupees: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  ),


  Sun: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
    </svg>
  ),


  MoonStar: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  ),


  MonitorCog: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 17v4" />
      <path d="m14.305 7.53.923-.382" />
      <path d="m15.228 4.852-.923-.383" />
      <path d="m16.852 3.228-.383-.924" />
      <path d="m16.852 8.772-.383.923" />
      <path d="m19.148 3.228.383-.924" />
      <path d="m19.53 9.696-.382-.924" />
      <path d="m20.772 4.852.924-.383" />
      <path d="m20.772 7.148.924.383" />
      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <path d="M8 21h8" />
      <circle cx={18} cy={6} r={3} />
    </svg>
  ),


  File: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  ),


  CirclePlus: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),


  Cog: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  ),


  Book: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  ),


  ArrowLeft: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),


  Atom: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={1} />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  ),


  Code: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),


  Heading1: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="m17 12 3-2v8" />
    </svg>
  ),


  Heading2: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </svg>
  ),


  Heading3: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
      <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </svg>
  ),


  List: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
      <path d="M3 6h.01" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M8 6h13" />
    </svg>
  ),


  ListOrdered: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 12h11" />
      <path d="M10 18h11" />
      <path d="M10 6h11" />
      <path d="M4 10h2" />
      <path d="M4 6h1v4" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  ),


  MessageSquarePlus: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </svg>
  ),


  Text: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 18H3" />
      <path d="M17 6H3" />
      <path d="M21 12H3" />
    </svg>
  ),


  TextQuote: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 6H3" />
      <path d="M21 12H8" />
      <path d="M21 18H8" />
      <path d="M3 12v6" />
    </svg>
  ),


  CircleCheck: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  ),


  Loader: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),


  MoreVertical: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={12} cy={5} r={1} />
      <circle cx={12} cy={19} r={1} />
    </svg>
  ),


  Check: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
}

export default Icons;