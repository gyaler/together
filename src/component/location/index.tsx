import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            빨간 벽돌 교통회관 건물 3층
          </div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
            2호선 잠실역 <b>8번 출구</b> 약 300m
            <br />
            8호선 잠실역 <b>9번 출구</b> 약 30m
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 일반버스: 16, 32, 100, 101
            <br />
            - 간선(Blue): 310, 341, 360
            <br />
            - 지선(Green): 2311, 3411
            <br />
            - 광역, 직행버스: 1000, 1100, 1700
            <br />
            - 공항버스: 6000, 6006
            <br />
            *그 외 다양한 노선 이용 가능
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            신주소: <b>송파구 올림픽로 319</b>
            <br />
            구주소: 송파구 신천동 11-7
          </div>
          <div />
          <div className="content">
            <b>주차 안내</b>
            <br />
            교통회관 지상, 지하 주차장 이용
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
