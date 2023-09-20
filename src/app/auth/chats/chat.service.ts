export class ChatGroup{
    constructor(
        public chatName: string,
        public messages: Message[],
        public creator: string
    ){}
    
}
export class Message{
    constructor(
        public id: number,
        public userName: string,
        public message: string
    ){}
}
// Ide még kell hogy képeket is lehessen tenni
