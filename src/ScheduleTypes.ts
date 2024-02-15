// $ 파이썬과 공통으로 사용하는 단일 Subject
interface ISubject {
  name: string;
  gradeTime: string;
  time: {
    day: "MON" | "TUE" | "WED" | "THU" | "FRI";
    start: string;
    end: string;
  }[];
}

// $ 후보 과목 그룹 안에 있는 단일 Subject
interface ICandidateSubject extends ISubject {
  mustExcluded: boolean;
  mustIncluded: boolean;
}
export interface ICandidateSubjectGroup {
  name: string; // Must be unique
  subjects: ISubject[];
}
