import { atom } from "recoil";
import { ICandidateSubjectGroup } from "./ScheduleTypes";

export const SubjectGroupsRecoil = atom<ICandidateSubjectGroup[]>({
  key: "SubjectGroupsRecoil",
  default: [
    {
      name: "TEST",
      gradeTime: 3,
      subjects: [
        {
          name: "test2",
          time: [
            { day: "MON", start: "20:20", end: "20:40" },
            { day: "MON", start: "20:50", end: "20:51" },
          ],
        },
      ],
    },
  ],
});
