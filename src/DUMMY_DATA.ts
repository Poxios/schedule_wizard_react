interface ISubject {
  name: string;
  time: {
    day: "MON" | "TUE" | "WED" | "THU" | "FRI";
    start: string;
    end: string;
  }[];
}
export const DUMMY_DATA: {
  freeDays: ("MON" | "TUE" | "WED" | "THU" | "FRI")[];
  schedule: ISubject[];
  freeTimeBetweenClasses: {
    MON: number;
    TUE: number;
    WED: number;
    THU: number;
    FRI: number;
  };
}[] = [
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 70, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 70, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["MON", "FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 45, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 45, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 30, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 70, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 70, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 85, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 160, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 30, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 85, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 135, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 85, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 135, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 45, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 60, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 45, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 70, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 70, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 85, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 85, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 40, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 85, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 105, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 160, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 85, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 40, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 135, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 130, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 135, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 135, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 45, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 30, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 85, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 135, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 105, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 45, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 85, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 55, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 45, TUE: 220, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 145, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 135, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 45, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 210, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 120, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 120, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 135, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 45, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 45, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 160, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 85, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 220, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 135, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 210, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 135, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 105, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 45, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 45, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
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
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 0, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 40, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 0, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 30, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 40, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 15, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 0, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 105, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 105, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 160, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 160, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 160, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 40, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 130, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 40, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 135, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 105, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 105, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
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
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 105, WED: 0, THU: 135, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 195, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 160, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 220, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 210, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 30, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 220, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 285, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 105, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (최금선)",
        time: [
          { day: "THU", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 220, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 130, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 220, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (박병호)",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "TUE", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 210, WED: 0, THU: 0, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI", "WED"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "유통물류창업론",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "MON", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 210, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 45, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 70, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 45, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 70, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 30, WED: 0, THU: 45, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 45, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 70, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 70, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 40, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 70, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 105, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 130, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 40, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 160, TUE: 0, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 105, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 30, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 55, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 130, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 30, TUE: 220, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 145, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 210, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 120, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 120, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 30, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 30, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 55, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 120, TUE: 220, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 145, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 210, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 210, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 120, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 120, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 30, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 145, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 15, WED: 0, THU: 210, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 55, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 105, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 210, WED: 0, THU: 30, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 120, WED: 0, THU: 120, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 40, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 145, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 55, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 40, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 145, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 210, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 105, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 30, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "마케팅A",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 40, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 130, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 55, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 자연/법/공대)", time: [{ day: "MON", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 220, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 15, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 235, TUE: 0, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 15, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 105, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 0, TUE: 120, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 15, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 사회/IT대)", time: [{ day: "MON", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 130, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 130, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 130, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 사회 공대)", time: [{ day: "TUE", start: "13:30", end: "14:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 40, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 105, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(나)",
        time: [
          { day: "MON", start: "12:00", end: "13:15" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 220, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(가)",
        time: [
          { day: "MON", start: "13:30", end: "14:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 105, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (3학년 자연/법/IT대)", time: [{ day: "TUE", start: "15:00", end: "15:50" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 195, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 220, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)A",
        time: [
          { day: "MON", start: "15:00", end: "16:15" },
          { day: "WED", start: "15:00", end: "16:15" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 195, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "파일처리(나)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 15, WED: 0, THU: 195, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어A",
        time: [
          { day: "TUE", start: "10:30", end: "11:45" },
          { day: "THU", start: "13:30", end: "14:45" },
        ],
      },
      { name: "채플 (2학년 이상 / 전체단과대학)", time: [{ day: "TUE", start: "16:30", end: "17:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 285, WED: 0, THU: 15, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어B",
        time: [
          { day: "TUE", start: "13:30", end: "14:45" },
          { day: "THU", start: "10:30", end: "11:45" },
        ],
      },
      { name: "채플 (2학년 인문/경통/경영대)", time: [{ day: "MON", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(다)",
        time: [
          { day: "TUE", start: "12:00", end: "13:15" },
          { day: "THU", start: "16:30", end: "17:45" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 310, TUE: 15, WED: 0, THU: 285, FRI: 0 },
  },
  {
    freeDays: ["FRI"],
    schedule: [
      {
        name: "프로그래밍언어C",
        time: [
          { day: "TUE", start: "15:00", end: "16:15" },
          { day: "THU", start: "15:00", end: "16:15" },
        ],
      },
      { name: "채플 (3학년 인문/경통/경영대)", time: [{ day: "TUE", start: "10:30", end: "11:20" }] },
      {
        name: "Entrepreneurship (김영수)B",
        time: [
          { day: "MON", start: "16:30", end: "17:45" },
          { day: "WED", start: "16:30", end: "17:45" },
        ],
      },
      {
        name: "생산시스템관리(가)",
        time: [
          { day: "MON", start: "10:30", end: "11:45" },
          { day: "THU", start: "12:00", end: "13:15" },
        ],
      },
    ],
    freeTimeBetweenClasses: { MON: 285, TUE: 220, WED: 0, THU: 105, FRI: 0 },
  },
];
