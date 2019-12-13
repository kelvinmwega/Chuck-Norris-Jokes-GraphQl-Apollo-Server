CREATE USER zaz
with encrypted password 'user';
CREATE DATABASE userdb WITH
    OWNER = zaz
ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    TEMPLATE = template0
    CONNECTION LIMIT = -1;
;
GRANT ALL PRIVILEGES ON DATABASE mydb TO zaz;
