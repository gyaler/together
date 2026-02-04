import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-12-19 14:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 12월 -> 12월 25일 크리스마스
export const HOLIDAYS = [25]

export const LOCATION = "더컨벤션 잠실 아모르홀"
export const LOCATION_ADDRESS = "서울시 송파구 올림픽로 319"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.9594982, 37.4657134]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 13321741

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 8634826

export const BRIDE_FULLNAME = "김우리"
export const BRIDE_FIRSTNAME = "우리"
export const BRIDE_TITLE = "차녀"
export const BRIDE_FATHER = "김형선"
export const BRIDE_MOTHER = "홍성자"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-5267-8890",
    account: "국민은행 748301-01-480780",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-3329-5189",
    account: "농협 483126-52-065071",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-6351-5185",
  },
]

export const GROOM_FULLNAME = "강진모"
export const GROOM_FIRSTNAME = "진모"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "강병구"
export const GROOM_MOTHER = "엄난주"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-8406-0272",
    account: "하나은행 646-911013-22607",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-9397-0272",
    account: "신한은행 110-389-700255",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-8446-0271",
    account: "하나은행 589-810195-14307",
  },
]
