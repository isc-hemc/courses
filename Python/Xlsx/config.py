from dataclasses import dataclass
from dataclasses import InitVar
from dataclasses import field
from typing import Union
from typing import List
from json import load


@dataclass
class CellsFormat:
    font_name: str
    font_size: int
    font_color: str
    bold: bool
    italic: bool
    underline: bool
    align: str
    valign: str
    border: int
    num_format: str

    def getdict(self):
        return {
            'font_name': self.font_name,
            'font_size': self.font_size,
            'font_color': self.font_color,
            'bold': self.bold,
            'italic': self.italic,
            'underline': self.underline,
            'align': self.align,
            'valign': self.valign,
            'border': self.border,
            'num_format': self.num_format
        }


@dataclass 
class SizeFormat:
    indexes: List[Union[str, int]]
    sizes: List[int]


@dataclass
class Properties:
    title: str
    subject: str
    author: str
    manager: str
    company: str
    category: str
    keywords: str
    created: str
    comments: str

    def getdict(self):
        return {
            'title': self.title,
            'subject': self.subject,
            'author': self.author,
            'manager': self.manager,
            'company': self.company,
            'category': self.category,
            'keywords': self.keywords,
            'created': self.created,
            'comments': self.comments
        }


@dataclass
class XlsxSettings:
    name: str
    worksheet_name: str
    header_cells_format: CellsFormat = field(init=False)
    content_cells_format: CellsFormat = field(init=False)
    rows_size_format: SizeFormat = field(init=False)
    columns_size_format: SizeFormat = field(init=False)
    properties: Properties = field(init=False)

    header_cells_format_raw: InitVar[CellsFormat]
    content_cells_format_raw: InitVar[CellsFormat]
    rows_size_format_raw: InitVar[SizeFormat]
    columns_size_format_raw: InitVar[SizeFormat]
    properties_raw: InitVar[Properties]

    def __post_init__(self, header_cells_format_raw, content_cells_format_raw,
                      rows_size_format_raw, columns_size_format_raw, properties_raw):
        self.header_cells_format = CellsFormat(**header_cells_format_raw)
        self.content_cells_format = CellsFormat(**content_cells_format_raw)
        self.rows_size_format = SizeFormat(**rows_size_format_raw)
        self.columns_size_format = SizeFormat(**columns_size_format_raw)
        self.properties = Properties(**properties_raw)


def get() -> XlsxSettings:
    with open('config.json', 'r') as f:
        settings = load(f)
        xlsx_settings = XlsxSettings(**settings)
    return xlsx_settings
