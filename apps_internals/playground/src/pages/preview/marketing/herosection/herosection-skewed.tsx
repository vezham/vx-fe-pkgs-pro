import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import {
  Button,
  cn,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps
} from '@vx-oss/react'
import {
  heroSectionProps,
  HeroSectionSkewed,
  IconSvgProps,
  NavProps
} from '@vx-pro/marketing-herosections-skewedscreenshot'
import { domAnimation, LazyMotion, m, useAnimation } from 'framer-motion'
import React, {
  ComponentProps,
  ImgHTMLAttributes,
  useEffect,
  useState
} from 'react'

const herosection_skewed = () => {
  const menuItems = [
    'About',
    'Blog',
    'Customers',
    'Pricing',
    'Enterprise',
    'Changelog',
    'Documentation',
    'Contact Us'
  ]

  const navItems = ['Home', 'Features', 'Customers', 'About us', 'Integrations']

  const BasicNavbar = React.forwardRef<
    HTMLElement,
    NavbarProps & { data: NavProps }
  >(({ data, classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
      <Navbar
        ref={ref}
        {...props}
        classNames={{
          base: cn('border-default-100 bg-transparent', {
            'bg-default-200/50 dark:bg-default-100/50': isMenuOpen
          }),
          wrapper: 'w-full justify-center',
          item: 'hidden md:flex',
          ...classNames
        }}
        height="60px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}>
        {/* Left Content */}
        <NavbarBrand>
          <div className="bg-default-foreground text-background rounded-full">
            {data.logo}
          </div>
          <span className="text-small text-default-foreground ml-2 font-medium">
            {data.brand}
          </span>
        </NavbarBrand>

        <NavbarContent justify="center">
          {navItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link className="text-default-500" href="#" to={'.'}>
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Right Content */}
        <NavbarContent className="hidden md:flex" justify="end">
          {data.navActions}
        </NavbarContent>

        <NavbarMenuToggle className="text-default-400 md:hidden" />

        <NavbarMenu
          className="bg-default-200/50 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)-1px)] max-h-fit pt-6 pb-6 backdrop-blur-md backdrop-saturate-150"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: {
              ease: 'easeInOut',
              duration: 0.2
            }
          }}>
          {data.navMenuActions}
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-default-500 mb-2 w-full" href="#" to={'.'}>
                {item}
              </Link>
              {index < menuItems.length - 1 && (
                <Divider className="opacity-50" />
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
  })

  const FadeInImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const animationVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }

    const [isLoaded, setIsLoaded] = useState(false)
    const animationControls = useAnimation()

    useEffect(() => {
      if (isLoaded) {
        animationControls.start('visible')
      }
    }, [isLoaded])

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          animate={animationControls}
          initial="hidden"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          variants={animationVariants}>
          {/**
           * If using in a nextjs project, use next/image instead of <img>.
           * The props type should be the same as next/image.
           *
           * ```tsx
           * import type {ImageProps} from "next/image";
           * import Image from "next/image";
           *
           * export const FadeInImage = (props: ImageProps) => {
           *
           *   // existing code...
           *
           *   <Image {...props} onLoad={() => setIsLoaded(true)} />
           *
           *   // existing code...
           * }
           * ```
           */}
          <img {...props} onLoad={() => setIsLoaded(true)} />
        </m.div>
      </LazyMotion>
    )
  }

  const AppScreenshotSkewed = ({ ...props }: ComponentProps<'svg'>) => (
    <svg
      fill="none"
      height="737"
      viewBox="0 0 1280 737"
      width="1280"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <g filter="url(#filter0_dddddd_3051_12573)">
        <g clipPath="url(#clip0_3051_12573)">
          <rect
            fill="url(#paint0_linear_3051_12573)"
            height="616"
            rx="12"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 59 344.583)"
            width="1115"
          />
          <g clipPath="url(#clip1_3051_12573)">
            <rect
              fill="white"
              fillOpacity="0.16"
              height="12"
              rx="6"
              transform="matrix(0.965926 -0.258819 0.707107 0.707107 92.4607 353.549)"
              width="12"
            />
            <rect
              fill="white"
              fillOpacity="0.16"
              height="12"
              rx="6"
              transform="matrix(0.965926 -0.258819 0.707107 0.707107 111.779 348.373)"
              width="12"
            />
            <rect
              fill="white"
              fillOpacity="0.16"
              height="12"
              rx="6"
              transform="matrix(0.965926 -0.258819 0.707107 0.707107 131.098 343.196)"
              width="12"
            />
            <g clipPath="url(#clip2_3051_12573)">
              <rect
                fill="white"
                fillOpacity="0.1"
                height="32"
                rx="8"
                transform="matrix(0.965926 -0.258819 0.707107 0.707107 483.351 239.844)"
                width="250"
              />
              <text
                dominantBaseline="middle"
                fill="white"
                fillOpacity="0.7"
                fontSize="13"
                textAnchor="middle"
                transform="matrix(0.965926 -0.258819 0.707107 0.707107 483.351 239.844)"
                x="125"
                y="16">
                heroui.pro
              </text>
              <g clipPath="url(#clip3_3051_12573)">
                <path
                  d="M510.491 251.698L515.352 250.396C516.141 250.184 516.243 249.767 515.62 249.144L512.927 246.451C512.38 245.904 511.755 245.687 511.071 245.793L510.168 244.889C508.766 243.487 506.775 243.101 505.358 243.481C503.942 243.86 503.402 244.925 504.803 246.326L505.707 247.23C505.145 247.458 505.122 247.849 505.669 248.396L508.362 251.089C508.985 251.712 509.702 251.909 510.491 251.698ZM505.705 245.998C504.812 245.105 505.11 244.409 506.038 244.161C506.962 243.913 508.236 244.188 509.129 245.08L510.086 246.038L506.662 246.955L505.705 245.998Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </g>
              <g clipPath="url(#clip4_3051_12573)">
                <path
                  d="M722.991 192.111L723.218 191.247C722.493 191.383 721.86 191.353 721.252 191.19C719.596 190.746 718.601 189.752 718.856 188.801L719.359 186.922C719.616 185.966 720.968 185.603 722.625 186.047C724.296 186.498 725.276 187.485 725.021 188.436L724.761 189.41C725.244 189.663 725.669 190.017 725.892 190.362L726.332 188.742C726.709 187.354 725.273 185.91 722.842 185.259C720.406 184.603 718.445 185.139 718.073 186.526L717.55 188.5C717.178 189.886 718.609 191.331 721.04 191.983C721.614 192.133 722.244 192.196 722.991 192.111ZM719.997 188.485L719.776 189.348C720.495 189.213 721.138 189.246 721.736 189.406C723.402 189.852 724.392 190.843 724.132 191.795L723.628 193.674C723.372 194.63 722.025 194.991 720.363 194.549C718.696 194.102 717.712 193.111 717.972 192.158L718.227 191.186C717.749 190.931 717.323 190.583 717.096 190.234L716.662 191.853C716.285 193.241 717.725 194.688 720.156 195.34C722.587 195.991 724.549 195.455 724.92 194.069L725.442 192.101C725.815 190.708 724.379 189.265 721.952 188.618C721.379 188.461 720.75 188.399 719.997 188.485Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </g>
            </g>
            <g clipPath="url(#clip5_3051_12573)">
              <path
                d="M174.633 343.263L187.206 339.894C188.791 339.47 189.011 338.648 187.867 337.503L181.328 330.965C180.178 329.815 178.76 329.439 177.175 329.864L164.603 333.232C163.017 333.657 162.792 334.474 163.941 335.624L170.48 342.162C171.63 343.312 173.048 343.688 174.633 343.263ZM173.668 342.187C172.986 342.369 172.348 342.206 171.827 341.685L165.466 335.324C164.945 334.803 165.061 334.445 165.744 334.262L169.083 333.367L177.008 341.292L173.668 342.187ZM178.14 330.94C178.815 330.759 179.454 330.915 179.976 331.436L186.337 337.797C186.858 338.319 186.74 338.684 186.064 338.865L178.373 340.926L170.448 333.001L178.14 330.94ZM169.611 335.719C169.868 335.65 169.927 335.43 169.744 335.247C169.562 335.065 169.186 334.968 168.929 335.037L167.424 335.44C167.16 335.51 167.096 335.725 167.278 335.908C167.461 336.091 167.842 336.193 168.106 336.122L169.611 335.719ZM171.051 337.159C171.308 337.09 171.367 336.87 171.184 336.687C171.001 336.504 170.625 336.408 170.369 336.476L168.864 336.88C168.6 336.95 168.535 337.165 168.718 337.348C168.901 337.531 169.282 337.633 169.546 337.562L171.051 337.159ZM172.485 338.593C172.742 338.524 172.807 338.31 172.624 338.127C172.441 337.944 172.065 337.847 171.808 337.916L170.304 338.319C170.04 338.39 169.975 338.605 170.158 338.788C170.341 338.97 170.717 339.067 170.981 338.996L172.485 338.593Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <g clipPath="url(#clip6_3051_12573)">
              <path
                d="M219.238 325.274C219.404 325.439 219.662 325.573 219.957 325.648L228.571 327.956C228.879 328.035 229.143 328.041 229.347 327.987C229.823 327.859 229.914 327.52 229.582 327.188C229.411 327.017 229.171 326.892 228.915 326.827L225.971 326.026L222.246 325.133L224.089 324.737L233.265 322.279C233.756 322.147 233.854 321.806 233.501 321.452C233.141 321.093 232.551 320.943 232.061 321.074L222.884 323.533L221.204 324.082L221.938 321.994L222.375 320.287C222.415 320.136 222.356 319.962 222.185 319.791C221.854 319.46 221.271 319.308 220.796 319.435C220.592 319.49 220.443 319.599 220.385 319.79L219.062 324.753C219.005 324.916 219.072 325.108 219.238 325.274Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <g clipPath="url(#clip7_3051_12573)">
              <path
                d="M268.274 312.135C268.108 311.969 267.844 311.829 267.555 311.76L258.954 309.455C258.628 309.368 258.369 309.367 258.157 309.424C257.689 309.549 257.593 309.883 257.924 310.215C258.096 310.386 258.335 310.511 258.597 310.581L261.541 311.382L265.251 312.279L263.423 312.671L254.247 315.13C253.749 315.263 253.652 315.597 254.011 315.956C254.365 316.31 254.953 316.467 255.451 316.334L264.627 313.875L266.308 313.327L265.574 315.415L265.137 317.122C265.091 317.267 265.15 317.441 265.321 317.612C265.653 317.943 266.241 318.101 266.709 317.975C266.92 317.919 267.056 317.806 267.11 317.63L268.45 312.655C268.502 312.487 268.44 312.3 268.274 312.135Z"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g clipPath="url(#clip8_3051_12573)">
              <path
                d="M289.569 306.933C292.309 309.673 297.517 311.072 301.252 310.072C304.987 309.071 305.787 306.062 303.047 303.322C302.721 302.996 302.179 302.847 301.734 302.966C301.304 303.081 301.249 303.39 301.575 303.716C303.718 305.859 303.09 308.206 300.169 308.989C297.249 309.771 293.191 308.68 291.048 306.537C288.894 304.382 289.511 302.052 292.424 301.272C292.922 301.138 293.41 301.043 293.855 301L293.294 303.042C293.263 303.183 293.311 303.317 293.455 303.461C293.759 303.765 294.3 303.914 294.708 303.805C294.919 303.748 295.043 303.652 295.072 303.518L295.886 300.4C295.929 300.242 295.872 300.089 295.722 299.94C295.579 299.796 295.352 299.675 295.091 299.605L289.686 298.132C289.452 298.061 289.224 298.053 289.012 298.109C288.605 298.219 288.538 298.545 288.837 298.843C288.98 298.986 289.175 299.095 289.403 299.16L292.55 299.991C292.168 300.031 291.755 300.106 291.363 300.211C287.635 301.21 286.834 304.198 289.569 306.933Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <g clipPath="url(#clip9_3051_12573)">
              <path
                d="M1118.8 83.9266C1119.09 84.2142 1119.66 84.3609 1120.04 84.2578L1125.23 82.8678L1129.03 86.6653C1129.31 86.9471 1129.87 87.1018 1130.26 86.9965C1130.65 86.8913 1130.74 86.5625 1130.46 86.2808L1126.66 82.4832L1131.84 81.0953C1132.23 80.9922 1132.32 80.6693 1132.03 80.3817C1131.75 80.0941 1131.18 79.9416 1130.79 80.0447L1125.61 81.4325L1121.82 77.6408C1121.54 77.3591 1120.97 77.2065 1120.58 77.3118C1120.18 77.4171 1120.1 77.7436 1120.39 78.0254L1124.18 81.8171L1118.99 83.2071C1118.6 83.3102 1118.52 83.639 1118.8 83.9266Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <g clipPath="url(#clip10_3051_12573)">
              <path
                d="M1096.63 97.4586C1101.11 96.2598 1102.09 92.5496 1098.82 89.2803C1095.55 86.0051 1089.12 84.2881 1084.65 85.4869C1080.18 86.6835 1079.19 90.3878 1082.47 93.663C1085.74 96.9323 1092.17 98.6552 1096.63 97.4586ZM1095.63 96.4608C1091.85 97.4748 1086.61 96.0661 1083.84 93.2956C1081.07 90.5252 1081.86 87.4987 1085.65 86.4847C1089.43 85.4706 1094.69 86.8751 1097.46 89.6455C1100.23 92.4159 1099.42 95.4467 1095.63 96.4608ZM1087.66 88.4841C1087.31 88.5764 1087.24 88.8271 1087.5 89.0854L1090.43 92.0202L1091.73 93.2415L1090.23 92.7519L1088.57 92.3033C1088.38 92.2512 1088.18 92.2429 1088.02 92.288C1087.69 92.3761 1087.62 92.6246 1087.86 92.8653C1087.98 92.9886 1088.14 93.0813 1088.32 93.1297L1092.95 94.3608C1093.22 94.4352 1093.41 94.4515 1093.58 94.4064C1093.76 94.3592 1093.84 94.2618 1093.88 94.1094L1094.6 91.4453C1094.63 91.3411 1094.59 91.2183 1094.47 91.095C1094.23 90.8544 1093.79 90.7412 1093.46 90.8292C1093.28 90.8765 1093.18 90.9563 1093.16 91.0722L1092.92 92.0301L1092.81 92.9594L1091.63 91.6979L1088.7 88.7631C1088.44 88.5049 1088.01 88.3895 1087.66 88.4841Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
          </g>
          <rect
            fill="black"
            height="906"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 95.7695 381.353)"
            width="1115"
          />
          <g filter="url(#filter1_ddd_3051_12573)">
            <g clipPath="url(#clip11_3051_12573)">
              <rect
                fill="url(#pattern0_3051_12573)"
                height="702.001"
                transform="matrix(0.965926 -0.258819 0.707107 0.707107 109.154 384.939)"
                width="1099"
              />
            </g>
          </g>
        </g>
        <rect
          fill="url(#gradient)"
          height="615"
          rx="11.5"
          stroke="white"
          strokeOpacity="0.1"
          transform="matrix(0.965926 -0.258819 0.707107 0.707107 58.87 344.865)"
          width="1114"
          x="0.836516"
          y="0.224144"
        />
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: 'rgba(0, 0, 0, 0)', stopOpacity: 1 }}
          />
          <stop
            offset="50%"
            style={{ stopColor: 'rgba(0, 0, 0, 0.35)', stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: '#000000', stopOpacity: 1 }}
          />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="938.161"
          id="filter0_dddddd_3051_12573"
          width="1726.59"
          x="-48"
          y="-1.52588e-05">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1.4113" />
          <feGaussianBlur stdDeviation="1.48048" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0253031 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3.39155" />
          <feGaussianBlur stdDeviation="3.5578" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0363503 0"
          />
          <feBlend
            in2="effect1_dropShadow_3051_12573"
            mode="normal"
            result="effect2_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="6.38599" />
          <feGaussianBlur stdDeviation="6.69903" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.045 0"
          />
          <feBlend
            in2="effect2_dropShadow_3051_12573"
            mode="normal"
            result="effect3_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="11.3915" />
          <feGaussianBlur stdDeviation="11.9499" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0536497 0"
          />
          <feBlend
            in2="effect3_dropShadow_3051_12573"
            mode="normal"
            result="effect4_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="21.3066" />
          <feGaussianBlur stdDeviation="22.351" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0646969 0"
          />
          <feBlend
            in2="effect4_dropShadow_3051_12573"
            mode="normal"
            result="effect5_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="51" />
          <feGaussianBlur stdDeviation="53.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.09 0"
          />
          <feBlend
            in2="effect5_dropShadow_3051_12573"
            mode="normal"
            result="effect6_dropShadow_3051_12573"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect6_dropShadow_3051_12573"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="925.767"
          id="filter1_ddd_3051_12573"
          width="1702.88"
          x="103.154"
          y="94.497">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            in2="effect1_dropShadow_3051_12573"
            mode="normal"
            result="effect2_dropShadow_3051_12573"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            in2="effect2_dropShadow_3051_12573"
            mode="normal"
            result="effect3_dropShadow_3051_12573"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect3_dropShadow_3051_12573"
            mode="normal"
            result="shape"
          />
        </filter>
        <pattern
          height="1"
          id="pattern0_3051_12573"
          patternContentUnits="objectBoundingBox"
          width="1">
          <use
            transform="scale(0.000251383 0.000393546)"
            xlinkHref="#image0_3051_12573"
          />
        </pattern>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_3051_12573"
          x1="0"
          x2="1118.48"
          y1="0"
          y2="-5.14145e-05">
          <stop stopColor="#242424" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="clip0_3051_12573">
          <rect
            fill="white"
            height="616"
            rx="12"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 59 344.583)"
            width="1115"
          />
        </clipPath>
        <clipPath id="clip1_3051_12573">
          <rect
            fill="white"
            height="52"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 59 344.583)"
            width="1115"
          />
        </clipPath>
        <clipPath id="clip2_3051_12573">
          <rect
            fill="white"
            height="32"
            rx="8"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 483.351 239.844)"
            width="250"
          />
        </clipPath>
        <clipPath id="clip3_3051_12573">
          <rect
            fill="white"
            height="14"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 497.442 244.138)"
            width="14"
          />
        </clipPath>
        <clipPath id="clip4_3051_12573">
          <rect
            fill="white"
            height="14"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 709.946 187.198)"
            width="14"
          />
        </clipPath>
        <clipPath id="clip5_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 159.179 332.086)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip6_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 209.407 318.627)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip7_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 244.18 309.31)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip8_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 278.954 299.992)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip9_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 1108.68 77.6665)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip10_3051_12573">
          <rect
            fill="white"
            height="20"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 1073.91 86.9839)"
            width="20"
          />
        </clipPath>
        <clipPath id="clip11_3051_12573">
          <rect
            fill="white"
            height="890"
            rx="6"
            transform="matrix(0.965926 -0.258819 0.707107 0.707107 109.154 384.939)"
            width="1099"
          />
        </clipPath>
        <image
          height="2500"
          id="image0_3051_12573"
          width="3978"
          xlinkHref="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/marketing/hero-section-with-bottom-app-screenshot.png"
        />
      </defs>
    </svg>
  )

  const AcmeIcon: React.FC<IconSvgProps> = ({
    size = 32,
    width,
    height,
    ...props
  }) => (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      {...props}>
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )

  const navData: NavProps = {
    logo: <AcmeIcon size={34} />,
    brand: 'ACME',
    navActions: (
      <NavbarItem className="ml-2 flex! gap-2">
        <Button className="text-default-500" radius="full" variant="light">
          Login
        </Button>
        <Button
          className="bg-default-foreground text-background font-medium"
          color="secondary"
          endContent={<Icon icon="solar:alt-arrow-right-linear" />}
          radius="full"
          variant="flat">
          Get Started
        </Button>
      </NavbarItem>
    ),
    navMenuActions: (
      <>
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
      </>
    )
  }

  const data: heroSectionProps = {
    title: ' New onboarding experience',
    mainHead: 'Easiest way to',
    subHead: 'power global teams.',
    description:
      ' Acme makes running global teams simple. HR, Payroll, International Employment, contractor management and more.',

    actions: (
      <>
        <Button
          className="bg-default-foreground text-small text-background h-10 w-[163px] px-[16px] py-[10px] leading-5 font-medium"
          radius="full">
          Get Started
        </Button>
        <Button
          className="border-default-100 text-small h-10 w-[163px] border-1 px-[16px] py-[10px] leading-5 font-medium"
          endContent={
            <span className="bg-default-100 pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full">
              <Icon
                className="text-default-500 [&>path]:stroke-[1.5]"
                icon="solar:arrow-right-linear"
                width={16}
              />
            </span>
          }
          radius="full"
          variant="bordered">
          See our plans
        </Button>
      </>
    ),
    navbarActions: <BasicNavbar data={navData} />,
    fadeImgActions: (
      <FadeInImage
        alt="Gradient background"
        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
      />
    ),
    appActions: <AppScreenshotSkewed />
  }

  const OpenCollectiveIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        fill="none"
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g
          clipPath="url(#a)"
          clipRule="evenodd"
          fill="currentColor"
          fillRule="evenodd">
          <path d="M21.865 5.166A11.945 11.945 0 0 1 24 12.001c0 2.54-.789 4.895-2.135 6.834l-3.109-3.109A7.679 7.679 0 0 0 19.714 12a7.679 7.679 0 0 0-.958-3.725l3.109-3.109Z" />
          <path d="m18.834 2.135-3.108 3.109a7.714 7.714 0 1 0 0 13.513l3.108 3.108A11.946 11.946 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0c2.54 0 4.895.789 6.834 2.135Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  const PatreonIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        fill="none"
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g clipPath="url(#a)" fill="currentColor">
          <path d="M15.294 17.986c4.766 0 8.63-4.026 8.63-8.993C23.923 4.026 20.06 0 15.293 0c-4.766 0-8.63 4.026-8.63 8.993 0 4.967 3.864 8.993 8.63 8.993ZM4.218 0H0v23.991h4.218V0Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h24v24H0z" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  const DiscordIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}>
        <path
          d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const TwitterIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}>
        <path
          d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const GithubIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}>
        <path
          clipRule="evenodd"
          d="M22.39 6.27a11.947 11.947 0 0 0-4.367-4.367C16.184.83 14.177.293 12 .293c-2.177 0-4.185.537-6.023 1.61A11.946 11.946 0 0 0 1.609 6.27C.536 8.11 0 10.116 0 12.293c0 2.615.763 4.966 2.289 7.055 1.526 2.088 3.497 3.533 5.914 4.335.281.053.49.016.625-.109a.611.611 0 0 0 .203-.468l-.008-.844c-.005-.464-.008-.927-.008-1.39l-.36.062a4.49 4.49 0 0 1-.866.054 6.607 6.607 0 0 1-1.086-.109 2.427 2.427 0 0 1-1.047-.468 1.982 1.982 0 0 1-.688-.961l-.156-.36a3.904 3.904 0 0 0-.492-.796c-.224-.292-.45-.49-.68-.594l-.109-.078a1.146 1.146 0 0 1-.203-.188.859.859 0 0 1-.14-.219c-.032-.073-.006-.133.077-.18.084-.047.235-.07.454-.07l.312.047c.208.042.466.166.773.375.308.208.56.479.758.812.24.427.529.753.867.977.339.224.68.336 1.024.336.343 0 .64-.026.89-.078.25-.052.485-.13.703-.235.094-.698.35-1.234.766-1.61a10.705 10.705 0 0 1-1.602-.28 6.377 6.377 0 0 1-1.468-.61 4.208 4.208 0 0 1-1.258-1.047c-.333-.416-.607-.964-.82-1.64-.214-.678-.32-1.459-.32-2.344 0-1.26.411-2.334 1.234-3.219-.386-.948-.35-2.01.11-3.187.301-.094.75-.024 1.343.21.594.235 1.028.436 1.305.602.276.167.497.308.664.422.969-.27 1.969-.406 3-.406 1.03 0 2.031.135 3 .406l.594-.375c.406-.25.885-.479 1.437-.687.552-.209.974-.266 1.266-.172.468 1.177.51 2.24.125 3.187.822.886 1.234 1.959 1.234 3.219 0 .885-.107 1.669-.32 2.351-.214.683-.49 1.23-.828 1.641-.339.412-.76.758-1.266 1.039a6.388 6.388 0 0 1-1.469.61c-.474.124-1.007.219-1.601.281.541.469.812 1.208.812 2.219v3.296c0 .187.065.344.196.469.13.124.335.161.617.109 2.417-.802 4.388-2.247 5.914-4.336C23.237 17.26 24 14.907 24 12.293c0-2.177-.538-4.184-1.61-6.023Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  const NextJsIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        height={size || height}
        viewBox="0 0 256 256"
        width={size || width}
        {...props}>
        <path
          d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const NpmIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        height={height}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
      </svg>
    )
  }

  const NpmSmallIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="currentColor"
        focusable="false"
        height={height}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        width={width}
        {...props}>
        <path d="M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z" />
      </svg>
    )
  }

  // #E1251B
  const AdobeIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        aria-label="Adobe"
        fill="currentColor"
        focusable="false"
        height={height}
        viewBox="0 0 30 26"
        width={width}
        {...props}>
        <polygon points="19,0 30,0 30,26" />
        <polygon points="11.1,0 0,0 0,26" />
        <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8" />
      </svg>
    )
  }

  const YarnIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        height={height}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 496 512"
        width={width}
        {...props}>
        <path d="M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z" />
      </svg>
    )
  }

  const PnpmIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        height={height}
        role="img"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        width={width}
        {...props}>
        <title />
        <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" />
      </svg>
    )
  }

  const AstroIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height}
        width={width}
        {...props}>
        <path
          clipRule="evenodd"
          d="M16.986 23.22c-3.498 0-6.986 1.694-6.986 1.694s5.924-16.1 5.937-16.131c.181-.476.457-.783.844-.783h7.11c.386 0 .673.307.843.783l5.936 16.131s-2.843-1.695-6.985-1.695l-2.637-8.14c-.1-.395-.387-.662-.713-.662-.325 0-.614.268-.712.661l-2.637 8.141zm-.572 6.477h.001-.001zM15.3 24.378c-.532 1.751-.16 4.168 1.115 5.319l.017-.061a1.42 1.42 0 00.03-.116c.16-.73.762-1.195 1.524-1.173.741.021 1.135.392 1.25 1.22.042.307.046.62.05.933l.001.098c.01.707.195 1.361.585 1.952a3.4 3.4 0 001.515 1.279l-.018-.06a4.332 4.332 0 00-.03-.1c-.488-1.476-.137-2.49 1.16-3.356l.398-.261c.293-.19.585-.38.867-.586 1.022-.747 1.665-1.732 1.817-3.007a3.404 3.404 0 00-.162-1.547c-.076.045-.148.09-.218.134-.15.094-.29.182-.437.253-1.897.921-3.902 1.035-5.944.73-1.322-.197-2.599-.547-3.52-1.651z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  const NewNextJSIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height}
        width={width}
        {...props}>
        <mask
          height="26"
          id="nextjs-white_svg__a"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha'
          }}
          width="26"
          x="7"
          y="7">
          <path
            d="M20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13z"
            fill="#000"
          />
        </mask>
        <g mask="url(#nextjs-white_svg__a)">
          <path
            d="M20 32.567c6.94 0 12.567-5.627 12.567-12.567S26.94 7.433 20 7.433 7.433 13.06 7.433 20 13.06 32.567 20 32.567z"
            fill="#000"
            stroke="#fff"
            strokeWidth="0.867"
          />
          <path
            d="M28.596 29.753L16.987 14.8H14.8v10.396h1.75v-8.174l10.672 13.789c.482-.322.94-.676 1.374-1.058z"
            fill="url(#nextjs-white_svg__b)"
          />
          <path
            d="M25.344 14.8h-1.733v10.4h1.733V14.8z"
            fill="url(#nextjs-white_svg__c)"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="nextjs-white_svg__b"
            x1="22.744"
            x2="27.872"
            y1="23.828"
            y2="30.183">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="nextjs-white_svg__c"
            x1="24.478"
            x2="24.449"
            y1="14.8"
            y2="22.438">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  const RemixIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height}
        viewBox="0 0 40 40"
        width={width}
        {...props}>
        <path
          d="M29.397 26.388c.213 2.733.213 4.014.213 5.412h-6.322c0-.305.005-.583.01-.866.018-.878.036-1.794-.107-3.643-.188-2.708-1.354-3.31-3.497-3.31H9.75v-4.926h10.244c2.708 0 4.063-.823 4.063-3.005 0-1.917-1.355-3.08-4.063-3.08H9.75V8.15h11.373c6.13 0 9.177 2.896 9.177 7.521 0 3.46-2.144 5.716-5.04 6.092 2.445.489 3.874 1.88 4.137 4.625z"
          fill="currentColor"
        />
        <path
          d="M9.75 31.8v-3.672h6.685c1.116 0 1.359.828 1.359 1.322v2.35H9.75z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const ViteIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height}
        viewBox="0 0 40 40"
        width={width}
        {...props}>
        <path
          d="M31.881 11.61L20.886 31.563a.593.593 0 01-1.04.004L8.633 11.611c-.251-.446.125-.987.624-.897l11.007 1.997a.59.59 0 00.212 0l10.777-1.994c.497-.092.875.445.628.893z"
          fill="url(#vite_svg__paint0_linear_41_6732)"
        />
        <path
          d="M25.506 8.096l-8.137 1.618a.302.302 0 00-.241.28l-.5 8.578a.3.3 0 00.365.314l2.265-.531c.212-.05.404.14.36.356l-.673 3.345a.3.3 0 00.38.35l1.399-.43a.3.3 0 01.38.35l-1.07 5.255c-.067.328.364.507.543.226l.12-.189 6.63-13.428c.111-.225-.08-.481-.323-.433l-2.332.456a.301.301 0 01-.344-.381l1.522-5.355a.301.301 0 00-.345-.381z"
          fill="url(#vite_svg__paint1_linear_41_6732)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="vite_svg__paint0_linear_41_6732"
            x1="8.359"
            x2="22.306"
            y1="10.001"
            y2="28.665">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="vite_svg__paint1_linear_41_6732"
            x1="19.631"
            x2="22.178"
            y1="8.535"
            y2="25.757">
            <stop stopColor="#FFEA83" />
            <stop offset="0.083" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  const StorybookIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height}
        viewBox="0 0 512 512"
        width={width}
        {...props}>
        <g>
          <path
            d="M356.5,5.2L353.9,63c-0.1,3.2,3.7,5.2,6.3,3.2l22.6-17.1L401.9,64c2.5,1.7,5.8,0,6-3l-2.2-58.8l28.4-2.2   c14.7-1,27.3,10.8,27.3,25.6v460.8c0,14.7-12.3,26.3-26.9,25.6L91.1,496.6c-13.3-0.6-24.1-11.3-24.5-24.7l-16-422.3   c-0.8-14.2,9.9-26.3,24.1-27.1L356.2,4.7L356.5,5.2z M291,198.4c0,10,67.4,5.1,76.6-1.7c0-68.2-36.7-104.3-103.6-104.3   c-67.2,0-104.5,36.8-104.5,91.6c0,94.9,128,96.6,128,148.4c0,15-6.8,23.5-22.4,23.5c-20.5,0-28.8-10.4-27.7-46.1   c0-7.7-77.8-10.3-80.4,0c-5.7,86,47.6,110.9,108.7,110.9c59.6,0,106.1-31.7,106.1-89.1c0-101.7-130.1-99-130.1-149.3   c0-20.7,15.4-23.4,24.1-23.4c9.7,0,26.7,1.5,25.4,39.8L291,198.4z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }

  const CodeSandboxIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="none"
        height={height}
        viewBox="0 0 18 18"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path d="M3.24284 5.11427L8.63639 2.17808C8.92945 2.01854 9.28432 2.02264 9.57361 2.18889L14.7726 5.17673C15.011 5.3137 15.1579 5.56762 15.1579 5.84251V12.1884C15.1579 12.4639 15.0103 12.7183 14.7711 12.8551L9.38463 15.9346C9.1466 16.0707 8.85406 16.0696 8.61711 15.9316L3.22361 12.7912C2.9874 12.6537 2.8421 12.4009 2.8421 12.1276V5.7887C2.8421 5.50747 2.99584 5.24873 3.24284 5.11427Z" />
        <path
          clipRule="evenodd"
          d="M8.99649 9.06298V15.1165C9.10189 15.1165 9.17115 15.0936 9.26577 15.0396L14.113 12.2698C14.3044 12.1601 14.3824 11.9902 14.3824 11.7696V6.15302C14.3824 6.04235 14.3591 5.97615 14.3053 5.88373L9.15154 8.79576C9.05567 8.85054 8.99649 8.95253 8.99649 9.06298ZM11.6894 12.539C11.6894 12.6929 11.6317 12.7698 11.497 12.8468L9.88129 13.7701C9.76591 13.847 9.61201 13.8086 9.61201 13.6546V9.53835C9.61201 9.42824 9.7089 9.28555 9.80434 9.2306L13.4975 7.11477C13.6001 7.05573 13.6898 7.15029 13.6898 7.26865V9.46146C13.6898 9.5751 13.6362 9.67725 13.5359 9.73074L11.8817 10.6155C11.7814 10.669 11.6894 10.7711 11.6894 10.8848V12.539Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M3.61069 11.7696V6.15297C3.61069 5.93209 3.72667 5.72398 3.91845 5.61439L8.61177 2.95996C8.71289 2.90638 8.88105 2.88303 8.99648 2.88303C9.11191 2.88303 9.28993 2.91161 9.38119 2.95997L14.036 5.61439C14.1281 5.66881 14.2533 5.79415 14.3053 5.88368L9.15033 8.8074C9.05447 8.86219 8.99648 8.96624 8.99648 9.07668V15.1165C8.89108 15.1165 8.78334 15.0936 8.68872 15.0395L3.95692 12.3082C3.76514 12.1985 3.61069 11.9904 3.61069 11.7696ZM4.30315 7.26859V9.46139C4.30315 9.61524 4.34162 9.6922 4.4955 9.76915L6.11123 10.6924C6.26511 10.7694 6.30358 10.8848 6.30358 11.0002V12.539C6.30358 12.6928 6.34205 12.7698 6.49593 12.8467L8.11167 13.77C8.26553 13.847 8.38096 13.8085 8.38096 13.6546V9.53835C8.38096 9.42292 8.34249 9.30749 8.18863 9.23059L4.57243 7.15319C4.45703 7.07625 4.30315 7.11472 4.30315 7.26859ZM10.6122 4.65264L9.18881 5.46051C9.07343 5.53745 8.91953 5.53745 8.80415 5.46051L7.38074 4.65264C7.28705 4.59968 7.16683 4.59995 7.07298 4.65264L5.30337 5.65286C5.14949 5.7298 5.14949 5.88368 5.30337 5.96062L8.84257 7.99953C8.9373 8.05375 9.05566 8.05375 9.15033 7.99953L12.6896 5.96062C12.805 5.88368 12.8435 5.7298 12.6896 5.65286L10.92 4.65264C10.8261 4.59995 10.7059 4.59968 10.6122 4.65264Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  const JavascriptIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="currentColor"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" />
      </svg>
    )
  }

  const TypescriptIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="currentColor"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
      </svg>
    )
  }

  const GoogleIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        focusable="false"
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}>
        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
          <path
            d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            fill="#4285F4"
          />
          <path
            d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            fill="#34A853"
          />
          <path
            d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            fill="#FBBC05"
          />
          <path
            d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            fill="#EA4335"
          />
        </g>
      </svg>
    )
  }

  const FacebookIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="currentColor"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        {...props}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M21 3H3C1.9 3 1 3.9 1 5v18c0 1.1.9 2 2 2h9v-9h-3v-3h3v-2c0-2.76 2.24-5 5-5h3v3h-3c-.55 0-1 .45-1 1v2h4l-1 3h-3v9h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const AppleIcon: React.FC<IconSvgProps> = ({
    width = '1em',
    height = '1em',
    ...props
  }) => {
    return (
      <svg
        fill="currentColor"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        {...props}>
        <path
          d="M20.5 12.9c-.1-3.9 3-5.9 3-5.9c-1.6-2.2-4-2.5-4.9-2.6c-2.1-.2-4.1 1.2-5.1 1.2c-1 0-2.6-1.2-4.3-1.1c-1.7.1-3.3 1.1-4.3 2.7c-1.9 2.8-1.6 7.1-.8 9.5c1 2.9 2.9 5.1 5.1 6.5c1.3.8 2.7 1.4 4.1 1.5c1.4.1 2.8-.4 4.1-1.1c1.3-.7 2.5-1.7 3.4-3c1.1-1.5 1.8-3.3 1.9-5.2c0-.4.1-1.5-.1-2.9c-.1-1.2-.4-2.3-.8-3.2z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <div>
      <HeroSectionSkewed data={data} />
    </div>
  )
}
export default herosection_skewed
