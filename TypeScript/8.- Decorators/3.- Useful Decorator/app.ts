function printable(constructorFn: Function): void {
    constructorFn.prototype.print = function() {
        console.log(this.data);
    };
}

@printable
class Table {
    public data: any[] = [[1, 'David'], [2, 'Carlos']]
}

@printable
class Row {
    public data: any[] = [3, 'Olive']
}

const table: Table = new Table();
const row: Row = new Row();

// We need to cast 'table' and 'row' to type any because otherwise TypeScript doesn't really
// recognize that 'print' function exist even though it does.
(<any>table).print();
(<any>row).print();