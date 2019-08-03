from xlsxwriter.format import Format
from xlsxwriter import Workbook
from config import CellsFormat
from config import SizeFormat
from config import Properties
from typing import List
from typing import Dict
from config import get
import datetime


class Xlsx(object):
    def __init__(self, name: str, worksheet_name: str = 'Test'):
        self.workbook = Workbook(name)
        self.worksheet = self.workbook.add_worksheet(worksheet_name)
        
    def write(self, rows: int, columns: int,
              init_row: int, init_column: int, data: List[str], style: Format):
        for i in range(rows):
            for j in range(columns):
                row = i + init_row
                column = j + init_column
                self.worksheet.write(row, column, data[i][j], style)

    def add_cells_format(self, cell_format: CellsFormat):
        return self.workbook.add_format(cell_format.getdict())

    def add_custom_format(self, custom_format: Dict):
        return self.workbook.add_format(custom_format)

    def set_rows_size(self, size_format: SizeFormat):
        for index, size in zip(size_format.indexes, size_format.sizes):
            self.worksheet.set_row(index, size)

    def set_columns_size(self, size_format: SizeFormat):
        for index, size in zip(size_format.indexes, size_format.sizes):
            self.worksheet.set_column(index, size)

    def set_properties(self, properties: Properties):
        self.workbook.set_properties(properties.getdict())

    def save(self):
        self.workbook.close()



if __name__ == '__main__':
    header = [
        ['Code', 'Title', 'Category', 'Price', 'Min. Shipping Price', 'Max. Shipping Price']
    ]
    matrix = [
        ['MLM123', 'iPhone Xs Max 64GB', 'Mobile->iPhone->Xs Max', 28000, 200, 400], 
    ]
    settings = get()
    settings.name = f'{settings.name}_{datetime.datetime.now():%Y-%m-%d}.xlsx'
    xlsx = Xlsx(name=settings.name, worksheet_name=settings.worksheet_name)
    xlsx.set_columns_size(settings.columns_size_format)
    xlsx.set_rows_size(settings.rows_size_format)
    header_format = xlsx.add_cells_format(settings.header_cells_format)
    content_format = xlsx.add_cells_format(settings.content_cells_format)
    xlsx.set_properties(settings.properties)
    xlsx.write(rows=len(header),
               columns=len(header[0]),
               init_row=0,
               init_column=0,
               data=header,
               style=header_format)
    xlsx.write(rows=len(matrix),
               columns=len(matrix[0]),
               init_row=1, 
               init_column=0,
               data=matrix,
               style=content_format)
    xlsx.save()


__all__ = ['Xlsx']
