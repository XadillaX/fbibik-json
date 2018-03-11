UGLIFY_PATH=./node_modules/.bin/uglifyjs
MOCHA_PATH=./node_modules/.bin/_mocha
ISTANBUL_PATH=./node_modules/.bin/istanbul
COVERALLS_PATH=./node_modules/.bin/coveralls

build: fjson.js
	@$(NODE) ./node_modules/.bin/uglifyjs \
		fjson.js -o fjson.min.js --reserved "module,exports,fJSON,parse" \
		-c -m --source-map

test-coveralls:
	@$(ISTANBUL_PATH) cover $(MOCHA_PATH) \
		--report lcovonly \
		-- \
		-R spec && \
		cat ./coverage/lcov.info | \
		\
		$(COVERALLS_PATH) && \
		rm -rf ./coverage

test:
	@$(MOCHA_PATH)

.PHONY: test test-coveralls
