NODE ?=

build:
	@$(NODE) ./node_modules/.bin/uglifyjs \
		fjson.js > fjson.min.js

.PHONY: build
