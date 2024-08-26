import React from "react";
import  Svg,{ Circle, Path, Rect } from 'react-native-svg'

export const AddPost = ({color='#484848'}: {color: string}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path d="M4 8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8Z" stroke={color} strokeWidth="2"/>
    <Path d="M16 10.667L16 21.3337" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    <Path d="M21.3333 16L10.6666 16" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
  </Svg>
)

export const AddItemSquareItem = ({color='#484848'}: {color: string}) => (
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2.5C4.29086 2.5 2.5 4.29086 2.5 6.5V13.5C2.5 15.7091 4.29086 17.5 6.5 17.5H13.5C15.7091 17.5 17.5 15.7091 17.5 13.5V6.5C17.5 4.29086 15.7091 2.5 13.5 2.5H6.5ZM9 5.83333V9L5.83333 9V11H9L9 14.1667H11L11 11H14.1667V9H11V5.83333H9Z" fill={color}/>
</Svg>
)
export const ArrowLeft = ({size=24, color='#484848'}: {size: number, color: string}) => (
<Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
<Path d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z" fill={color}/>
</Svg>
)

export const AskQuestion = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
    <Path fillRule="evenodd" clipRule="evenodd" d="M15.4776 0C14.8335 0 14.3014 0.269499 13.7978 0.653733C13.3207 1.01776 12.7909 1.54756 12.1556 2.1829L6.67473 7.66374C6.25384 8.08393 5.92105 8.41617 5.71696 8.84083C5.51286 9.26548 5.46131 9.73289 5.39612 10.324L5.37843 10.4838C5.25649 11.581 5.15597 12.4853 5.17898 13.1977C5.20304 13.9428 5.36405 14.6252 5.89744 15.1586C6.43084 15.692 7.11328 15.853 7.85833 15.8771C8.57071 15.9001 9.47506 15.7996 10.5722 15.6776L10.7321 15.6599C11.3232 15.5947 11.7906 15.5432 12.2152 15.3391C12.6399 15.135 12.9721 14.8022 13.3923 14.3813L18.8731 8.90043C19.5085 8.26512 20.0383 7.73536 20.4023 7.25824C20.7866 6.75463 21.0561 6.22256 21.0561 5.57843C21.0561 4.9343 20.7866 4.40222 20.4023 3.89862C20.0383 3.4215 19.5085 2.89174 18.8732 2.25644L18.7997 2.18293C18.1643 1.54757 17.6346 1.01777 17.1574 0.653733C16.6538 0.269499 16.1218 0 15.4776 0ZM18.3048 7.34491L13.7111 2.75128C14.1168 2.35162 14.4305 2.05772 14.7077 1.84627C15.0779 1.56383 15.2933 1.5 15.4776 1.5C15.6619 1.5 15.8774 1.56383 16.2476 1.84627C16.6351 2.1419 17.0941 2.59867 17.7757 3.28033C18.4574 3.96199 18.9142 4.42101 19.2098 4.80849C19.4922 5.17866 19.5561 5.39413 19.5561 5.57843C19.5561 5.76272 19.4922 5.97819 19.2098 6.34836C18.9983 6.62551 18.7044 6.93927 18.3048 7.34491ZM12.6492 3.81066L17.2454 8.40685L12.4039 13.2483C11.8765 13.7758 11.7307 13.9077 11.5655 13.9872C11.4002 14.0666 11.2061 14.098 10.4647 14.1803C9.29475 14.3103 8.49843 14.397 7.90674 14.3779C7.33517 14.3594 7.10441 14.2443 6.9581 14.098C6.81179 13.9516 6.69665 13.7209 6.6782 13.1493C6.65909 12.5576 6.74571 11.7613 6.87571 10.5913C6.95808 9.84997 6.98947 9.65589 7.06891 9.49061C7.14835 9.32533 7.28029 9.17957 7.80773 8.65213L12.6492 3.81066Z" fill={color}/>
    <Path d="M7.75899 2.67846C8.17317 2.6735 8.50491 2.33371 8.49995 1.91953C8.49498 1.50534 8.15519 1.17361 7.74101 1.17857C5.31449 1.20766 3.64894 1.34043 2.37024 2.26946C1.88209 2.62412 1.45281 3.0534 1.09815 3.54155C0.512324 4.34787 0.250006 5.29225 0.123728 6.45779C-1.45286e-05 7.59992 -8.0335e-06 9.03953 1.32337e-07 10.8761V10.9666C-8.0335e-06 12.8031 -1.45286e-05 14.2427 0.123728 15.3848C0.250006 16.5504 0.512324 17.4948 1.09815 18.3011C1.45281 18.7892 1.88209 19.2185 2.37024 19.5732C3.17656 20.159 4.12094 20.4213 5.28648 20.5476C6.42859 20.6713 7.86817 20.6713 9.70465 20.6713H9.79527C11.6318 20.6713 13.0714 20.6713 14.2135 20.5476C15.3791 20.4213 16.3234 20.159 17.1298 19.5732C17.6179 19.2185 18.0472 18.7892 18.4018 18.3011C19.3309 17.0224 19.4637 15.3568 19.4927 12.9303C19.4977 12.5161 19.166 12.1763 18.7518 12.1714C18.3376 12.1664 17.9978 12.4981 17.9928 12.9123C17.9629 15.4131 17.7945 16.585 17.1883 17.4194C16.9262 17.7802 16.6089 18.0975 16.2481 18.3596C15.7401 18.7287 15.0899 18.9439 14.052 19.0563C13 19.1703 11.6416 19.1713 9.75 19.1713C7.85843 19.1713 6.49999 19.1703 5.44804 19.0563C4.41013 18.9439 3.75992 18.7287 3.25191 18.3596C2.89111 18.0975 2.57382 17.7802 2.31168 17.4194C1.94259 16.9114 1.72745 16.2612 1.615 15.2233C1.50103 14.1713 1.5 12.8129 1.5 10.9213C1.5 9.02974 1.50103 7.6713 1.615 6.61936C1.72745 5.58144 1.94259 4.93123 2.31168 4.42322C2.57382 4.06242 2.89111 3.74513 3.25191 3.48299C4.08627 2.8768 5.25819 2.70844 7.75899 2.67846Z" fill={color}/>
  </Svg>
)

export const Cabinet = ({color='#33363F'}: {color: string}) => (
  <Svg width="35" height="33" viewBox="0 0 35 21" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M18 22C11.9249 22 7 17.0751 7 11C7 4.92487 11.9249 0 18 0C24.0751 0 29 4.92487 29 11C29 17.0751 24.0751 22 18 22ZM25.3995 16.1246C26.4086 14.6703 27 12.9042 27 11C27 6.02943 22.9706 2 18 2C13.0294 2 9 6.02943 9 11C9 12.9042 9.59138 14.6703 10.6005 16.1246C11.726 14.6381 14.3706 14 18 14C21.6294 14 24.274 14.6381 25.3995 16.1246ZM23.9647 17.7398C23.672 16.6874 21.5694 16 18 16C14.4306 16 12.328 16.6874 12.0353 17.7398C13.6233 19.1462 15.7119 20 18 20C20.2881 20 22.3767 19.1462 23.9647 17.7398ZM18 14C15.7609 14 14 12.4274 14 9C14 6.75575 15.5791 5 18 5C20.4142 5 22 6.92159 22 9.2C22 12.4796 20.2181 14 18 14ZM16 9C16 11.2693 16.8182 12 18 12C19.1777 12 20 11.2984 20 9.2C20 7.95042 19.2157 7 18 7C16.7337 7 16 7.81583 16 9Z" fill={color}/>
  </Svg>
)

export const CallingTube = () => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
    <Path d="M9.77503 1.60039C10.4637 1.60039 10.7685 1.60099 11.0199 1.6235C13.8145 1.87371 16.0293 4.08853 16.2796 6.88317C16.3021 7.13454 16.3027 7.43933 16.3027 8.12803V8.91999C16.3027 9.25136 16.5713 9.51999 16.9027 9.51999C17.234 9.51999 17.5027 9.25136 17.5027 8.91999V8.08768C17.5027 7.45016 17.5027 7.08786 17.4748 6.77616C17.1728 3.40331 14.4997 0.73026 11.1269 0.428281C10.8152 0.400372 10.4529 0.400379 9.8153 0.400391H8.98307C8.6517 0.400391 8.38307 0.669022 8.38307 1.00039C8.38307 1.33176 8.6517 1.60039 8.98307 1.60039L9.77503 1.60039Z" fill="#F7F9FB"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M5.07245 2.62063C4.23077 1.84724 2.93705 1.84724 2.09538 2.62063C2.06091 2.6523 2.02412 2.6891 1.97634 2.73689L1.25834 3.4549C0.535845 4.17739 0.23255 5.21892 0.4542 6.21635C1.71178 11.8754 6.1314 16.2951 11.7905 17.5526C12.7879 17.7743 13.8295 17.471 14.5519 16.7485L15.2699 16.0306C15.3177 15.9828 15.3545 15.9459 15.3862 15.9115C16.1596 15.0698 16.1596 13.7761 15.3862 12.9344C15.3545 12.8999 15.3177 12.8631 15.2699 12.8153L14.0945 11.6399C13.2784 10.8238 12.046 10.5904 10.988 11.0516C10.3823 11.3156 9.67675 11.1819 9.20954 10.7147L7.2921 8.7973C6.82489 8.3301 6.69127 7.62454 6.95529 7.01886C7.41645 5.96089 7.18306 4.72846 6.36697 3.91238L5.19151 2.73691C5.14372 2.68911 5.10692 2.65231 5.07245 2.62063ZM2.90731 3.50425C3.28989 3.15271 3.87794 3.15271 4.26052 3.50425C4.27373 3.51638 4.29103 3.5335 4.35189 3.59435L5.51845 4.76091C5.98565 5.22811 6.11927 5.93367 5.85525 6.53935C5.39409 7.59732 5.62748 8.82975 6.44357 9.64583L8.36101 11.5633C9.1771 12.3794 10.4095 12.6128 11.4675 12.1516C12.0732 11.8876 12.7787 12.0212 13.2459 12.4884L14.4125 13.655C14.4733 13.7158 14.4905 13.7331 14.5026 13.7463C14.8541 14.1289 14.8541 14.717 14.5026 15.0995C14.4905 15.1127 14.4733 15.1301 14.4125 15.1909L13.7034 15.9C13.271 16.3324 12.6477 16.5139 12.0508 16.3812C6.84655 15.2247 2.78213 11.1603 1.62562 5.95603C1.49298 5.35912 1.67449 4.73581 2.10686 4.30343L2.81594 3.59435C2.87679 3.5335 2.8941 3.51638 2.90731 3.50425Z" fill="#F7F9FB"/>
    <Path d="M9.54867 3.22882C9.21729 3.22882 8.94866 3.49745 8.94866 3.82882C8.94866 4.16019 9.21729 4.42882 9.54867 4.42882H10.0012C10.0099 4.42882 10.018 4.42882 10.0255 4.42882C10.0781 4.42883 10.1025 4.42888 10.1228 4.42917C11.9625 4.45551 13.4475 5.94047 13.4738 7.78013C13.4741 7.80339 13.4741 7.83196 13.4741 7.90175V8.3543C13.4741 8.68567 13.7428 8.9543 14.0741 8.9543C14.4055 8.9543 14.6741 8.68567 14.6741 8.3543V7.89595C14.6741 7.88817 14.6741 7.88078 14.6741 7.87373C14.6741 7.82439 14.6741 7.79182 14.6737 7.76294C14.638 5.27399 12.629 3.26494 10.14 3.22929C10.107 3.22882 10.0692 3.22882 10.007 3.22882H9.54867Z" fill="#F7F9FB"/>
  </Svg>
)

export const ChartFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V11ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13Z" fill={color}/>
  </Svg>
)


export const ChevronDown = () => (
  <Svg width="6" height="4" viewBox="0 0 6 4" fill="none" >
    <Path fillRule="evenodd" clipRule="evenodd" d="M0.168746 0.0910325C0.35697 -0.0577912 0.625892 -0.0202002 0.769401 0.174996L2.90789 3.0837C2.96113 3.12025 3.03887 3.12025 3.09211 3.0837L5.2306 0.174996C5.37411 -0.0202002 5.64303 -0.0577912 5.83125 0.0910325C6.01948 0.239857 6.05573 0.518739 5.91222 0.713935L3.76635 3.63268C3.74131 3.66674 3.70341 3.71388 3.65092 3.75898C3.27694 4.08034 2.72307 4.08034 2.34908 3.75898C2.29659 3.71388 2.25869 3.66674 2.23365 3.63268L0.0877812 0.713935C-0.0557273 0.518739 -0.0194782 0.239856 0.168746 0.0910325Z" fill="#484848"/>
  </Svg>
)

export const CloseScreenButton = ({color='#33363F'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 23C10.5555 23 9.12506 22.7155 7.79048 22.1627C6.4559 21.6099 5.24327 20.7996 4.22182 19.7782C3.20038 18.7567 2.39013 17.5441 1.83732 16.2095C1.28452 14.8749 1 13.4445 1 12C1 10.5555 1.28452 9.12506 1.83733 7.79048C2.39013 6.4559 3.20038 5.24327 4.22183 4.22182C5.24327 3.20038 6.4559 2.39013 7.79048 1.83732C9.12507 1.28452 10.5555 1 12 1C13.4445 1 14.8749 1.28452 16.2095 1.83733C17.5441 2.39013 18.7567 3.20038 19.7782 4.22183C20.7996 5.24327 21.6099 6.4559 22.1627 7.79048C22.7155 9.12507 23 10.5555 23 12C23 13.4445 22.7155 14.8749 22.1627 16.2095C21.6099 17.5441 20.7996 18.7567 19.7782 19.7782C18.7567 20.7996 17.5441 21.6099 16.2095 22.1627C14.8749 22.7155 13.4445 23 12 23L12 23Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M8.33331 8.3335L15.6666 15.6668" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M15.6667 8.3335L8.33335 15.6668" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
) 

export const DeleteItem = () => (
<Svg width="22" height="34" viewBox="0 0 22 34" fill="none">
<Rect width="22" height="34" rx="2.5" fill="#484848"/>
<Path d="M17 11L5 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5 11L17 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
)

export const FavoriteFill = ({color='#222222'}: {color: string}) => ( <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" fill={color} stroke={color} strokeWidth="2"/>
  </Svg>
)

export const FolderDel = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path d="M14.2393 18.7731L18.6871 14.5117M18.687 18.7731L14.2393 14.5117" stroke={color} strokeWidth="2"/>
    <Path d="M17.7976 12.381V11.6935C17.7976 9.80792 17.7976 8.86511 17.2118 8.27932C16.626 7.69354 15.6832 7.69354 13.7976 7.69354H13.1775C12.3841 7.69354 11.9873 7.69354 11.6285 7.54938C11.2697 7.40523 10.9832 7.13077 10.4103 6.58187L10.0064 6.19496C9.48895 5.69918 9.23021 5.45129 8.91159 5.30949C8.86686 5.28959 8.82141 5.27133 8.77533 5.25475C8.44717 5.13672 8.08885 5.13672 7.3722 5.13672V5.13672C5.67284 5.13672 4.82316 5.13672 4.26094 5.61987C4.18455 5.6855 4.11324 5.75682 4.0476 5.8332C3.56445 6.39542 3.56445 7.2451 3.56445 8.94446V13.0685C3.56445 14.9542 3.56445 15.897 4.15024 16.4827C4.73603 17.0685 5.67884 17.0685 7.56445 17.0685H11.5706" stroke={color} strokeWidth="2"/>
  </Svg>
)

export const ForwardBack = ({color='#33363F'}: {color: string}) => (
  <Svg width="26" height="25" viewBox="0 0 22 20" fill="none">
    <Path d="M13 17L5 9L13 1" stroke={color} strokeWidth="2"/>
    <Path d="M21 17L13 9L21 1" stroke={color} strokeWidth="2"/>
  </Svg>
)

export const MapPlace = () => (
  <Svg width="12" height="15" viewBox="0 0 12 15" fill="none">
    <Path d="M8.22067 5.47905C8.39389 5.26408 8.36004 4.94939 8.14507 4.77617C7.9301 4.60295 7.61541 4.6368 7.44219 4.85177L6.09485 6.52389C5.8182 6.86723 5.64364 7.08195 5.49836 7.21762C5.43009 7.28137 5.38648 7.30974 5.36142 7.32228C5.34276 7.33162 5.3361 7.33157 5.33252 7.33155H5.33155C5.32797 7.33157 5.32131 7.33162 5.30265 7.32228C5.27759 7.30974 5.23398 7.28137 5.16571 7.21762C5.02044 7.08194 4.84588 6.86722 4.56923 6.52389L4.22164 6.09252C4.04842 5.87755 3.73373 5.8437 3.51876 6.01692C3.30379 6.19013 3.26994 6.50482 3.44316 6.7198L3.81245 7.17811C4.06073 7.48629 4.27978 7.75818 4.48334 7.94829C4.7019 8.1524 4.97363 8.33131 5.33204 8.33131C5.69044 8.33131 5.96217 8.1524 6.18073 7.94829C6.3843 7.75818 6.60335 7.48628 6.85163 7.1781L8.22067 5.47905Z" fill="#484848"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M5.83191 0C2.57715 0 0 2.82783 0 6.23761C0 7.33116 0.543272 8.61887 1.22679 9.82729C1.92138 11.0553 2.8079 12.2812 3.58515 13.2723L3.61108 13.3054C3.99045 13.7892 4.31364 14.2014 4.62704 14.4861C4.96895 14.7966 5.34599 15 5.83191 15C6.31784 15 6.69488 14.7966 7.03679 14.4861C7.35019 14.2014 7.67338 13.7892 8.05276 13.3054L8.07868 13.2723C8.85593 12.2812 9.74245 11.0553 10.437 9.82729C11.1206 8.61887 11.6638 7.33116 11.6638 6.23761C11.6638 2.82783 9.08668 0 5.83191 0ZM0.999757 6.23761C0.999757 3.30967 3.19708 0.999757 5.83191 0.999757C8.46675 0.999757 10.6641 3.30967 10.6641 6.23761C10.6641 7.05508 10.2378 8.14893 9.56684 9.33508C8.90698 10.5017 8.05419 11.6834 7.29197 12.6554C6.87943 13.1814 6.60781 13.5251 6.36457 13.746C6.14274 13.9475 5.99466 14.0002 5.83191 14.0002C5.66917 14.0002 5.52109 13.9475 5.29926 13.746C5.05602 13.5251 4.7844 13.1814 4.37186 12.6554C3.60964 11.6834 2.75685 10.5017 2.09699 9.33508C1.42607 8.14893 0.999757 7.05508 0.999757 6.23761Z" fill="#484848"/>
  </Svg>
)

export const Message = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="18" viewBox="0 0 22 18" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M2 0H20C21.1046 0 22 0.895432 22 2V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V2C0 0.895432 0.89543 0 2 0ZM2 6.6181V16H20V6.61853L11 11.1185L2 6.6181ZM2 4.38199L11 8.88246L20 4.38248V2H2V4.38199Z" fill={color}/>
  </Svg>
)

export const MessageFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z" fill={color}/>
  </Svg>
)

export const MyAnswersList = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
    <Path fillRule="evenodd" clipRule="evenodd" d="M3.66418 7.51099C3.99908 5.75204 4.8469 4.07081 6.20618 2.70982C9.81473 -0.903275 15.6657 -0.903275 19.2743 2.70982C20.3751 3.81202 21.3473 5.44355 21.7724 7.25489C22.2002 9.0772 22.0816 11.1242 20.9263 12.9856C20.8671 13.0809 20.8305 13.1399 20.8047 13.1841C20.7928 13.2045 20.7865 13.2161 20.7839 13.2211C20.7815 13.2275 20.78 13.2319 20.7791 13.2347C20.7791 13.238 20.7792 13.2436 20.7798 13.2521C20.7805 13.256 20.7822 13.2647 20.7855 13.2795C20.7941 13.3174 20.8071 13.368 20.8302 13.4574L20.837 13.4834C20.9696 13.9959 21.0787 14.4172 21.1428 14.7576C21.2073 15.1002 21.2447 15.446 21.176 15.7837C20.9803 16.7467 20.2285 17.5 19.2655 17.6962C18.9277 17.765 18.5819 17.7276 18.2396 17.6629C17.8995 17.5987 17.4787 17.4895 16.9669 17.3567L16.9409 17.3499C16.8516 17.3268 16.801 17.3137 16.7633 17.3052C16.7486 17.3018 16.74 17.3002 16.736 17.2995C16.7282 17.2989 16.7228 17.2988 16.7195 17.2987C16.7167 17.2996 16.7125 17.3011 16.7067 17.3032C16.7017 17.3059 16.6899 17.3122 16.6694 17.3242C16.6249 17.3502 16.5654 17.3869 16.4695 17.4462C15.8496 17.8298 15.2044 18.0979 14.5508 18.2677C14.3083 18.6054 14.0357 18.9278 13.733 19.2308C12.8411 20.1239 11.4788 20.9343 9.96141 21.2978C8.4335 21.6637 6.69268 21.5871 5.11748 20.6124C5.0411 20.5651 4.99443 20.5363 4.96001 20.5161C4.93254 20.5227 4.89478 20.5324 4.8322 20.5486L4.80697 20.5552C4.38874 20.6637 4.03847 20.7546 3.75399 20.8084C3.46729 20.8625 3.16199 20.8973 2.85812 20.8354C2.01298 20.6632 1.35324 20.002 1.18149 19.1571C1.11976 18.8534 1.15444 18.5481 1.20849 18.2612C1.26211 17.9764 1.35288 17.6258 1.4613 17.207L1.46783 17.1818C1.48423 17.1184 1.49399 17.0805 1.50052 17.0529C1.48042 17.0187 1.45173 16.9724 1.40441 16.8961C0.430725 15.3274 0.332667 13.6041 0.691177 12.0767C1.04711 10.5603 1.86029 9.19499 2.78367 8.27044C3.0619 7.99187 3.35638 7.73867 3.66418 7.51099ZM7.2675 3.76982C10.2901 0.743394 15.1904 0.743394 18.213 3.76982C19.123 4.68094 19.9527 6.06632 20.3121 7.59766C20.669 9.11803 20.5549 10.7395 19.6518 12.1945C19.6433 12.2083 19.6346 12.2222 19.6259 12.2362C19.5398 12.3744 19.447 12.5233 19.3933 12.6584C19.2979 12.8982 19.2649 13.1152 19.2846 13.3725C19.2957 13.5171 19.3345 13.6661 19.3687 13.7971C19.3719 13.8093 19.375 13.8214 19.3781 13.8333C19.5192 14.3782 19.6151 14.7504 19.6687 15.0352C19.723 15.3235 19.7157 15.4375 19.7061 15.485C19.6301 15.859 19.3383 16.1505 18.966 16.2264C18.9192 16.2359 18.8057 16.2433 18.5179 16.189C18.2336 16.1353 17.862 16.0393 17.3177 15.898C17.3058 15.8949 17.2937 15.8918 17.2814 15.8886C17.1508 15.8544 17.0019 15.8155 16.8577 15.8044C16.6006 15.7845 16.385 15.8171 16.1454 15.9121C16.0106 15.9656 15.8612 16.0583 15.7223 16.1446C15.7082 16.1534 15.6942 16.1621 15.6803 16.1707C15.6529 16.1876 15.6256 16.2042 15.5981 16.2205C16.5024 13.5206 15.8812 10.4214 13.733 8.27044C11.5066 6.0413 8.26244 5.45388 5.49905 6.50716C5.87536 5.50929 6.46468 4.57365 7.2675 3.76982ZM4.77064 8.56521C7.19772 6.92382 10.5234 7.1795 12.6716 9.33044C14.8022 11.4637 15.0715 14.7573 13.4766 17.1829C13.2473 17.5317 12.9791 17.863 12.6716 18.1708C11.9752 18.8681 10.8592 19.5403 9.61201 19.839C8.37533 20.1352 7.06522 20.0536 5.90674 19.3368C5.89525 19.3297 5.88345 19.3224 5.87139 19.3149C5.75984 19.2455 5.62579 19.1622 5.50283 19.1134C5.28676 19.0277 5.08903 18.9978 4.85726 19.0157C4.72585 19.0259 4.59123 19.0612 4.48598 19.0888C4.47549 19.0915 4.46528 19.0942 4.4554 19.0967C4.00536 19.2135 3.70442 19.2912 3.47569 19.3344C3.24348 19.3782 3.17054 19.3682 3.15762 19.3656C2.90313 19.3137 2.70348 19.1144 2.65143 18.8583C2.6487 18.8448 2.63876 18.7714 2.68257 18.5388C2.72572 18.3096 2.80333 18.0082 2.91997 17.5577C2.92253 17.5478 2.9252 17.5376 2.92794 17.5271C2.95551 17.4216 2.99072 17.2868 3.00081 17.1551C3.01858 16.9231 2.98832 16.7242 2.90232 16.508C2.85331 16.3848 2.76997 16.2512 2.70073 16.1402C2.69327 16.1282 2.68596 16.1165 2.67888 16.1051C1.95742 14.9427 1.86385 13.6449 2.15149 12.4195C2.4417 11.1831 3.11245 10.0639 3.845 9.33044C4.13445 9.04062 4.44468 8.78565 4.77064 8.56521Z" fill={color}/>
    <Path d="M10.2502 13.75C10.2502 14.3023 10.6979 14.75 11.2502 14.75C11.8024 14.75 12.2502 14.3023 12.2502 13.75C12.2502 13.1977 11.8024 12.75 11.2502 12.75C10.6979 12.75 10.2502 13.1977 10.2502 13.75Z" fill={color}/>
    <Path d="M7.25015 13.75C7.25015 14.3023 7.69787 14.75 8.25015 14.75C8.80243 14.75 9.25015 14.3023 9.25015 13.75C9.25015 13.1977 8.80243 12.75 8.25015 12.75C7.69787 12.75 7.25015 13.1977 7.25015 13.75Z" fill={color}/>
    <Path d="M4.25015 13.75C4.25015 14.3023 4.69787 14.75 5.25015 14.75C5.80244 14.75 6.25015 14.3023 6.25015 13.75C6.25015 13.1977 5.80244 12.75 5.25015 12.75C4.69787 12.75 4.25015 13.1977 4.25015 13.75Z" fill={color}/>
  </Svg>
)

export const OnButton = ({color='#33363F'}: {color: string}) => (
  <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
    <Path d="M5.8947 6.13372C4.94116 7.08726 4.2918 8.30214 4.02871 9.62474C3.76563 10.9473 3.90066 12.3182 4.41671 13.5641C4.93276 14.81 5.80666 15.8748 6.92791 16.624C8.04915 17.3732 9.36738 17.7731 10.7159 17.7731C12.0644 17.7731 13.3826 17.3732 14.5039 16.624C15.6251 15.8748 16.499 14.81 17.0151 13.5641C17.5311 12.3182 17.6661 10.9473 17.4031 9.62474C17.14 8.30214 16.4906 7.08726 15.5371 6.13372" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <Path d="M10.7158 7.54581L10.7158 4.13672" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
)

export const PhoneFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill={color}/>
  </Svg>
)

export const QuestionsFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM12 5C9.79086 5 8 6.79086 8 9H10C10 7.89543 10.8954 7 12 7H12.0943C13.1468 7 14 7.85321 14 8.90569V9.41886C14 9.93267 13.6712 10.3888 13.1838 10.5513C11.8796 10.986 11 12.2065 11 13.5811V16H13V13.5811C13 13.0673 13.3288 12.6112 13.8162 12.4487C15.1204 12.014 16 10.7935 16 9.41886V8.90569C16 6.74864 14.2514 5 12.0943 5H12Z" fill={color}/>
  </Svg>
)

export const Search= ({color='#33363F'}: {color: string}) => (
  <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" >
    <Path d="M8.08512 4.55232C8.49423 4.48752 8.77336 4.10334 8.70856 3.69423C8.64376 3.28511 8.25958 3.00599 7.85047 3.07079C5.39008 3.46047 3.46044 5.39012 3.07076 7.8505C3.00596 8.25961 3.28508 8.64379 3.6942 8.70859C4.10331 8.77339 4.48749 8.49426 4.55229 8.08515C4.84032 6.26661 6.26658 4.84035 8.08512 4.55232Z" fill={color}/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5C15.1348 19.5 19.5 15.1348 19.5 9.75C19.5 4.36522 15.1348 0 9.75 0ZM1.5 9.75C1.5 5.19365 5.19365 1.5 9.75 1.5C14.3063 1.5 18 5.19365 18 9.75C18 14.3063 14.3063 18 9.75 18C5.19365 18 1.5 14.3063 1.5 9.75Z" fill={color}/>
    <Path d="M18.2804 17.2198C17.9875 16.9269 17.5126 16.9269 17.2197 17.2198C16.9268 17.5126 16.9268 17.9875 17.2197 18.2804L21.2196 22.2804C21.5125 22.5733 21.9874 22.5733 22.2803 22.2804C22.5732 21.9875 22.5732 21.5126 22.2803 21.2197L18.2804 17.2198Z" fill={color}/>
  </Svg>
)

export const ShieldTick = () => (
  <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" >
    <Path d="M9.74006 6.54411C9.9025 6.34252 9.87076 6.04743 9.66917 5.885C9.46758 5.72257 9.17249 5.75431 9.01006 5.95589L7.74662 7.52388C7.4872 7.84584 7.32351 8.04719 7.18728 8.17441C7.12326 8.2342 7.08237 8.2608 7.05887 8.27256C7.04137 8.28131 7.03512 8.28127 7.03176 8.28125H7.03086C7.0275 8.28127 7.02125 8.28131 7.00376 8.27256C6.98026 8.2608 6.93936 8.2342 6.87535 8.17441C6.73912 8.04719 6.57543 7.84584 6.316 7.52388L5.99006 7.11938C5.82763 6.91779 5.53254 6.88605 5.33095 7.04848C5.12937 7.21091 5.09763 7.50601 5.26006 7.70759L5.60636 8.13737C5.83917 8.42635 6.04458 8.68132 6.23547 8.85958C6.44041 9.05098 6.69523 9.21875 7.03131 9.21875C7.3674 9.21875 7.62221 9.05098 7.82716 8.85958C8.01805 8.68131 8.22345 8.42635 8.45628 8.13735L9.74006 6.54411Z" fill="#484848"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M5.97686 0.78125C5.01324 0.78125 4.23207 1.56242 4.23207 2.52604C4.23207 2.9719 3.87064 3.33333 3.42478 3.33333H3.23174C2.2467 3.33333 1.36926 4.09545 1.4227 5.15405C1.48615 6.41093 1.76531 8.36988 2.78353 10.2255C3.06871 10.7452 3.44958 11.2557 3.86131 11.7314L3.89231 11.7673C4.4846 12.4516 4.97845 13.0223 5.50937 13.4112C6.08042 13.8296 6.68991 14.038 7.50009 14.038C8.31028 14.038 8.91977 13.8296 9.49082 13.4112C10.0217 13.0223 10.5156 12.4516 11.1079 11.7673L11.1389 11.7314C11.5506 11.2557 11.9315 10.7452 12.2167 10.2255C13.2687 8.30819 13.5311 6.14167 13.5828 4.79101C13.6232 3.73749 12.752 2.96875 11.7615 2.96875H11.3931C11.0479 2.96875 10.7681 2.68893 10.7681 2.34375C10.7681 1.4808 10.0686 0.78125 9.20562 0.78125H5.97686ZM5.16957 2.52604C5.16957 2.08019 5.53101 1.71875 5.97686 1.71875H9.20562C9.5508 1.71875 9.83062 1.99857 9.83062 2.34375C9.83062 3.20669 10.5302 3.90625 11.3931 3.90625H11.7615C12.285 3.90625 12.6636 4.29569 12.646 4.75512C12.5966 6.04558 12.3449 8.0429 11.3948 9.7745C11.1517 10.2175 10.8151 10.673 10.43 11.1179C9.7987 11.8473 9.3724 12.3358 8.93678 12.6549C8.53206 12.9514 8.1181 13.1005 7.50009 13.1005C6.88209 13.1005 6.46813 12.9514 6.06341 12.6549C5.62779 12.3358 5.20149 11.8473 4.57017 11.1179C4.18511 10.673 3.84851 10.2175 3.60542 9.7745C2.68137 8.0905 2.41866 6.28849 2.35901 5.10678C2.33631 4.65718 2.70665 4.27083 3.23174 4.27083H3.42478C4.3884 4.27083 5.16957 3.48966 5.16957 2.52604Z" fill="#484848"/>
  </Svg>
)

export const Star = ({color='#D9D9D9'}: {color: string}) => (
  <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <Path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill={color}/>
  </Svg>
)

export const StarFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M10.3072 7.22035C10.9493 5.61967 11.2704 4.81932 11.7919 4.7084C11.9291 4.67923 12.0708 4.67923 12.208 4.7084C12.7295 4.81932 13.0506 5.61967 13.6927 7.22035C14.0578 8.13063 14.2404 8.58577 14.582 8.89534C14.6778 8.98217 14.7818 9.0595 14.8926 9.12625C15.2874 9.36423 15.7803 9.40837 16.7661 9.49665C18.4348 9.6461 19.2692 9.72083 19.524 10.1966C19.5768 10.2951 19.6127 10.4018 19.6302 10.5122C19.7146 11.0452 19.1012 11.6033 17.8744 12.7194L17.5338 13.0293C16.9602 13.5511 16.6735 13.812 16.5076 14.1376C16.4081 14.333 16.3414 14.5433 16.3101 14.7603C16.258 15.122 16.342 15.5004 16.5099 16.2574L16.5699 16.5279C16.8711 17.8854 17.0217 18.5642 16.8337 18.8978C16.6649 19.1975 16.3538 19.3894 16.0102 19.4058C15.6277 19.4241 15.0887 18.9849 14.0107 18.1065C13.3005 17.5278 12.9454 17.2384 12.5512 17.1254C12.191 17.0221 11.8089 17.0221 11.4487 17.1254C11.0545 17.2384 10.6994 17.5278 9.98917 18.1065C8.91119 18.9849 8.37221 19.4241 7.98968 19.4058C7.64609 19.3894 7.33504 19.1975 7.16617 18.8978C6.97818 18.5642 7.12878 17.8854 7.42997 16.5279L7.48998 16.2574C7.65794 15.5004 7.74191 15.122 7.6898 14.7603C7.65854 14.5433 7.59182 14.333 7.49232 14.1376C7.32645 13.812 7.03968 13.5511 6.46613 13.0293L6.12546 12.7194C4.89867 11.6033 4.28527 11.0452 4.36975 10.5122C4.38724 10.4018 4.42312 10.2951 4.47589 10.1966C4.73069 9.72083 5.56507 9.6461 7.23384 9.49665C8.21962 9.40837 8.71251 9.36423 9.10735 9.12625C9.2181 9.0595 9.32211 8.98217 9.41793 8.89534C9.75954 8.58577 9.94211 8.13063 10.3072 7.22035Z" fill={color} stroke={color} strokeWidth="2"/>
  </Svg>
)

export const Subtract = ({color='#33363F'}: {color: string}) => (
<Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M10.1101 4.43306L11.1525 3.39068C11.9282 2.61502 11.9282 1.35741 11.1525 0.581749C10.3768 -0.193917 9.11923 -0.193916 8.34356 0.58175L7.28451 1.6408C7.94985 2.80854 8.92621 3.77723 10.1101 4.43306ZM5.82973 3.09558L1.47538 7.44994C1.05032 7.875 0.837787 8.08753 0.698052 8.34862C0.558317 8.60972 0.499372 8.90445 0.381481 9.4939L0.0638517 11.082C-0.00267028 11.4147 -0.0359313 11.581 0.0586767 11.6756C0.153285 11.7702 0.31959 11.7369 0.6522 11.6704L2.24035 11.3528L2.24036 11.3528C2.8298 11.2349 3.12453 11.1759 3.38562 11.0362C3.64672 10.8965 3.85925 10.6839 4.28431 10.2589L8.65153 5.89165C7.51897 5.17076 6.55729 4.21555 5.82973 3.09558Z" fill={color}/>
</Svg>
)

export const TabFavorite = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M15.5532 1.52588e-05C14.1056 0 13.1724 0.17247 12.1027 0.696075C11.7066 0.889923 11.335 1.1234 10.99 1.39577C10.6582 1.13866 10.3015 0.915924 9.92181 0.728134C8.83132 0.188782 7.85028 0 6.45455 0C2.71644 0 0 3.09726 0 7.11987C0 10.1577 1.69383 13.0923 4.84884 15.9299C6.50489 17.4193 8.61932 18.8933 10.1336 19.6775L11 20.1261L11.8664 19.6775C13.3807 18.8933 15.4951 17.4193 17.1512 15.9299C20.3062 13.0923 22 10.1577 22 7.11987C22 3.13985 19.2579 0.0153656 15.5532 1.52588e-05ZM20 7.11987C20 9.49989 18.5862 11.9493 15.8137 14.4429C14.3022 15.8023 12.359 17.1609 11 17.8737C9.64104 17.1609 7.69782 15.8023 6.18628 14.4429C3.41383 11.9493 2 9.49989 2 7.11987C2 4.14772 3.88365 2 6.45455 2C7.56429 2 8.24813 2.13159 9.03514 2.52084C9.50001 2.75076 9.91088 3.05437 10.2665 3.43378L11.0023 4.2187L11.7315 3.42755C12.0951 3.03294 12.512 2.72244 12.9819 2.49243C13.7459 2.1185 14.387 2 15.5491 2C18.0882 2.01053 20 4.18896 20 7.11987Z" fill={color}/>
  </Svg>
)

export const Time = ({color='#33363F'}: {color: string}) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Circle cx="9.99992" cy="9.99967" r="7.66667" stroke={color} strokeWidth="2"/>
    <Path d="M13.75 9.99967H10.25C10.1119 9.99967 10 9.88775 10 9.74967V7.08301" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </Svg>
)

export const TimeFill = ({color='#222222'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V11.75C11 12.4404 11.5596 13 12.25 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H13V6.5Z" fill={color}/>
  </Svg>
)

export const ToTopScrolling = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
    <Path d="M14.75 2L14.0429 1.29289L14.75 0.585787L15.4571 1.29289L14.75 2ZM-7.45305e-08 8.25C-6.79446e-08 7.69772 0.447715 7.25 1 7.25C1.55228 7.25 2 7.69772 2 8.25L-7.45305e-08 8.25ZM7.79289 7.54289L14.0429 1.29289L15.4571 2.70711L9.20711 8.95711L7.79289 7.54289ZM15.4571 1.29289L21.7071 7.54289L20.2929 8.95711L14.0429 2.70711L15.4571 1.29289ZM15.75 2L15.75 15.125L13.75 15.125L13.75 2L15.75 2ZM-1.56514e-07 15.125L-7.45305e-08 8.25L2 8.25L2 15.125L-1.56514e-07 15.125ZM7.875 23C3.52576 23 -2.08378e-07 19.4742 -1.56514e-07 15.125L2 15.125C2 18.3697 4.63033 21 7.875 21L7.875 23ZM15.75 15.125C15.75 19.4742 12.2242 23 7.875 23L7.875 21C11.1197 21 13.75 18.3697 13.75 15.125L15.75 15.125Z" fill={color}/>
  </Svg>
)

export const UpScroll = ({color='#33363F'}: {color: string}) => (
  <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
    <Path d="M14.75 2L14.0429 1.29289L14.75 0.585787L15.4571 1.29289L14.75 2ZM-7.45305e-08 8.25C-6.79446e-08 7.69772 0.447715 7.25 1 7.25C1.55228 7.25 2 7.69772 2 8.25L-7.45305e-08 8.25ZM7.79289 7.54289L14.0429 1.29289L15.4571 2.70711L9.20711 8.95711L7.79289 7.54289ZM15.4571 1.29289L21.7071 7.54289L20.2929 8.95711L14.0429 2.70711L15.4571 1.29289ZM15.75 2L15.75 15.125L13.75 15.125L13.75 2L15.75 2ZM-1.56514e-07 15.125L-7.45305e-08 8.25L2 8.25L2 15.125L-1.56514e-07 15.125ZM7.875 23C3.52576 23 -2.08378e-07 19.4742 -1.56514e-07 15.125L2 15.125C2 18.3697 4.63033 21 7.875 21L7.875 23ZM15.75 15.125C15.75 19.4742 12.2242 23 7.875 23L7.875 21C11.1197 21 13.75 18.3697 13.75 15.125L15.75 15.125Z" fill={color}/>
  </Svg>
)

export const UserCircleLight = () => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
    <Circle cx="20" cy="16.6665" r="5" stroke="#222222" strokeLinecap="round"/>
    <Circle cx="20" cy="20" r="15" stroke="#222222"/>
    <Path d="M30 31.1765C29.4102 29.4046 28.1104 27.8388 26.3024 26.7221C24.4943 25.6053 22.279 25 20 25C17.721 25 15.5057 25.6053 13.6976 26.7221C11.8896 27.8388 10.5898 29.4046 10 31.1765" stroke="#222222" strokeLinecap="round"/>
  </Svg>
)

export const Views = ({color='#33363F'}: {color: string}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
    <Path d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z" stroke={color} strokeWidth="2"/>
  </Svg>
)

export const Wallet = ({color='#484848'}: {color: string}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path d="M4.00001 8.66667V8.66667C4.00001 8.35712 4.00001 8.20235 4.01143 8.07187C4.13831 6.62153 5.2882 5.47164 6.73854 5.34475C6.86903 5.33333 7.0238 5.33333 7.33334 5.33333L25.7143 5.33333C26.1396 5.33333 26.3522 5.33333 26.4928 5.45435C26.5117 5.47062 26.5294 5.48828 26.5457 5.50719C26.6667 5.64781 26.6667 5.86045 26.6667 6.28572V6.28572C26.6667 8.83733 26.6667 10.1131 25.9406 10.9569C25.843 11.0703 25.737 11.1763 25.6235 11.2739C24.7798 12 23.504 12 20.9524 12H20M4.00001 8.66667V8.66667C4.00001 8.97621 4.00001 9.13098 4.01143 9.26147C4.13831 10.7118 5.2882 11.8617 6.73854 11.9886C6.86903 12 7.0238 12 7.33334 12L26 12C26.9428 12 27.4142 12 27.7071 12.2929C28 12.5858 28 13.0572 28 14L28 17.3333M4.00001 8.66667L4.00001 24C4.00001 25.8856 4.00001 26.8284 4.5858 27.4142C5.17158 28 6.11439 28 8.00001 28L26 28C26.9428 28 27.4142 28 27.7071 27.7071C28 27.4142 28 26.9428 28 26L28 22.6667M28 22.6667H22C21.0572 22.6667 20.5858 22.6667 20.2929 22.3738C20 22.0809 20 21.6095 20 20.6667V19.3333C20 18.3905 20 17.9191 20.2929 17.6262C20.5858 17.3333 21.0572 17.3333 22 17.3333H28M28 22.6667L28 17.3333" stroke={color} strokeWidth="2"/>
  </Svg>
)

export const WalletFill = ({color='#484848'}: {color: string}) => (
<Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
<Path d="M10 3C10.5523 3 11 2.55228 11 2C11 1.44772 10.5523 1 10 1V3ZM2.75 3L10 3V1L2.75 1L2.75 3ZM2.75 5.5H6.75V3.5L2.75 3.5V5.5ZM2.5 3.25C2.5 3.11193 2.61193 3 2.75 3L2.75 1C1.50736 1 0.500004 2.00736 0.500004 3.25L2.5 3.25ZM0.500004 3.25C0.500004 4.49264 1.50736 5.5 2.75 5.5V3.5C2.61193 3.5 2.5 3.38807 2.5 3.25L0.500004 3.25Z" fill={color}/>
<Path d="M1.5 6L1.5 3.25" stroke={color} stroke-width="2"/>
<Path d="M1.5 4H1V4.5L1 8.5L0.999998 8.5329C0.999973 8.97615 0.999952 9.35806 1.04107 9.6639C1.08514 9.99165 1.18451 10.3058 1.43934 10.5607C1.69417 10.8155 2.00835 10.9149 2.3361 10.9589C2.64193 11 3.02384 11 3.46709 11L3.5 11L9 11L9.01599 11C9.23532 11 9.42456 11 9.58119 10.9893C9.74611 10.9781 9.91106 10.9533 10.074 10.8858C10.4416 10.7336 10.7336 10.4416 10.8858 10.074C10.9533 9.91106 10.9781 9.74611 10.9893 9.58119C11 9.42456 11 9.23532 11 9.01599L11 9V8.5H10.5H9C8.44772 8.5 8 8.05228 8 7.5C8 6.94772 8.44772 6.5 9 6.5H10.5H11V6L11 5.98401C11 5.76468 11 5.57544 10.9893 5.41881C10.9781 5.25389 10.9533 5.08894 10.8858 4.92597C10.7336 4.55843 10.4416 4.26642 10.074 4.11418C9.91106 4.04668 9.74611 4.02193 9.58119 4.01067C9.42456 3.99999 9.23532 3.99999 9.01599 4H9L1.5 4Z" fill={color} stroke={color}/>
</Svg>
)

export const WritingPencil = () => (
  <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" >
    <Path fillRule="evenodd" clipRule="evenodd" d="M16.1744 14.3995V8.79951H14.5744V14.3995H1.77444V1.59951H7.37444V-0.000488281H1.77444C0.890783 -0.000488281 0.174438 0.715856 0.174438 1.59951V14.3995C0.174438 15.2832 0.890783 15.9995 1.77444 15.9995H14.5744C15.4581 15.9995 16.1744 15.2832 16.1744 14.3995ZM13.9169 0.578412C13.5502 0.208809 13.0481 -0.000326509 12.5243 -0.000326509C12.0011 -0.000326509 11.4996 0.208337 11.1308 0.579376L4.43565 7.27441C3.83739 7.80154 3.44521 8.58594 3.37705 9.42951L3.37446 12.0015V12.8015H6.68214C7.58958 12.7393 8.38168 12.3433 8.94046 11.6987L15.5977 5.04434C15.967 4.675 16.1745 4.17407 16.1745 3.65174C16.1745 3.12941 15.967 2.62847 15.5977 2.25913L13.9169 0.578412ZM6.62565 11.2039C7.05303 11.1736 7.45085 10.9747 7.7703 10.6093L12.6199 5.75971L10.4165 3.55615L5.53134 8.43967C5.20722 8.72634 5.00671 9.12739 4.97446 9.49427V11.2024L6.62565 11.2039ZM11.548 2.42496L13.7513 4.62834L14.4663 3.9133C14.5356 3.84402 14.5745 3.75005 14.5745 3.65207C14.5745 3.55408 14.5356 3.46012 14.4663 3.39083L12.7834 1.70789C12.7149 1.63884 12.6216 1.6 12.5243 1.6C12.4271 1.6 12.3338 1.63884 12.2653 1.70789L11.548 2.42496Z" fill="#484848"/>
  </Svg>
)

