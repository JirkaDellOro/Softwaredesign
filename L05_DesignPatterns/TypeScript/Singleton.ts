class IdGenerator {
    private static readonly instance: IdGenerator = new IdGenerator();
    public nextID: number = -1;

    private constructor() {}
    
    public static getInstance(): IdGenerator {
        return this.instance;
    }

    public generateNewID(): number {
        return ++this.nextID;
    }
}