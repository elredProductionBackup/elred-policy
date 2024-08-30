import React from "react";
import Image from "next/image";
import axios from 'axios'

const fetchUserDetails = async() =>{
  const result = await axios.post('https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b')
  return result.data;
}

const fetchMetadata = async() =>{
  const result = await axios.post("https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b")
  return result.data;
}

const Main = async() => {
const data = await fetchUserDetails();
const metaData = await fetchMetadata()

console.log(metaData,'metadata......')
  
  return (
    <div
      className="w-[375px] mx-auto h-lvh overflow-auto overflow-x-hidden"
      style={{
        backgroundImage: "url(/bg.png)", // Reference the image directly
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-[44px] bg-slate-200 px-[20px] flex items-center text-white bg-opacity-50 sticky top-0 z-10">
        Profile
      </div>
      <div className="flex items-center mt-[67px] ms-[26px]">
        <div className="relative w-[60px] h-[60px] border-2 rounded-full">
          <Image
            src={data?.result?.[0]?.dpURL}
            alt="User Image"
            layout="fill" // Make the image fill the parent div
            objectFit="cover" // This is applied as a style in the parent div
            className="rounded-full"
          />
        </div>
      </div>
      <div className="ms-[26px] mt-[10px] text-[24px] text-white flex items-center gap-[5.88px]">
        {data?.result?.[0]?.firstname} {data?.result?.[0]?.lastname} 
        <div>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1654 9L17.132 6.675L17.4154 3.6L14.407 2.91667L12.832 0.25L9.9987 1.46667L7.16536 0.25L5.59036 2.90833L2.58203 3.58333L2.86536 6.66667L0.832031 9L2.86536 11.325L2.58203 14.4083L5.59036 15.0917L7.16536 17.75L9.9987 16.525L12.832 17.7417L14.407 15.0833L17.4154 14.4L17.132 11.325L19.1654 9Z"
              fill="#147BFF"
            />
            <path
              d="M7.81536 12.3417L5.83203 10.3417C5.75478 10.2646 5.69349 10.173 5.65167 10.0722C5.60985 9.97138 5.58833 9.86331 5.58833 9.75417C5.58833 9.64503 5.60985 9.53696 5.65167 9.43615C5.69349 9.33533 5.75478 9.24376 5.83203 9.16667L5.89036 9.10833C6.21536 8.78333 6.7487 8.78333 7.0737 9.10833L8.41536 10.4583L12.707 6.15833C13.032 5.83333 13.5654 5.83333 13.8904 6.15833L13.9487 6.21667C14.2737 6.54167 14.2737 7.06667 13.9487 7.39167L9.01536 12.3417C8.6737 12.6667 8.1487 12.6667 7.81536 12.3417Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
      <div className="ms-[26px] text-white flex items-center capitalize">
        <div className="w-[25px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.140291 6.92777L0.141772 5.29453C0.141772 4.39615 0.937123 3.66115 1.92019 3.66115H4.95862V2.02571C4.95862 1.12474 5.67172 0.394531 6.56562 0.394531H9.78584C10.6734 0.394531 11.3928 1.1261 11.3928 2.02571V3.66115H14.4313C15.4143 3.66115 16.2186 4.39615 16.2186 5.29453V6.92777H0.140291ZM0.13881 8.56115H16.2185V15.0946C16.2185 15.9928 15.4143 16.7278 14.4312 16.7278H1.92013C0.937056 16.7278 0.132812 15.9928 0.132812 15.0946L0.13881 8.56115ZM6.56704 2.0277V3.66108H9.78429V2.0277H6.56704ZM6.56704 8.56115V10.1945H9.78429V8.56115H6.56704Z"
              fill="white"
            />
          </svg>
        </div>
        {data?.result?.[0]?.title?.[0]?.value} 
      </div>
      <div className="ms-[26px] text-white flex items-center">
        <div className="w-[25px]">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7.54545C13 12.6364 7 17 7 17C7 17 1 12.6364 1 7.54545C1 5.80949 1.63214 4.14463 2.75736 2.91712C3.88258 1.68961 5.4087 1 7 1C8.5913 1 10.1174 1.68961 11.2426 2.91712C12.3679 4.14463 13 5.80949 13 7.54545Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.00094 9.72692C8.41022 9.72692 9.55267 8.75008 9.55267 7.5451C9.55267 6.34011 8.41022 5.36328 7.00094 5.36328C5.59166 5.36328 4.44922 6.34011 4.44922 7.5451C4.44922 8.75008 5.59166 9.72692 7.00094 9.72692Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {data?.result?.[0]?.address?.city}, {data?.result?.[0]?.address?.country} 
      </div>
      {/* Mini card starts here  */}
      <div
        className="w-[56px] h-[85px] rounded-[2px] border-[1.5px] mt-[79px] ms-[26px] border-[#C5C5C5] flex flex-col items-center cursor-pointer"
        style={{
          backgroundImage: "url(/bg.png)", // Reference the image directly
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={data?.result?.[0]?.dpURL}
          alt="mini"
          width={16}
          height={16}
          className="mt-[5px] rounded-full border"
        />
        <div className="text-white font-[700] mt-[3px] text-[5px]"> {data?.result?.[0]?.firstname}</div>
        <div className="text-white text-[3px] font-[500]">{data?.result?.[0]?.lastname}</div>
        <div className="text-white text-[3px] font-[500] mt-[3px] capitalize">{data?.result?.[0]?.title?.[0]?.value} </div>
        <div className="text-white text-[3px] font-[500] mt-[1px]">elRed</div>
        <div className="text-white text-[3px] font-[500] ">{data?.result?.[0]?.address?.city}, {data?.result?.[0]?.address?.country} </div>
        <div className="mt-[5.6px] flex gap-[1.8px] ">
          <Image src={"/icon1.png"} width={6} height={6} />
          <Image src={"/icon1.png"} width={6} height={6} />
          <Image src={"/icon1.png"} width={6} height={6} />
          <div className="h-[6px] w-[6px] rounded-full bg-white bg-opacity-40 text-[2.75px] text-gray flex items-center justify-center">
            +2
          </div>
        </div>
        <Image src={"/icon1.png"} width={6} height={6} className="mt-[1.5px]" />
        {/* Bottom icons starts here in mini card  */}
        <div className="flex gap-[2.2px] mt-[2px]">
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_210)">
              <rect
                x="-0.000152588"
                width="7.00434"
                height="7.00434"
                rx="2"
                fill="white"
                fill-opacity="0.2"
              />
            </g>
            <path
              d="M1.31235 2.74695L3.43235 3.82504C3.45362 3.83585 3.47724 3.84149 3.5012 3.84149C3.52517 3.84149 3.54879 3.83585 3.57005 3.82504L5.69006 2.74715V4.61983C5.69007 4.78135 5.62687 4.93675 5.51343 5.05415C5.39998 5.17155 5.24489 5.24205 5.07997 5.2512L5.04335 5.25217H1.95906C1.79387 5.25218 1.63494 5.19039 1.51487 5.07946C1.3948 4.96854 1.32269 4.81689 1.31334 4.65563L1.31235 4.61983V2.74695ZM1.95906 1.75H5.04335C5.20854 1.74999 5.36747 1.81178 5.48754 1.92271C5.60761 2.03363 5.67971 2.18528 5.68907 2.34654L5.69006 2.38234V2.41814L3.5012 3.53105L1.31235 2.41814V2.38234C1.31234 2.22082 1.37554 2.06542 1.48898 1.94802C1.60243 1.83062 1.75752 1.76012 1.92244 1.75097L1.95906 1.75H5.04335H1.95906Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_2_210"
                x="-6.00015"
                y="-6"
                width="19.0043"
                height="19.0043"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_210"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_210"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_213)">
              <rect
                x="0.19516"
                width="7.00434"
                height="7.00434"
                rx="2"
                fill="white"
                fill-opacity="0.2"
              />
            </g>
            <path
              d="M2.79148 1.85223L3.07429 1.76703C3.16763 1.73895 3.268 1.74577 3.35668 1.78619C3.44536 1.82662 3.51629 1.8979 3.55625 1.98674L3.75452 2.42734C3.78893 2.50378 3.79853 2.58907 3.78195 2.67123C3.76537 2.75339 3.72346 2.82831 3.6621 2.88545L3.36031 3.16644C3.31987 3.20481 3.35053 3.35435 3.49829 3.61025C3.64619 3.8663 3.76051 3.96755 3.81322 3.95179L4.20859 3.83099C4.28874 3.8065 4.37454 3.80767 4.45398 3.83436C4.53342 3.86105 4.60251 3.9119 4.65157 3.9798L4.93336 4.37007C4.99027 4.44888 5.01663 4.54565 5.00753 4.64241C4.99842 4.73917 4.95448 4.82934 4.88386 4.89616L4.66602 5.10231C4.5957 5.16886 4.50897 5.21557 4.41469 5.23769C4.3204 5.25981 4.22193 5.25654 4.12931 5.22822C3.67291 5.0886 3.25022 4.67426 2.85558 3.99104C2.46005 3.30679 2.31069 2.72964 2.41479 2.25811C2.43579 2.16309 2.48176 2.0754 2.54797 2.00405C2.61419 1.93271 2.69824 1.8803 2.79148 1.85223Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_2_213"
                x="-5.80484"
                y="-6"
                width="19.0043"
                height="19.0043"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_213"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_213"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_216)">
              <rect
                x="0.386719"
                width="7.00434"
                height="7.00434"
                rx="2"
                fill="white"
                fill-opacity="0.2"
              />
            </g>
            <g clip-path="url(#clip0_2_216)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.88763 5.30705C3.88763 5.30705 5.36511 4.32206 5.36511 3.17291C5.36511 2.78106 5.20945 2.40526 4.93237 2.12818C4.65529 1.8511 4.27949 1.69543 3.88763 1.69543C3.49578 1.69543 3.11998 1.8511 2.8429 2.12818C2.56582 2.40526 2.41016 2.78106 2.41016 3.17291C2.41016 4.32206 3.88763 5.30705 3.88763 5.30705ZM4.37952 3.1723C4.37952 3.4443 4.15902 3.6648 3.88702 3.6648C3.61503 3.6648 3.39453 3.4443 3.39453 3.1723C3.39453 2.90031 3.61503 2.67981 3.88702 2.67981C4.15902 2.67981 4.37952 2.90031 4.37952 3.1723Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_216"
                x="-5.61328"
                y="-6"
                width="19.0043"
                height="19.0043"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_216"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_216"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2_216">
                <rect
                  width="3.93994"
                  height="3.93994"
                  fill="white"
                  transform="translate(1.91797 1.53125)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_223)">
              <rect
                x="0.804535"
                width="7.00434"
                height="7.00434"
                rx="2"
                fill="white"
                fill-opacity="0.2"
              />
            </g>
            <path
              d="M3.37129 4.19541H2.21417C2.14064 3.97478 2.10141 3.74433 2.10141 3.50407C2.10141 3.26381 2.14064 3.03336 2.21417 2.81273H3.37129C3.34188 3.03336 3.32717 3.26381 3.32717 3.50407C3.32717 3.74433 3.34188 3.97478 3.37129 4.19541ZM2.31713 4.45527C2.62111 5.08774 3.21929 5.55845 3.93514 5.67612C3.6998 5.4555 3.51348 5.02891 3.40561 4.45527H2.31713ZM3.93514 1.33203C3.21928 1.44971 2.62603 1.92039 2.31713 2.55289H3.41542C3.51347 1.97431 3.70958 1.54776 3.93513 1.33203H3.93514ZM3.68017 4.45527C3.82727 5.19072 4.10183 5.57806 4.30776 5.57806C4.51369 5.57806 4.78825 5.19074 4.93535 4.45527H3.68017ZM4.93045 2.55289C4.78335 1.81743 4.50879 1.43009 4.30775 1.43009C4.10672 1.43009 3.82726 1.81741 3.68016 2.55289H4.93044H4.93045ZM3.59192 3.50408C3.59192 3.74434 3.60662 3.97479 3.64096 4.19542H4.98439C5.01381 3.97967 5.03344 3.74923 5.03344 3.50408C5.03344 3.29815 5.01873 3.06771 4.98439 2.81274H3.64096C3.60666 3.03337 3.59192 3.26382 3.59192 3.50408ZM4.67549 5.67612C5.39135 5.55844 5.99441 5.08777 6.29349 4.45527L5.19521 4.4553C5.09226 5.03384 4.90105 5.46042 4.6755 5.67616L4.67549 5.67612ZM6.29349 2.55289C5.98459 1.92041 5.39133 1.4497 4.67549 1.33203C4.91083 1.55266 5.09715 1.97925 5.20502 2.55289H6.29349ZM6.39644 2.81275H5.23932C5.26873 3.06772 5.28836 3.28834 5.28836 3.50409C5.28836 3.74434 5.27366 3.9748 5.24914 4.19542H6.40625C6.47489 3.97968 6.51412 3.74434 6.51412 3.50409C6.51412 3.26383 6.46508 3.03338 6.39644 2.81275H6.39644Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_2_223"
                x="-5.19547"
                y="-6"
                width="19.0043"
                height="19.0043"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_223"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_223"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/* Share starts here  */}
      <div className="mx-[16px] mt-[26px] bg-white bg-opacity-20 h-[87px] rounded-[16px] flex flex-col items-center justify-center">
        <div className="w-[36px] h-[36px] rounded-full bg-white bg-opacity-40 flex items-center justify-center cursor-pointer">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.8833 12.0083 16.7623 12.025 16.637C12.0417 16.5123 12.0667 16.4 12.1 16.3L5.05 12.2C4.76667 12.45 4.45 12.6457 4.1 12.787C3.75 12.929 3.38333 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.38333 7 3.75 7.07067 4.1 7.212C4.45 7.354 4.76667 7.55 5.05 7.8L12.1 3.7C12.0667 3.6 12.0417 3.48767 12.025 3.363C12.0083 3.23767 12 3.11667 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6167 6 14.25 5.929 13.9 5.787C13.55 5.64567 13.2333 5.45 12.95 5.2L5.9 9.3C5.93333 9.4 5.95833 9.51233 5.975 9.637C5.99167 9.76233 6 9.88333 6 10C6 10.1167 5.99167 10.2373 5.975 10.362C5.95833 10.4873 5.93333 10.6 5.9 10.7L12.95 14.8C13.2333 14.55 13.55 14.354 13.9 14.212C14.25 14.0707 14.6167 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-white">Share</div>
      </div>

      {/* Ratings start from here */}
      <div className="mx-[16px] mt-[36px] bg-white bg-opacity-20 h-[168px] rounded-[16px] relative">
        {/* <div className="absolute -top-6 bg-white bg-opacity-20 rounded-full w-[46px] h-[46px] flex items-center justify-center"> */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 rounded-full w-[46px] h-[46px] flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 23.4507L20.7921 27.7444C21.0639 27.9221 21.3787 28.0106 21.6974 27.999C22.016 27.9874 22.3244 27.8762 22.5843 27.6791C22.8441 27.4821 23.0439 27.208 23.1588 26.8908C23.2737 26.5737 23.2987 26.2275 23.2306 25.8953L21.4302 17.8185L27.4363 12.374C27.6791 12.1544 27.8547 11.8625 27.9407 11.5356C28.0267 11.2088 28.019 10.8619 27.9187 10.5398C27.8184 10.2176 27.63 9.9348 27.3777 9.72772C27.1255 9.52064 26.8209 9.39875 26.5032 9.37772L18.5987 8.6758L15.5055 1.03958C15.3753 0.729933 15.1639 0.46704 14.8968 0.282589C14.6297 0.0981387 14.3182 0 14 0C13.6818 0 13.3704 0.0981387 13.1032 0.282589C12.8361 0.46704 12.6247 0.729933 12.4945 1.03958L9.40134 8.65806L1.49679 9.35999C1.17907 9.38101 0.874514 9.5029 0.622274 9.70998C0.370034 9.91706 0.181641 10.1999 0.0813164 10.522C-0.0190083 10.8442 -0.0266782 11.191 0.0592923 11.5179C0.145263 11.8447 0.320944 12.1367 0.563749 12.3562L6.56984 17.8008L4.76942 25.8813C4.7011 26.2135 4.72589 26.5599 4.84071 26.8772C4.95554 27.1945 5.15532 27.4688 5.4152 27.666C5.67508 27.8631 5.98359 27.9744 6.30234 27.9861C6.62109 27.9977 6.93601 27.9091 7.20791 27.7313L14 23.4507Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="pt-[16px] ms-[16px] font-[500] text-[18px] text-white">
          Ratings
        </div>
        <div className="mt-[16px] mx-[24px] flex gap-[31px]">
          <div className="text-[20px] font-[500] text-white">57</div>
          <div className="text-[12px] text-white font-[500]">
            Has ethical code of conduct and is safe to do bussines with
          </div>
        </div>
        <hr className="mx-[24px] mt-[8px] border-[0.4px] border-white border-opacity-30" />
        <div className="mt-[16px] mx-[24px] flex items-center gap-[31px]">
          <div className="text-[20px] font-[500] text-white">27</div>
          <div className="text-[12px] text-white font-[500]">
            Met In real life/Video call
          </div>
        </div>
      </div>

      {/* Comments section started */}
      <div className="mx-[16px] mt-[15px] p-[16px] bg-white bg-opacity-20 rounded-[16px] mb-[26px]">
        <div className="flex items-center justify-between text-white">
          <div className="font-[500]">Comments</div>
          <div className="font-[500]">See all</div>
        </div>
        <div className="mt-[16px] flex items-center gap-[8px]">
          <Image src={"/c1.png"} alt="c1" height={42} width={42} />
          <div className="text-white text-opacity-60 text-[14px]">
            <span className="text-white">Gwen Stacy</span> See you in the next
            event <span className="text-white">@roger vaccaro</span>
          </div>
        </div>
        <div className="w-[134px] flex text-white text-opacity-60 text-[13px] font-[500] justify-between ms-[40px] mt-[6px]">
          <div>1s</div>
          <div>241 likes</div>
          <div>Reply</div>
        </div>
        <div className="mt-[22px] flex items-center gap-[8px]">
          <Image src={"/c2.png"} alt="c1" height={42} width={42} />
          <div className="text-white text-opacity-60 text-[14px]">
            <span className="text-white">Gwen Stacy</span> Never judge a book by
            its cover
          </div>
        </div>
        <div className="w-[134px] flex text-white text-opacity-60 text-[13px] font-[500] justify-between ms-[40px] mt-[6px]">
          <div>1s</div>
          <div>241 likes</div>
          <div>Reply</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
