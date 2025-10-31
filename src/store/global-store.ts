import { atom } from "jotai";
import { HomeData } from "@/features/Home/types/Home";

export const homeDataAtom = atom<HomeData | null>(null);
