
SELECT * FROM diagnoz;

SELECT * FROM doctor;

SELECT * FROM diagnoz d 
LEFT JOIN patients p ON d.patid = p.patid;