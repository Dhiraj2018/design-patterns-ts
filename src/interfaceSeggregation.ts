export interface ISmartPhoneDevice{
    call(contact:string):void;
    sendSms(contact:string, msg:string):void;

}

export class SmartPhone implements ISmartPhoneDevice{
    call(contact: string): void {
        console.log(`calling ${contact}`)
    }
    sendSms(contact: string, msg: string): void {
        console.log(`send ${msg } to ${contact}`)
    }

}

