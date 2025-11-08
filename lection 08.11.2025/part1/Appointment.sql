-- Создание таблицы журнал приема
CREATE TABLE Appointment (
    RecordID INT PRIMARY KEY,
    patId INT NOT NULL,
    DoctorId INT NOT NULL,
    Date_Time DATETIME NOT NULL,
    Cost DECIMAL(10,2) NOT NULL,
    Diagnoz Text,
    ServiceCode INT NOT NULL,
    FOREIGN KEY (patId) REFERENCES Patients(patId),
    FOREIGN KEY (DoctorId) REFERENCES Doctor(DoctorId),
    FOREIGN KEY (ServiceCode) REFERENCES Services(ServicesId)
);