#!/bin/bash
set -e

SERVER="my_database_server"
DESTROY=false

if [[ "$1" == "--destroy" || "$1" == "-d" ]]; then
  DESTROY=true
fi

docker stop $SERVER

if $DESTROY; then
  docker rm $SERVER
  echo "Container [$SERVER] stopped and deleted."
else
  echo "Container [$SERVER] stopped."
fi
