NODE ?=

build: fjson.js
	@$(NODE) ./node_modules/.bin/uglifyjs \
		fjson.js -o fjson.min.js --reserved "module,exports,fJSON,parse" \
		--source-map fjson.min.map -c -m sort

.PHONY: 
