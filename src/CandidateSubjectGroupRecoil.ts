import { atom } from "recoil";

interface ISubjectGroupsState {}
const SubjectGroupsRecoil = atom({
  key: "SubjectGroupsRecoil",
  default: "", // default value (aka initial value)
});
