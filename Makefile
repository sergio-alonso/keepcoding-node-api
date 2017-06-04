.phony: help install run

help:
	"help - Show this help"
	"install - Install depencies"
	"run - run the app"

install:
	npm install

run:
	DEBUG=keepcoding-node-api:* npm start
