import { TCategory } from "./TCategory";
import { TInstructor } from "./TInstructor";

export type TClassroom = {
    id: string;
    title: string;
    description: string;
    link_video: string;
    category: TCategory;
    instructor: TInstructor;
}