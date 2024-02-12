class Pen {
    private color: string;
    private inkLevel: number;
    private type: string;
    private brand: string;
    private material: string;
    private refillable: boolean;
    private price: number;
    private length: number;

    constructor(
        color: string,
        inkLevel: number,
        type: string,
        brand: string,
        material: string,
        refillable: boolean,
        price: number,
        length: number
    ) {
        this.color = color;
        this.inkLevel = inkLevel;
        this.type = type;
        this.brand = brand;
        this.material = material;
        this.refillable = refillable;
        this.price = price;
        this.length = length;
    }

    write(text: string): void {
        if (this.inkLevel > 0) {
            console.log(`Writing "${text}" with ${this.brand} ${this.color} ${this.type} pen.`);
            this.inkLevel -= text.length;
        } else {
            console.log("Please refill the ink");
        }
    }

    refillInk(): void {
        this.inkLevel = 100;
        console.log("Ink refilled.");
    }

    checkInkLevel(): void {
        console.log(`Ink level: ${this.inkLevel}%`);
    }

    getDescription(): void {
        console.log(`This is a ${this.brand} ${this.material} ${this.type} pen.${this.color} ink, and ${this.inkLevel}% ink level remaining. It is ${this.length} cm long and it costs $${this.price}. It is ${this.refillable ? 'refillable' : 'not refillable'}.`);
    }
}

const ButterFlowPen = new Pen(
    'red',100,'ball point','cello','plastic',true,5,3
);

ButterFlowPen.write("Hello");
ButterFlowPen.checkInkLevel();
ButterFlowPen.write("Exams");
ButterFlowPen.checkInkLevel();
ButterFlowPen.refillInk();
ButterFlowPen.write("World");
ButterFlowPen.checkInkLevel();
ButterFlowPen.getDescription();