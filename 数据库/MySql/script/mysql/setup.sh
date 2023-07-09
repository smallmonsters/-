#!/bin/bash

MYSQL_HOST="localhost"
MYSQL_USER="root"
MYSQL_PASSWORD="123456"
SQL_FILES=("/mysql/create_data_db.sql" "/mysql/create_constraint_db.sql")
sleep 10

for file in "${SQL_FILES[@]}"
do
    mysql -h $MYSQL_HOST -u $MYSQL_USER -p$MYSQL_PASSWORD  < "$file"
done

