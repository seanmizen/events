#!/bin/bash
# set -e

# https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

# SERVER="my_database_server";
# PW="password123";
# DB="my_database";

# echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
# (docker kill $SERVER || :) && \
#   (docker rm $SERVER || :) && \
#   docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
#   -e PGPASSWORD=$PW \
#   -p 5432:5432 \
#   -d postgres

# # wait for pg to start
# echo "sleep wait for pg-server [$SERVER] to start";
# SLEEP 3;

# # create the db 
# echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
# echo "\l" | docker exec -i $SERVER psql -U postgres


#!/bin/bash
set -e

SERVER="my_database_server";
PW="password123";
DB="my_database";
SEED=false;

# Check if --seed or -s flag is passed
if [[ "$1" == "--seed" || "$1" == "-s" ]]; then
  SEED=true
fi

# Check if container exists
if docker container inspect $SERVER >/dev/null 2>&1; then
  echo "Existing container [$SERVER] found. Starting the container..."
  docker start $SERVER
else
  echo "No existing container found. Creating and starting new instance of [$SERVER]..."
  docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres
  sleep 3
fi

# Seed the database if --seed or -s flag is passed
if $SEED; then
  echo "Seeding the database..."
  echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
  echo "\l" | docker exec -i $SERVER psql -U postgres
fi
