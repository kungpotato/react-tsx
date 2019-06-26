import {observable, action, computed} from 'mobx';

interface IMobxStore {
    name: string;
    count: number
    greeting: string;
    setName(name:string):void;
}

export class MobxStore implements IMobxStore {
    @observable 
    name = "World";

    @observable
    count = 0

    @computed 
    public get greeting():string {
        return `Hello ${this.name}`;
    }

    @action.bound
    public setName(name:string):void {
        this.name = name;
        this.count++
    }
}
