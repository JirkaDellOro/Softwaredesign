class Person
{
    public FirstName: string;
    public LastName: string ;
    public DateOfBirth: Date;

    public Mom: Person;
    public Dad: Person;

        constructor(_firstName: string, _lastName: string, _dateOfBirth: Date, _mom: Person, _dad: Person) {
        this.FirstName = _firstName;
        this.LastName = _lastName;
        this.DateOfBirth = _dateOfBirth;
        this.Mom = _mom;
        this.Dad = _dad;
    }
}

class Familytree
{
    public static Find(person: Person): Person
    {
        let ret: Person = null;
        if (person.LastName != "Battenberg")
            return person;

        ret = Familytree.Find(person.Mom);
        if (ret != null)
            return ret;
        ret = Familytree.Find(person.Dad);
        return ret;
    }


    public static BuildTree(): Person {
        let willi: Person = new Person("Willi", "Cambridge", new Date(1982, 7, 21), null, null);
        let diana: Person = new Person("Diana", "Spencer", new Date(1961, 7, 1), null, null);
        let franzi: Person = new Person("Franzi", "Roche", new Date(1936, 1, 20), null, null);
        let ruth: Person = new Person("Ruth", "Gill", new Date(1908, 6, 7), null, null);
        let moritz: Person = new Person("Moritz", "Roche", new Date(1885, 7, 8), null, null);
        let eddie: Person = new Person("Eddie", "Spencer", new Date(1924, 1, 24), null, null);
        let cynthia: Person = new Person("Cynthia", "Hamilton", new Date(1897, 8, 16), null, null);
        let albert: Person = new Person("Albert", "Spencer", new Date(1892, 5, 23), null, null);
        let charlie: Person = new Person("Charlie", "Wales", new Date(1948, 11, 14), null, null);
        let sarah: Person = new Person("Sarah", "Windsor", new Date(1926, 4, 21), null, null); //else geht leider nicht weil ts/js kein namespacing hat xD
        let lisbeth: Person = new Person("Lisbeth", "Bowes-Lyon", new Date(1900, 8, 4), null, null);
        let schorsch: Person = new Person("Schorsch-Albert", "York", new Date(1895, 12, 14), null, null);
        let philip: Person = new Person("Philip", "Battenberg", new Date(1921, 6, 10), null, null);
        let alice: Person = new Person("Alice", "Battenberg", new Date(1885, 2, 25), null, null);
        let andi: Person = new Person("Andi", "ElGreco", new Date(1882, 2, 1), null, null);

        willi.Mom = diana;
        diana.Mom = franzi;
        franzi.Mom = ruth;
        franzi.Dad = moritz;
        diana.Dad = eddie;
        eddie.Mom = cynthia;
        eddie.Dad = albert;
        willi.Dad = charlie;
        charlie.Mom = sarah;
        sarah.Mom = lisbeth;
        sarah.Dad = schorsch;
        charlie.Dad = philip;
        philip.Mom = alice;
        philip.Dad = andi;

        return willi;
    }
}

let root: Person = Familytree.BuildTree();
let found: Person = Familytree.Find(root);

console.log(found);
