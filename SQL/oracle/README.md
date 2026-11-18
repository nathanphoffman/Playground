# Oracle

**Run:** `just oracle` from `SQL/` (starts Oracle Database Free in Docker, runs `oracle/hello.sql`, stops it). The first start downloads a large image and takes a minute or two. Connect yourself with user `system`, password `Passw0rd`, service `FREEPDB1`, port 1521.

**Try next:** Try sequences and `GENERATED ALWAYS AS IDENTITY`, PL/SQL (`BEGIN ... END;`), and `ROWNUM`. The C# driver is `Oracle.ManagedDataAccess.Core`.
