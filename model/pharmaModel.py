from sqlmodel import SQLModel, Field

class Pharma(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    fullname: str
    email: str
    password: str
    mobile_no: str
    aadhar_no: str
    pan_no: str
    experience: int
    specialization: str
    highest_degree: str
    
