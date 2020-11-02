abstract class Spielfigur {
    public abstract drohe(_handicaps?: string): void;
}

class Monster extends Spielfigur {

    public drohe(_handicaps: string = ""): void {
        console.log(_handicaps + "Grrrrrrrrr");
    }
}

abstract class Dekorierer extends Spielfigur {

    private meineFigur: Spielfigur;

    constructor(_s: Spielfigur) {
        super();
        this.meineFigur = _s;
    }

    public drohe(_handicaps: string = ""): void {
        this.meineFigur.drohe(_handicaps);
    }
}

class HustenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Hust, hust. ");
    }
}

class SchnupfenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Schniff. ");
    }
}

class KotzenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Wüüüüürgh. ");
    }
}

class LispelDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "isss lisspel ein bissen! ");
    }
}