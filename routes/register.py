from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
import hashlib
from model import doctorModel, pharmaModel
from database import engine
router = APIRouter()

def hash_password(password):
    password_bytes = password.encode('utf-8')
    hashed_password= hashlib.sha256(password_bytes).hexdigest()
    return hashed_password

@router.post("/register")
def register_user(data: doctorModel):
    with Session(engine) as session:

        # condition to register doctor or pharma



        # check if user already registered
        statement = select(doctorModel).where(doctorModel.email == data.email)
        existing_user = session.exec(statement).first()

        if existing_user:
            raise HTTPException(status_code = 400, detail = "User already registered")
        
        doctor = doctorModel(
            fullname= data.fullname,
            email= data.email,
            password= hash_password(data.password),
            mobile_no= data.mobile_no,
            aadhar_no= data.aadhar_no,
            pan_no= data.pan_no,
            experience= data.experience,
            specialization= data.specialization,
            highest_degree= data.highest_degree
        )
        session.add(doctor)
        session.commit()
        session.refresh(doctor)

        return {"message":"Doctor registered sucessfully", "id": doctor.id}

