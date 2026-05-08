#!/bin/bash

cd /home/ubuntu/deploy

git pull origin main

sudo docker compose down

sudo docker compose up --build -d