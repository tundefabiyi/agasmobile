//import * as types from "utils";


export interface IValueItem {
    ValueMember: any
    DisplayMember: any
}

export class ValueList {
    private _array: Array<IValueItem>;

    get length(): number { return this._array.length; }

    constructor(array: Array<IValueItem>) {
        this._array = array;
    }

    public getItem(index: number) { // Used for items source in list picker
        return this.getText(index);
    }

    public getText(index: number): string {
        // if (types.isNullOrUndefined(index)) {
        //     return null;
        // }

        if (index < 0 || index >= this._array.length) {
            return "";
        }

        return this._array[index].DisplayMember;
    }

    public getValue(index: number) {
        // if (types.isNullOrUndefined(index) || index < 0 || index >= this._array.length) {
        //     return null;
        // }
        if (index < 0 || index >= this._array.length) {
            return null;
        }
        return this._array[index].ValueMember;
    }

    public getIndex(value: any): number {
        let loop: number;

        for (loop = 0; loop < this._array.length; loop++) {
            if (this.getValue(loop) == value) {
                return loop;
            }
        }

        return -1;
    }
}
