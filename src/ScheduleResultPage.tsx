import React, { useState } from 'react'
interface ISubject {
  name: string;
  time: {
    day: "MON" | "TUE" | "WED" | "THU" | "FRI",
    start: string,
    end: string
  }[]
}
const CELL_HEIGHT = 30;
const TABLE_WIDTH = 600;
const START_HOUR_PREFIX = 8;
const TOP_PREFIX = CELL_HEIGHT; // 요일 row의 세로 PREFIX
const ScheduleResultPage = () => {
  const [currSelectedSchedule, setCurrSelectedSchedule] = useState<ISubject[]>([{
    name: "프로그래밍언어C",
    time: [
      { day: "TUE", start: "15:00", end: "16:15" },
      { day: "THU", start: "15:00", end: "16:15" },
    ],
  },
  {
    name: "마케팅A",
    time: [
      { day: "TUE", start: "13:30", end: "14:45" },
      { day: "THU", start: "13:30", end: "14:45" },
    ],
  },
  {
    name: "Entrepreneurship (최금선)",
    time: [
      { day: "THU", start: "10:30", end: "11:45" },
      { day: "THU", start: "12:00", end: "13:15" },
    ],
  },
  {
    name: "생산시스템관리(다)",
    time: [
      { day: "TUE", start: "12:00", end: "13:15" },
      { day: "THU", start: "16:30", end: "17:45" },
    ],
  }])
  const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI',]
  return (
    <div className='table-wrapper'>
      {DAYS.map((day) => <div className='cell' key={day}>
        {day}
      </div>)}
      {(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cells = [] as any;
        for (let i = 8; i < 24; i++) {
          DAYS.forEach((day) => {
            cells.push(<div className='cell' key={`${day} ${i}:00`}>
              {`${day} ${i}:00`}
            </div>)
          })
        }
        return cells;
      })()}
      {/* // ! 시간표 렌더링 */}
      {
        currSelectedSchedule.map((subject, idx) => subject.time.map((time) => {
          const startHour = parseInt(time.start.split(':')[0]);
          const startMin = parseInt(time.start.split(':')[1]);
          const endHour = parseInt(time.end.split(':')[0]);
          const endMin = parseInt(time.end.split(':')[1]);

          const dayIdx = DAYS.indexOf(time.day);
          const width = TABLE_WIDTH / DAYS.length;

          const topValue = (startHour - START_HOUR_PREFIX + startMin / 60) * CELL_HEIGHT + TOP_PREFIX;
          const leftValue = dayIdx * width;

          return <div
            className='subject'
            key={topValue + leftValue}
            style={{
              top: topValue,
              left: leftValue,
              width: width,
              height: ((endHour * 60 + endMin) - (startHour * 60 + startMin)) / 60 * CELL_HEIGHT,
            }}
          >
            {/* {subject.name} */}
            {startHour}:{startMin} - {endHour}:{endMin}
          </div>
        }))
      }

    </div>
  )
}

export default ScheduleResultPage