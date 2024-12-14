-- Create the database
CREATE DATABASE gatepass_management;

-- Use the database
USE gatepass_management;

-- Create the visitors table
CREATE TABLE visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    visit_date DATE NOT NULL,
    visit_time TIME NOT NULL,
    duration INT NOT NULL,
    purpose VARCHAR(50) NOT NULL,
    person_to_visit VARCHAR(100) NOT NULL,
    id_type VARCHAR(50) NOT NULL,
    id_number VARCHAR(50) NOT NULL,
    company VARCHAR(100),
    position VARCHAR(100),
    vehicle_reg VARCHAR(20),
    vehicle_type VARCHAR(20),
    comments TEXT
);

-- Create the employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    employee_id VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    entry_date DATE NOT NULL,
    entry_time TIME NOT NULL,
    duration INT,
    reason VARCHAR(50) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    approver_name VARCHAR(100) NOT NULL,
    approver_email VARCHAR(100) NOT NULL,
    id_type VARCHAR(50) NOT NULL,
    id_number VARCHAR(50) NOT NULL,
    vehicle_reg VARCHAR(20),
    vehicle_type VARCHAR(20),
    comments TEXT
);
select * from visitors;
