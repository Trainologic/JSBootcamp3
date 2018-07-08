import {PictureDTO} from "../common/picture.dto";

export const CELL_ADD = "+";
export type Line = PictureDTO[];
export const MAX_CELL = 5;

export function isCellAdd(cell: any) {
    return cell == CELL_ADD;
}

export function isCellEmpty(cell: any) {
    return cell == null;
}
