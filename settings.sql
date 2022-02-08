-- settings.sql
CREATE DATABASE brewr;
CREATE USER brewuser WITH PASSWORD 'brewr';
GRANT ALL PRIVILEGES ON DATABASE brewr TO brewuser;