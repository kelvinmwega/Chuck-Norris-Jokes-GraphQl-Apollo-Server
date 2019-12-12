CREATE USER admin
with encrypted password 'admin';
CREATE DATABASE HelloTractorDB WITH
    OWNER = kelvin
ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    TEMPLATE = template0
    CONNECTION LIMIT = -1;
;
GRANT ALL PRIVILEGES ON DATABASE mydb TO admin;
